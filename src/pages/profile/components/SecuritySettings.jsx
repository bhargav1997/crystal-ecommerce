import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, 
  faLock, 
  faEye, 
  faEyeSlash, 
  faMobileAlt,
  faExclamationTriangle,
  faSave,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import './ProfileComponents.css';

const SecuritySettings = ({ isGuest }) => {
  const [activeSection, setActiveSection] = useState('password');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [passwordErrors, setPasswordErrors] = useState({});
  
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (passwordErrors[name]) {
      setPasswordErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validatePasswordForm = () => {
    const newErrors = {};
    
    // Validate current password
    if (!passwordForm.currentPassword) {
      newErrors.currentPassword = 'Current password is required';
    }
    
    // Validate new password
    if (!passwordForm.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (passwordForm.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(passwordForm.newPassword)) {
      newErrors.newPassword = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }
    
    // Validate confirm password
    if (!passwordForm.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your new password';
    } else if (passwordForm.confirmPassword !== passwordForm.newPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setPasswordErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    
    if (validatePasswordForm()) {
      setIsSubmitting(true);
      
      // Simulate API call to change password
      setTimeout(() => {
        // Reset form
        setPasswordForm({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
        
        setIsSubmitting(false);
        alert('Password changed successfully!');
      }, 1500);
    }
  };
  
  const handle2FAToggle = () => {
    if (is2FAEnabled) {
      // Confirm disabling 2FA
      if (window.confirm('Are you sure you want to disable two-factor authentication? This will make your account less secure.')) {
        setIs2FAEnabled(false);
      }
    } else {
      // In a real app, this would open a flow to set up 2FA
      alert('In a real application, this would start the 2FA setup process with QR code scanning or SMS verification.');
      setIs2FAEnabled(true);
    }
  };
  
  if (isGuest) {
    return (
      <div className="security-settings">
        <div className="profile-section">
          <div className="profile-section-header">
            <h2>Security Settings</h2>
          </div>
          
          <div className="guest-restriction-message">
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <h3>Feature Not Available</h3>
            <p>Security settings are only available for registered users. Create an account to manage your security preferences.</p>
            <a href="/register" className="action-button">Create Account</a>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="security-settings">
      <div className="profile-section">
        <div className="profile-section-header">
          <h2>Security Settings</h2>
        </div>
        
        <div className="security-tabs">
          <button 
            className={`tab-button ${activeSection === 'password' ? 'active' : ''}`}
            onClick={() => setActiveSection('password')}
          >
            <FontAwesomeIcon icon={faLock} />
            <span>Change Password</span>
          </button>
          
          <button 
            className={`tab-button ${activeSection === '2fa' ? 'active' : ''}`}
            onClick={() => setActiveSection('2fa')}
          >
            <FontAwesomeIcon icon={faMobileAlt} />
            <span>Two-Factor Authentication</span>
          </button>
        </div>
        
        <div className="security-content">
          {activeSection === 'password' && (
            <div className="change-password">
              <p className="section-description">
                Strong passwords help protect your account. We recommend using a unique password that you don't use for other websites.
              </p>
              
              <form onSubmit={handlePasswordSubmit} className="password-form">
                <div className="form-group">
                  <label htmlFor="currentPassword">Current Password</label>
                  <div className="password-input">
                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      id="currentPassword"
                      name="currentPassword"
                      value={passwordForm.currentPassword}
                      onChange={handlePasswordChange}
                      className={passwordErrors.currentPassword ? 'error' : ''}
                    />
                    <button 
                      type="button" 
                      className="password-toggle"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    >
                      <FontAwesomeIcon icon={showCurrentPassword ? faEyeSlash : faEye} />
                    </button>
                  </div>
                  {passwordErrors.currentPassword && (
                    <div className="error-message">{passwordErrors.currentPassword}</div>
                  )}
                </div>
                
                <div className="form-group">
                  <label htmlFor="newPassword">New Password</label>
                  <div className="password-input">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      id="newPassword"
                      name="newPassword"
                      value={passwordForm.newPassword}
                      onChange={handlePasswordChange}
                      className={passwordErrors.newPassword ? 'error' : ''}
                    />
                    <button 
                      type="button" 
                      className="password-toggle"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      <FontAwesomeIcon icon={showNewPassword ? faEyeSlash : faEye} />
                    </button>
                  </div>
                  {passwordErrors.newPassword && (
                    <div className="error-message">{passwordErrors.newPassword}</div>
                  )}
                  <div className="password-requirements">
                    Password must be at least 8 characters and include uppercase, lowercase, and numbers
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm New Password</label>
                  <div className="password-input">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={passwordForm.confirmPassword}
                      onChange={handlePasswordChange}
                      className={passwordErrors.confirmPassword ? 'error' : ''}
                    />
                    <button 
                      type="button" 
                      className="password-toggle"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                    </button>
                  </div>
                  {passwordErrors.confirmPassword && (
                    <div className="error-message">{passwordErrors.confirmPassword}</div>
                  )}
                </div>
                
                <div className="form-actions">
                  <button 
                    type="button" 
                    className="cancel-button"
                    onClick={() => {
                      setPasswordForm({
                        currentPassword: '',
                        newPassword: '',
                        confirmPassword: ''
                      });
                      setPasswordErrors({});
                    }}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                    <span>Cancel</span>
                  </button>
                  
                  <button 
                    type="submit" 
                    className="save-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="button-spinner"></div>
                        <span>Changing Password...</span>
                      </>
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faSave} />
                        <span>Change Password</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
          
          {activeSection === '2fa' && (
            <div className="two-factor-auth">
              <p className="section-description">
                Two-factor authentication adds an extra layer of security to your account by requiring a verification code in addition to your password when you sign in.
              </p>
              
              <div className="tfa-status">
                <div className="status-header">
                  <h3>Two-Factor Authentication</h3>
                  <div className={`status-badge ${is2FAEnabled ? 'enabled' : 'disabled'}`}>
                    {is2FAEnabled ? 'Enabled' : 'Disabled'}
                  </div>
                </div>
                
                <div className="status-description">
                  {is2FAEnabled ? (
                    <p>Your account is protected with two-factor authentication. When you sign in, you'll need to provide your password and a verification code.</p>
                  ) : (
                    <p>Two-factor authentication is currently disabled. Enable it to add an extra layer of security to your account.</p>
                  )}
                </div>
                
                <button 
                  className={`tfa-toggle-button ${is2FAEnabled ? 'disable' : 'enable'}`}
                  onClick={handle2FAToggle}
                >
                  {is2FAEnabled ? 'Disable Two-Factor Authentication' : 'Enable Two-Factor Authentication'}
                </button>
                
                {is2FAEnabled && (
                  <div className="recovery-codes">
                    <h4>Recovery Codes</h4>
                    <p>Recovery codes can be used to access your account if you lose your phone or cannot receive verification codes.</p>
                    <button className="view-codes-button">View Recovery Codes</button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
