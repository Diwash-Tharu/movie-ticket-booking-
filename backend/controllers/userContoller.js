import e from "express";
import User from "../models/userModel"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const JWT_SECRET='your_jwt_secret_here';
const TOKEN_EXPRIENCES_IN='24h'; // 24 hours

// Refister function 


/* ---------------- helpers ---------------- */
const emailIsValid = (e) => /\S+@\S+\.\S+/.test(String(e || ""));
const extractCleanPhone = (p) => String(p || "").replace(/\D/g, "");
const mkToken=(payload)=> jwt.sign(payload, JWT_SECRET, {expiresIn:TOKEN_EXPRIENCES_IN});

export const registerUser = async (req, res) => {
    try{
        const { fullName, username, email, phone, password, birthDate } = req.body || {};
        if(!fullName ||!username ||!email|| !phone ||!password ||!birthDate){
            return res.status(400).json({
                success:false,
                message:"Please fill all the fields"})

        }
        if(fullName !=='string' || fullName.trim().length < 3){
            return res.status(400).json({
                success:false,
                message:"Full name must be a string and at least 3 characters long"
            })
        }

         if(username !=='string' || username.trim().length < 3){
            return res.status(400).json({
                success:false,
                message:"Username must be a string and at least 3 characters long"
            })
        }

        if(!emailIsValid(email)){
            return res.status(400).json({
                success:false,
                message:"Please provide a valid email address"
            })
        }

        const cleanPhone= extractCleanPhone(phone);
        if(!cleanPhone || cleanPhone.length < 10){
            return res.status(400).json({
                success:false,
                message:"Please provide a valid phone number"
            })
        }

        if (String(password).length < 6){
            return res.status(400).json({
                success:false,
                message:"Password must be at least 6 characters long"
            })
        }
        const parseBirth = new Date(birthDate)
        if(Number.isNaN(parseBirth.getTime())){
            return res.status(400).json({
                success:false,
                message:"Please provide a valid birth date"
            })
        }
        const existingByEmail = await User.findOne({ email:email.toLowerCase().trim()});
        if(existingByEmail){
            return res.status(400).json({
                success:false,
                message:"A user with this email already exists"
            })
        }

        const existingByUsername = await User.findOne({ username:username.toLowerCase().trim()});
        if(existingByUsername){
            return res.status(400).json({
                success:false,
                message:"A user with this username already exists"
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //  inserting the user into the database
        const newUser = new User({
            fullName:fullName.trim(),
            username:username.trim(),
            email:email.trim().toLowerCase(),
            phone:phone.trim(),
            password:hashedPassword,
            birthDate:parseBirth
        })

        //  here is the mongo db it
        const token =mkToken({id:newUser.__id})
        const userToReturn={
            id:newUser._id,
            fullName:newUser.fullName,
            username:newUser.username,
            email:newUser.email,
            phone:newUser.phone,
            birthDate:newUser.birthDate
        };

        return res.status(201).json({
            success:true,
            message:"User registered successfully",
            token,
            user:userToReturn
        })

    }

    catch(err)
    {
        console.error("Error in registerUser:", err);
        if(err.code === 11000){
            const dubkey=Object.keys(err.keyValue || {})[0];
            return res.status(400).json({
                success:false,
                message:"Duplicate field value entered"
            })
        }
        return res.status(500).json({
            success:false,
            message:"Server error"
        })
    }
}


//  creating the login function for the user
export  async function login(req,res){
    try{
    
        // taking the emial from the body of the request
        const {email, password}= req.body ||{};

        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Please provide both email and password"
            })
        }

        const user= await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Invalid email or password"
            })
        }

        const isMatch= await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({
                success:false,
                message:"Invalid email or password"
            })
        }

        // creating a token for the user
        const token =mkToken({id:user._id.toString()})
        return res.status(200).json({
            success:true,
            message:"User logged in successfully",
            token,
            user:{
                id:user._id,
                username:user.username,
                email:user.email,
                
            }
        })

    }
    catch(err){
        console.error("Error in login:", err);
        return res.status(500).json({
            success:false,
            message:"Server error"
        })

    }
}