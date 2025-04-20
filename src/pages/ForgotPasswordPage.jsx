import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './AuthPages.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };
  
  const validateForm = () => {
    if (!email) {
      setError('Email is required');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email is invalid');
      return false;
    }
    return true;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Password reset requested for:', email);
        // Here you would typically make an API call to request a password reset
        
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };
  
  return (
    <div className="auth-page">
      <div className="auth-container forgot-password-container">
        <div className="auth-content">
          <div className="auth-form-container">
            <Link to="/signin" className="back-link">
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>Back to Sign In</span>
            </Link>
            
            {!isSubmitted ? (
              <>
                <h1>Forgot Password</h1>
                <p className="auth-subtitle">Enter your email and we'll send you instructions to reset your password</p>
                
                <form onSubmit={handleSubmit} className="auth-form">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <div className="input-with-icon">
                      <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleChange}
                        className={error ? 'error' : ''}
                      />
                    </div>
                    {error && <div className="error-message">{error}</div>}
                  </div>
                  
                  <button 
                    type="submit" 
                    className="auth-submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                  </button>
                </form>
              </>
            ) : (
              <div className="success-message">
                <div className="success-icon">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <h2>Check Your Email</h2>
                <p>We've sent a password reset link to:</p>
                <p className="email-sent">{email}</p>
                <p>Please check your inbox and follow the instructions to reset your password.</p>
                <p className="note">If you don't see the email, check your spam folder.</p>
                
                <button 
                  className="auth-submit-button"
                  onClick={() => setIsSubmitted(false)}
                >
                  Try Another Email
                </button>
                
                <div className="auth-footer">
                  <p>Remember your password? <Link to="/signin">Sign in</Link></p>
                </div>
              </div>
            )}
            
            {!isSubmitted && (
              <div className="auth-footer">
                <p>Remember your password? <Link to="/signin">Sign in</Link></p>
              </div>
            )}
          </div>
        </div>
        
        <div className="auth-image">
          <div className="auth-image-overlay"></div>
          <div className="auth-image-content">
            <h2>Password Recovery</h2>
            <p>We'll help you get back into your account so you can continue exploring our crystal collection.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
