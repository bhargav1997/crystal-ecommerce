import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheckCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import './AuthPages.css';

const OTPVerificationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);
  
  const inputRefs = useRef([]);
  
  // Set up the input refs
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);
  
  // Get email from location state or use a default
  useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    } else {
      // If no email is provided, you might want to redirect back to sign in
      // or use a default for testing
      setEmail('user@example.com');
    }
  }, [location]);
  
  // Timer for resend button
  useEffect(() => {
    if (timeLeft > 0 && !canResend) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else if (timeLeft === 0 && !canResend) {
      setCanResend(true);
    }
  }, [timeLeft, canResend]);
  
  const handleChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return;
    
    // Update the OTP array
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Clear error when user types
    if (error) setError('');
    
    // Auto-focus next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };
  
  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    
    // Check if pasted data is a 6-digit number
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split('');
      setOtp(digits);
      
      // Focus the last input
      inputRefs.current[5].focus();
    }
  };
  
  const validateOtp = () => {
    // Check if all OTP fields are filled
    if (otp.some(digit => !digit)) {
      setError('Please enter the complete 6-digit code');
      return false;
    }
    
    return true;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateOtp()) {
      setIsSubmitting(true);
      
      // Simulate API call to verify OTP
      setTimeout(() => {
        const enteredOtp = otp.join('');
        console.log('Verifying OTP:', enteredOtp);
        
        // For demo purposes, any OTP is valid
        // In a real app, you would verify this with your backend
        setIsSubmitting(false);
        setIsVerified(true);
        
        // Redirect after a short delay to show success message
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }, 1500);
    }
  };
  
  const handleResendOtp = () => {
    // Reset the timer and disable resend button
    setTimeLeft(30);
    setCanResend(false);
    
    // Simulate sending a new OTP
    console.log('Resending OTP to:', email);
    
    // Show a temporary message
    setError('');
    alert('A new verification code has been sent to your email.');
  };
  
  return (
    <div className="auth-page">
      <div className="auth-container otp-container">
        <div className="auth-content">
          <div className="auth-form-container">
            <Link to="/signin" className="back-link">
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>Back to Sign In</span>
            </Link>
            
            {!isVerified ? (
              <>
                <h1>Verification Code</h1>
                <p className="auth-subtitle">
                  We've sent a 6-digit verification code to <strong>{email}</strong>
                </p>
                
                <form onSubmit={handleSubmit} className="auth-form otp-form">
                  <div className="otp-inputs">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={index === 0 ? handlePaste : null}
                        ref={el => inputRefs.current[index] = el}
                        className={error && !digit ? 'error' : ''}
                        autoFocus={index === 0}
                      />
                    ))}
                  </div>
                  
                  {error && <div className="error-message">{error}</div>}
                  
                  <button 
                    type="submit" 
                    className="auth-submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <FontAwesomeIcon icon={faSpinner} spin />
                        <span>Verifying...</span>
                      </>
                    ) : 'Verify Code'}
                  </button>
                </form>
                
                <div className="resend-otp">
                  <p>Didn't receive the code?</p>
                  {canResend ? (
                    <button 
                      type="button" 
                      className="resend-button"
                      onClick={handleResendOtp}
                    >
                      Resend Code
                    </button>
                  ) : (
                    <p className="resend-timer">Resend code in {timeLeft} seconds</p>
                  )}
                </div>
              </>
            ) : (
              <div className="success-message">
                <div className="success-icon">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <h2>Verification Successful</h2>
                <p>Your account has been verified successfully.</p>
                <p>Redirecting you to the homepage...</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="auth-image">
          <div className="auth-image-overlay"></div>
          <div className="auth-image-content">
            <h2>Account Verification</h2>
            <p>Verify your account to access all features and start exploring our premium crystal collection.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerificationPage;
