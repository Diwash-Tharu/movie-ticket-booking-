import React, {useState} from 'react';
import {loginStyles} from '../assets/dummyStyles';
import { ToastContainer } from 'react-toastify';
import { ArrowLeft, Clapperboard, EyeIcon, EyeOff, Film, Popcorn } from "lucide-react";

const LoginPage = () => {

    const [formData, setFormData] = useState({
    email: '',
    password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    //  these will take back to the prevois page
    const goBack =() =>{
        window.history.back();
    };


    const handleChange = (e) => {
        const {name, value} =e.target;
        setFormData((prevState)=>({
            ...prevState,
            [name]: value,
        }));
    };

// creating the handler submit 

const handleSubmit = (e) => {
    //  prevent the page from reloading here 
    e.preventDefault();
    setIsLoading(true); 
    if(!formData.password || formData.password.length < 6){
        alert("Password must be at least 6 characters long");
        setIsLoading(false);

        toast.error("Password must be at least 6 characters long");
        console.warn("Password must be at least 6 characters long");
        return;
    }
    console.log("login Data", formData);
    setTimeout(() => {
        setIsLoading(false);
            try {
            const authObj = { isLoggedIn: true, email: formData.email };
            localStorage.setItem('cine_auth', JSON.stringify(authObj));
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', formData.email || '');
            localStorage.setItem('cine_user_email', formData.email || '');
            console.log('Auth saved to localStorage:', authObj);
            } catch (error){
                console.error('Error saving auth to localStorage:', error);
            }
            toast.success("Login successful");
            //  redirect to the home page after 1 second
            setTimeout(() => {
                window.location.href = '/';
            }, 1000);


    }, 2000);
}


    return (
    <div className={loginStyles.pageContainer}>
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
        
        <div className="relative w-full max-w-md z-10">
            <div className={loginStyles.backButtonContainer}>
                <button onClick={goBack} className={loginStyles.backButton}>
                    <ArrowLeft size={20} className={loginStyles.backButtonIcon} />
                    <span className={loginStyles.backButtonText}>
                        Back to Home
                    </span>
                </button>
            </div>

        <div className={loginStyles.cardContainer}>
            <div className={loginStyles.cardHeader}> </div>

            <div className={loginStyles.cardContent}>
                <div className={loginStyles.headerContainer}>
                    <div className={loginStyles.headerIconContainer}>
                        <Film className={loginStyles.headerIcon} size={24}/>

                        <h2 className={loginStyles.headerTitle}>
                            Cinema Access
                        </h2>
                    </div>
                    <p className={loginStyles.headerSubtitle}>
                        Sign in to access your account
                    </p>
                </div>

            <form onSubmit={handleSubmit}>
                <div className={loginStyles.inputGroup}>
                    <label htmlFor="email" className={loginStyles.label}>
                        Email Adress
                    </label>
                    <div className={loginStyles.inputContainer}>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={loginStyles.input}
                            placeholder="Enter your email"
                        />

                        <div className={loginStyles.inputIcon}>
                           <Clapperboard size={20} className="text-red-500" />
                        </div>
                    </div>
                </div>


                 <div className={loginStyles.inputGroup}>
                    <label htmlFor="password" className={loginStyles.label}>
                        Password
                    </label>
                    <div className={loginStyles.inputContainer}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={loginStyles.inputWithIcon}
                            placeholder="Enter your password"
                        />

                       <button types="submit" className={loginStyles.passwordToggle} onClick={ ()=> setShowPassword(!showPassword)}>
                            {showPassword ? (
                                <EyeOff size={20} className={loginStyles.passwordToggleIcon}/>
                            ):(
                                <EyeIcon size={20} className={loginStyles.passwordToggleIcon}/>
                            )}
                       </button>
                    </div>
                </div>

                <button type="submit" diasbled={isLoading} className={`${loginStyles.submitButton}
                ${isLoading ? loginStyles.submitButtonDisabled:''}`} >
                {isLoading ? (
                    <div className={loginStyles.buttonContent}>
                        <div className={loginStyles.loadingSpinner}></div>
                        <span className={loginStyles.buttonText}>
                            Sign In..
                        </span>
                    </div>
                ):(
                      <div className={loginStyles.buttonContent}>
                        <Popcorn size={18} className={loginStyles.buttonIcon}/>
                        <span className={loginStyles.buttonText}>
                            Access Your Account
                        </span>
                    </div>
                )}    

                </button>

            </form>

            </div>
        
        
        </div>


        <div className={loginStyles.footerContainer}>
            <p className={loginStyles.footerText}>
                Don't have an accont?
                <a href="/signup" className={loginStyles.footerLink}>
                Create one now</a>
            </p>
        </div>

        </div>

        <style jsx>{loginStyles.customCSS}</style>
    </div>
    )
}

export default LoginPage
