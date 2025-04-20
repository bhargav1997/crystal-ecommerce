import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook, faApple } from "@fortawesome/free-brands-svg-icons";
import "./AuthPages.css";

const SignInPage = () => {
   const navigate = useNavigate();
   const [formData, setFormData] = useState({
      email: "",
      password: "",
      rememberMe: false,
   });

   const [errors, setErrors] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [isGuestSigningIn, setIsGuestSigningIn] = useState(false);

   const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: type === "checkbox" ? checked : value,
      }));

      // Clear error when user starts typing
      if (errors[name]) {
         setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
         }));
      }
   };

   const validateForm = () => {
      const newErrors = {};

      // Email validation
      if (!formData.email) {
         newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
         newErrors.email = "Email is invalid";
      }

      // Password validation
      if (!formData.password) {
         newErrors.password = "Password is required";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (validateForm()) {
         setIsSubmitting(true);

         // Simulate API call
         setTimeout(() => {
            console.log("Form submitted:", formData);
            // Here you would typically make an API call to authenticate the user

            // In a real app, you might want to verify the user's email with OTP
            navigate("/otp-verification", { state: { email: formData.email } });

            // Reset submission state
            setIsSubmitting(false);
         }, 1500);
      }
   };

   const handleSocialSignIn = (provider) => {
      console.log(`Sign in with ${provider}`);
      // Here you would implement social sign-in logic
   };

   const handleGuestSignIn = () => {
      setIsGuestSigningIn(true);

      // Simulate guest sign-in process
      setTimeout(() => {
         console.log("Signed in as guest");
         // In a real app, you would create a temporary guest account
         // and set appropriate authentication state

         // Set guest status in localStorage
         localStorage.setItem("isGuest", "true");

         // Navigate to home page after successful guest sign-in
         navigate("/");
         setIsGuestSigningIn(false);
      }, 1500);
   };

   return (
      <div className='auth-page'>
         <div className='auth-container'>
            <div className='auth-content'>
               <div className='auth-form-container'>
                  <h1>Sign In</h1>
                  <p className='auth-subtitle'>Welcome back! Please enter your details.</p>

                  <div className='social-auth-buttons'>
                     <button type='button' className='social-auth-button' onClick={() => handleSocialSignIn("Google")}>
                        <FontAwesomeIcon icon={faGoogle} />
                        <span>Sign in with Google</span>
                     </button>

                     <button type='button' className='social-auth-button' onClick={() => handleSocialSignIn("Facebook")}>
                        <FontAwesomeIcon icon={faFacebook} />
                        <span>Sign in with Facebook</span>
                     </button>

                     <button type='button' className='social-auth-button' onClick={() => handleSocialSignIn("Apple")}>
                        <FontAwesomeIcon icon={faApple} />
                        <span>Sign in with Apple</span>
                     </button>
                  </div>

                  <div className='auth-divider'>
                     <span>or</span>
                  </div>

                  <form onSubmit={handleSubmit} className='auth-form'>
                     <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-with-icon'>
                           <FontAwesomeIcon icon={faEnvelope} className='input-icon' />
                           <input
                              type='email'
                              id='email'
                              name='email'
                              placeholder='Enter your email'
                              value={formData.email}
                              onChange={handleChange}
                              className={errors.email ? "error" : ""}
                           />
                        </div>
                        {errors.email && <div className='error-message'>{errors.email}</div>}
                     </div>

                     <div className='form-group'>
                        <div className='label-with-link'>
                           <label htmlFor='password'>Password</label>
                           <Link to='/forgot-password' className='forgot-password-link'>
                              Forgot password?
                           </Link>
                        </div>
                        <div className='input-with-icon'>
                           <FontAwesomeIcon icon={faLock} className='input-icon' />
                           <input
                              type='password'
                              id='password'
                              name='password'
                              placeholder='Enter your password'
                              value={formData.password}
                              onChange={handleChange}
                              className={errors.password ? "error" : ""}
                           />
                        </div>
                        {errors.password && <div className='error-message'>{errors.password}</div>}
                     </div>

                     <div className='form-group checkbox-group'>
                        <label className='checkbox-label'>
                           <input type='checkbox' name='rememberMe' checked={formData.rememberMe} onChange={handleChange} />
                           <span>Remember me</span>
                        </label>
                     </div>

                     <button type='submit' className='auth-submit-button' disabled={isSubmitting}>
                        {isSubmitting ? "Signing in..." : "Sign In"}
                     </button>
                  </form>

                  <div className='auth-footer'>
                     <p>
                        Don't have an account? <Link to='/register'>Sign up</Link>
                     </p>
                  </div>

                  <div className='guest-signin'>
                     <p>Don't want to create an account?</p>
                     <button type='button' className='guest-signin-button' onClick={handleGuestSignIn} disabled={isGuestSigningIn}>
                        {isGuestSigningIn ? (
                           <>
                              <FontAwesomeIcon icon={faSpinner} spin />
                              <span>Signing in as guest...</span>
                           </>
                        ) : (
                           <>
                              <FontAwesomeIcon icon={faUser} />
                              <span>Continue as Guest</span>
                           </>
                        )}
                     </button>
                  </div>
               </div>
            </div>

            <div className='auth-image'>
               <div className='auth-image-overlay'></div>
               <div className='auth-image-content'>
                  <h2>Discover the Healing Power of Crystals</h2>
                  <p>Join our community and explore our premium collection of ethically sourced crystals.</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignInPage;
