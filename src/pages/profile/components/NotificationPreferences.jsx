import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faMobile, 
  faExclamationTriangle,
  faSave
} from '@fortawesome/free-solid-svg-icons';
import './ProfileComponents.css';

const NotificationPreferences = ({ isGuest }) => {
  const [preferences, setPreferences] = useState({
    email: {
      orderUpdates: true,
      promotions: true,
      newProducts: true,
      blogPosts: false,
      accountUpdates: true
    },
    sms: {
      orderUpdates: false,
      promotions: false,
      newProducts: false,
      accountUpdates: true
    }
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  
  const handleToggle = (channel, type) => {
    setPreferences(prev => ({
      ...prev,
      [channel]: {
        ...prev[channel],
        [type]: !prev[channel][type]
      }
    }));
    setHasChanges(true);
  };
  
  const handleSavePreferences = () => {
    setIsSubmitting(true);
    
    // Simulate API call to save preferences
    setTimeout(() => {
      setIsSubmitting(false);
      setHasChanges(false);
      alert('Notification preferences saved successfully!');
    }, 1500);
  };
  
  if (isGuest) {
    return (
      <div className="notification-preferences">
        <div className="profile-section">
          <div className="profile-section-header">
            <h2>Notification Preferences</h2>
          </div>
          
          <div className="guest-restriction-message">
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <h3>Feature Not Available</h3>
            <p>Notification preferences are only available for registered users. Create an account to manage your notification settings.</p>
            <a href="/register" className="action-button">Create Account</a>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="notification-preferences">
      <div className="profile-section">
        <div className="profile-section-header">
          <h2>Notification Preferences</h2>
        </div>
        
        <p className="section-description">
          Manage how and when you receive notifications from Crystal Haven. You can customize your preferences for different types of notifications.
        </p>
        
        <div className="notification-channels">
          <div className="channel-section">
            <div className="channel-header">
              <FontAwesomeIcon icon={faEnvelope} />
              <h3>Email Notifications</h3>
            </div>
            
            <div className="notification-options">
              <div className="notification-option">
                <div className="option-details">
                  <h4>Order Updates</h4>
                  <p>Receive notifications about your order status, shipping, and delivery.</p>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={preferences.email.orderUpdates}
                    onChange={() => handleToggle('email', 'orderUpdates')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              <div className="notification-option">
                <div className="option-details">
                  <h4>Promotions & Discounts</h4>
                  <p>Stay informed about special offers, sales, and exclusive discounts.</p>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={preferences.email.promotions}
                    onChange={() => handleToggle('email', 'promotions')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              <div className="notification-option">
                <div className="option-details">
                  <h4>New Product Announcements</h4>
                  <p>Be the first to know when we add new crystals and products to our collection.</p>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={preferences.email.newProducts}
                    onChange={() => handleToggle('email', 'newProducts')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              <div className="notification-option">
                <div className="option-details">
                  <h4>Blog Posts & Articles</h4>
                  <p>Receive notifications when we publish new blog posts about crystals and their benefits.</p>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={preferences.email.blogPosts}
                    onChange={() => handleToggle('email', 'blogPosts')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              <div className="notification-option">
                <div className="option-details">
                  <h4>Account Updates</h4>
                  <p>Important information about your account, security, and privacy.</p>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={preferences.email.accountUpdates}
                    onChange={() => handleToggle('email', 'accountUpdates')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>
          
          <div className="channel-section">
            <div className="channel-header">
              <FontAwesomeIcon icon={faMobile} />
              <h3>SMS Notifications</h3>
            </div>
            
            <div className="notification-options">
              <div className="notification-option">
                <div className="option-details">
                  <h4>Order Updates</h4>
                  <p>Receive text messages about your order status, shipping, and delivery.</p>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={preferences.sms.orderUpdates}
                    onChange={() => handleToggle('sms', 'orderUpdates')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              <div className="notification-option">
                <div className="option-details">
                  <h4>Promotions & Discounts</h4>
                  <p>Stay informed about special offers, sales, and exclusive discounts.</p>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={preferences.sms.promotions}
                    onChange={() => handleToggle('sms', 'promotions')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              <div className="notification-option">
                <div className="option-details">
                  <h4>New Product Announcements</h4>
                  <p>Be the first to know when we add new crystals and products to our collection.</p>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={preferences.sms.newProducts}
                    onChange={() => handleToggle('sms', 'newProducts')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              
              <div className="notification-option">
                <div className="option-details">
                  <h4>Account Updates</h4>
                  <p>Important information about your account, security, and privacy.</p>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={preferences.sms.accountUpdates}
                    onChange={() => handleToggle('sms', 'accountUpdates')}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div className="notification-actions">
          <button 
            className="save-button"
            onClick={handleSavePreferences}
            disabled={isSubmitting || !hasChanges}
          >
            {isSubmitting ? (
              <>
                <div className="button-spinner"></div>
                <span>Saving...</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faSave} />
                <span>Save Preferences</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPreferences;
