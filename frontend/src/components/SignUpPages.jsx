import React, {useState} from 'react'
import {signUpStyles, signUpCSS} from '../assets/dummyStyles'
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { ArrowLeft, Calendar, Clapperboard, Mail, Phone, Ticket, User, Lock, EyeOff, EyeIcon, Film} from "lucide-react";

const SignUpPages = () => {


    const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    birthDate: "",
    password: "",
    });
    
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange =(e)=>{
        const {name, value} = e.target;
        setFormData((prevState)=>({
            ...prevState,
            [name]: value,
        }));
        if(errors[name]){
            setErrors((prevErrors)=>({
                ...prevErrors,
                [name]: "",
            }));
        }
    }

// function to validate wheather all 
           

            const validateForm = () => {
                const newErrors = {};

                if (!formData.fullName.trim()) {
                newErrors.fullName = "Full name is required";
                } else if (formData.fullName.length < 2) {
                newErrors.fullName = "Full name must be at least 2 characters";
                }

                if (!formData.username.trim()) {
                newErrors.username = "Username is required";
                } else if (formData.username.length < 3) {
                newErrors.username = "Username must be at least 3 characters";
                }

                if (!formData.email.trim()) {
                newErrors.email = "Email is required";
                } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = "Email is invalid";
                }

                if (!formData.phone.trim()) {
                newErrors.phone = "Phone number is required";
                // } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
                // newErrors.phone = "Phone number must be 10 digits";
                 }

                if (!formData.password) {
                newErrors.password = "Password is required";
                } else if (formData.password.length < 6) {
                newErrors.password = "Password must be at least 6 characters";
                }

                if (!formData.birthDate) {
                newErrors.birthDate = "Birth date is required";
                } else {
                const birthDate = new Date(formData.birthDate);
                const today = new Date();
                const age = today.getFullYear() - birthDate.getFullYear();

                if (age < 13) {
                    newErrors.birthDate = "You must be at least 13 years old";
                }
                }
                setErrors(newErrors);
                return Object.keys(newErrors).length === 0;
            }

    const goBack =() =>{
        window.history.back();
    }        

    const handleSubmit = (e) => {
        // stop the page from reloading when the form is submitted
        e.preventDefault();

        if (!validateForm()) {
            toast.error("Please fix the errors in the form before submitting.");
            return;
        }
        // console.log("Sign Up Data", formData);
        console.log("Form is valid. ",{
            ...formData,
            password: "********" + formData.password.slice(-2), // Mask the password for security
        })
        setIsLoading(true);

        setTimeout(() => {
        setIsLoading(false);
            toast.success("Sign Up successful");


            setTimeout(() => {
                window.location.href = '/login';
            }, 1000);
        }, 1000);
    }
    return (
    <div className={signUpStyles.container}>
        <div className={signUpStyles.particlesContainer}>
            {
                [...Array(15)].map((_, i) => (
                <div
                    key={i}
                    className={signUpStyles.particle}
                    style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                    }}
                ></div>
                ))
            }
        </div>
        {/* SignUpPages here */}

        <div className={signUpStyles.gradientOrbs}>
            <div className={signUpStyles.orb1}></div>
            <div className={signUpStyles.orb1}></div>
        </div>

            <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />

            <div className={signUpStyles.mainContent}>
                <button onClick={goBack} className={signUpStyles.backButton}>
                    <ArrowLeft size={20} className={signUpStyles.backIcon} />
                    <span className={signUpStyles.backText}>
                        Back to Home
                    </span>
                </button>

                <div className={signUpStyles.card}>
                    <div className={signUpStyles.cardHeader}></div>
                    <div className={signUpStyles.cardContent}>
                        <div className={signUpStyles.header}>
                            <div className={signUpStyles.headerFlex}>
                                <Ticket className={signUpStyles.headerIcon} size={32} />
                                <h2 className={signUpStyles.headerTitle}>
                                    Join Our Cinema
                                </h2>
                            </div>
                            <p className={signUpStyles.headerSubtitle}>
                                Create an account to enjoy exclusive benefits and stay updated with the latest movie releases.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className={signUpStyles.form}>
                            <div className={signUpStyles.formGrid}>
                                <div>
                                    <label htmlFor="fullName" className={signUpStyles.field}>Full Name</label>
                                
                                    <div className={signUpStyles.inputContainer}>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className={`${signUpStyles.input.base}
                                        ${errors.fullName 
                                        ? signUpStyles.input.error :
                                        signUpStyles.input.normal}
                                        ${signUpStyles.inputWithIcon}`}
                                        placeholder="Enter your full name"
                                    />
                                    <div className={signUpStyles.inputIcon}>
                                        <User size={18} />
                                    </div>
                                </div>
                                {errors.fullName && <p className={signUpStyles.errorText}>{errors.fullName}
                                    {errors.fullName}
                                    </p>}
                                </div>


                            <div>
                                    <label htmlFor="username" className={signUpStyles.field}>Full Name</label>
                                
                                    <div className={signUpStyles.inputContainer}>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        className={`${signUpStyles.input.base}
                                        ${errors.username 
                                        ? signUpStyles.input.error :
                                        signUpStyles.input.normal}
                                        ${signUpStyles.inputWithIcon}`}
                                        placeholder="Enter your user name"
                                    />
                                    <div className={signUpStyles.inputIcon}>
                                        <Clapperboard size={18} />
                                    </div>
                                </div>
                                {errors.username && <p className={signUpStyles.errorText}>{errors.username}
                                    {errors.username}
                                    </p>}
                                </div>
                            </div>

                            <div className={signUpStyles.formGrid}>
                                <div>
                                    <label htmlFor="email" className={signUpStyles.field}>
                                        Email</label>
                                
                                    <div className={signUpStyles.inputContainer}>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`${signUpStyles.input.base}
                                        ${errors.email 
                                        ? signUpStyles.input.error :
                                        signUpStyles.input.normal}
                                        ${signUpStyles.inputWithIcon}`}
                                        placeholder="your@email.com"
                                    />
                                    <div className={signUpStyles.inputIcon}>
                                        <Mail size={18} />
                                    </div>
                                </div>
                                {errors.email && <p className={signUpStyles.errorText}>{errors.email}
                                    {errors.email}
                                    </p>}
                                </div>

                                <div>
                                    <label htmlFor="phone" className={signUpStyles.field}>
                                        Phone</label>
                                
                                    <div className={signUpStyles.inputContainer}>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`${signUpStyles.input.base}
                                        ${errors.phone
                                        ? signUpStyles.input.error :
                                        signUpStyles.input.normal}
                                        ${signUpStyles.inputWithIcon}`}
                                        placeholder="phone number"
                                    />
                                    <div className={signUpStyles.inputIcon}>
                                        <Phone size={18} />
                                    </div>
                                </div>
                                {errors.phone && <p className={signUpStyles.errorText}>{errors.phone}
                                    {errors.phone}
                                    </p>}
                                </div>

                            </div>

                            <div className={signUpStyles.formGrid}>
                            <div>
                                    <label htmlFor="birthdate" className={signUpStyles.field}>
                                        Birth Date</label>
                                
                                    <div className={signUpStyles.inputContainer}>
                                    <input
                                        type="date"
                                        id="birthDate"
                                        name="birthDate"
                                        value={formData.birthDate}
                                        onChange={handleChange}
                                        className={`${signUpStyles.input.base}
                                        ${errors.birthDate
                                        ? signUpStyles.input.error :
                                        signUpStyles.input.normal}
                                        ${signUpStyles.inputWithIcon}`}
                                        placeholder="Birth Date"
                                    />
                                    <div className={signUpStyles.inputIcon}>
                                        <Calendar size={18} />
                                    </div>
                                </div>
                                {errors.birthDate && <p className={signUpStyles.errorText}>{errors.birthDate}
                                    {errors.birthDate}
                                    </p>}
                            </div>


                            <div>
                                    <label htmlFor="password" className={signUpStyles.field}>
                                        Password</label>
                                
                                    <div className={signUpStyles.inputContainer}>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={`${signUpStyles.input.base}
                                        ${errors.password
                                        ? signUpStyles.input.error :
                                        signUpStyles.input.normal}
                                        ${signUpStyles.inputWithIcon}`}
                                        placeholder="Password"
                                    />
                                    <div className={signUpStyles.inputIcon}>
                                        <Lock size={18} />
                                    </div>

                                <button type="button" className={signUpStyles.passwordToggle}
                                onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? (
                                        <EyeOff size={18} className={signUpStyles.toggleIcon}/>
                                    ):(
                                        <EyeIcon size={18} className={signUpStyles.toggleIcon}/>
                                    )}
                                </button>
                                

                                </div>

                                {errors.password && <p className={signUpStyles.errorText}>{errors.password}
                                    {errors.password}
                                    </p>}
                            </div>


                            </div>

                            <div className={signUpStyles.submitContainer}>
                                <button type="submit" 
                                disabled={isLoading}
                                className={`${signUpStyles.submitButton.base} ${
                                    isLoading ? signUpStyles.submitButton.loading :""
                                }`}
                                >
                                    {isLoading ? (
                                        <div className={signUpStyles.submitContent}>
                                            <div className={signUpStyles.loadingSpinner}></div>
                                            Create Your Account..
                                        </div>
                                    ):(
                                        <div className={signUpStyles.submitContent}>
                                            <Film className={signUpStyles.submitIcon} size={20} />
                                            <span className="font-cinema">
                                                Create Your Account
                                            </span>
                                        </div>
                                    )}

                                </button>

                            </div>
                        </form>

                        <div className={signUpStyles.loginContainer}>
                            <p className={signUpStyles.loginText}>
                                Already have an account?{' '}
                                <span className={signUpStyles.loginLink}>
                                    <a href="/login">Log in</a>
                                </span>
                            </p>
                        </div>

                    </div>
                </div>

            </div>

    </div>
    )
}

export default SignUpPages