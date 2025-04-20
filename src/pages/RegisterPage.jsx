import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook, faApple } from "@fortawesome/free-brands-svg-icons";
import "./AuthPages.css";

const RegisterPage = () => {
   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
   });

   const [errors, setErrors] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

      // First name validation
      if (!formData.firstName.trim()) {
         newErrors.firstName = "First name is required";
      }

      // Last name validation
      if (!formData.lastName.trim()) {
         newErrors.lastName = "Last name is required";
      }

      // Email validation
      if (!formData.email) {
         newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
         newErrors.email = "Email is invalid";
      }

      // Password validation
      if (!formData.password) {
         newErrors.password = "Password is required";
      } else if (formData.password.length < 8) {
         newErrors.password = "Password must be at least 8 characters";
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
         newErrors.password = "Password must contain at least one uppercase letter, one lowercase letter, and one number";
      }

      // Confirm password validation
      if (!formData.confirmPassword) {
         newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.confirmPassword !== formData.password) {
         newErrors.confirmPassword = "Passwords do not match";
      }

      // Terms agreement validation
      if (!formData.agreeTerms) {
         newErrors.agreeTerms = "You must agree to the terms and conditions";
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
            // Here you would typically make an API call to register the user

            // Reset form after submission (in a real app, you'd redirect on success)
            setIsSubmitting(false);
            alert("Registration successful!");
         }, 1500);
      }
   };

   const handleSocialSignUp = (provider) => {
      console.log(`Sign up with ${provider}`);
      // Here you would implement social sign-up logic
   };

   const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
   };

   const toggleConfirmPasswordVisibility = () => {
      setShowConfirmPassword(!showConfirmPassword);
   };

   return (
      <div className='auth-page'>
         <div className='auth-container'>
            <div className='auth-content'>
               <div className='auth-form-container'>
                  <h1>Create an Account</h1>
                  <p className='auth-subtitle'>Join our community of crystal enthusiasts</p>

                  <div className='social-auth-buttons'>
                     <button type='button' className='social-auth-button' onClick={() => handleSocialSignUp("Google")}>
                        <FontAwesomeIcon icon={faGoogle} />
                        <span>Sign up with Google</span>
                     </button>

                     <button type='button' className='social-auth-button' onClick={() => handleSocialSignUp("Facebook")}>
                        <FontAwesomeIcon icon={faFacebook} />
                        <span>Sign up with Facebook</span>
                     </button>

                     <button type='button' className='social-auth-button' onClick={() => handleSocialSignUp("Apple")}>
                        <FontAwesomeIcon icon={faApple} />
                        <span>Sign up with Apple</span>
                     </button>
                  </div>

                  <div className='auth-divider'>
                     <span>or</span>
                  </div>

                  <form onSubmit={handleSubmit} className='auth-form'>
                     <div className='form-row'>
                        <div className='form-group'>
                           <label htmlFor='firstName'>First Name</label>
                           <div className='input-with-icon'>
                              <FontAwesomeIcon icon={faUser} className='input-icon' />
                              <input
                                 type='text'
                                 id='firstName'
                                 name='firstName'
                                 placeholder='Enter your first name'
                                 value={formData.firstName}
                                 onChange={handleChange}
                                 className={errors.firstName ? "error" : ""}
                              />
                           </div>
                           {errors.firstName && <div className='error-message'>{errors.firstName}</div>}
                        </div>

                        <div className='form-group'>
                           <label htmlFor='lastName'>Last Name</label>
                           <div className='input-with-icon'>
                              <FontAwesomeIcon icon={faUser} className='input-icon' />
                              <input
                                 type='text'
                                 id='lastName'
                                 name='lastName'
                                 placeholder='Enter your last name'
                                 value={formData.lastName}
                                 onChange={handleChange}
                                 className={errors.lastName ? "error" : ""}
                              />
                           </div>
                           {errors.lastName && <div className='error-message'>{errors.lastName}</div>}
                        </div>
                     </div>

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
                        <label htmlFor='password'>Password</label>
                        <div className='input-with-icon'>
                           <FontAwesomeIcon icon={faLock} className='input-icon' />
                           <input
                              type={showPassword ? "text" : "password"}
                              id='password'
                              name='password'
                              placeholder='Create a password'
                              value={formData.password}
                              onChange={handleChange}
                              className={errors.password ? "error" : ""}
                           />
                           <button type='button' className='password-toggle' onClick={togglePasswordVisibility}>
                              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                           </button>
                        </div>
                        {errors.password && <div className='error-message'>{errors.password}</div>}
                        <div className='password-requirements'>
                           Password must be at least 8 characters and include uppercase, lowercase, and numbers
                        </div>
                     </div>

                     <div className='form-group'>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <div className='input-with-icon'>
                           <FontAwesomeIcon icon={faLock} className='input-icon' />
                           <input
                              type={showConfirmPassword ? "text" : "password"}
                              id='confirmPassword'
                              name='confirmPassword'
                              placeholder='Confirm your password'
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              className={errors.confirmPassword ? "error" : ""}
                           />
                           <button type='button' className='password-toggle' onClick={toggleConfirmPasswordVisibility}>
                              <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                           </button>
                        </div>
                        {errors.confirmPassword && <div className='error-message'>{errors.confirmPassword}</div>}
                     </div>

                     <div className='form-group checkbox-group'>
                        <label className='checkbox-label'>
                           <input type='checkbox' name='agreeTerms' checked={formData.agreeTerms} onChange={handleChange} />
                           <span>
                              I agree to the <Link to='/terms-conditions'>Terms & Conditions</Link> and{" "}
                              <Link to='/privacy-policy'>Privacy Policy</Link>
                           </span>
                        </label>
                        {errors.agreeTerms && <div className='error-message'>{errors.agreeTerms}</div>}
                     </div>

                     <button type='submit' className='auth-submit-button' disabled={isSubmitting}>
                        {isSubmitting ? "Creating Account..." : "Create Account"}
                     </button>
                  </form>

                  <div className='auth-footer'>
                     <p>
                        Already have an account? <Link to='/signin'>Sign in</Link>
                     </p>
                  </div>
               </div>
            </div>

            <div className='auth-image'>
               <div className='auth-image-overlay'></div>
               <div className='auth-image-content'>
                  <h2>Join Our Crystal Community</h2>
                  <p>Create an account to access exclusive deals, save your favorite items, and track your orders.</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default RegisterPage;
