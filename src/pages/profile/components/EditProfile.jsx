import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faTrash, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import './ProfileComponents.css';

const EditProfile = ({ user, setUser }) => {
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone || '',
    avatar: user.avatar
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState(user.avatar);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setFormData(prev => ({
          ...prev,
          avatar: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleRemoveImage = () => {
    setPreviewImage(null);
    setFormData(prev => ({
      ...prev,
      avatar: null
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to update profile
    setTimeout(() => {
      // Update the user state with the new data
      setUser(prev => ({
        ...prev,
        ...formData
      }));
      
      setIsSubmitting(false);
      alert('Profile updated successfully!');
    }, 1500);
  };
  
  const handleCancel = () => {
    // Reset form data to original user data
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone || '',
      avatar: user.avatar
    });
    setPreviewImage(user.avatar);
  };
  
  return (
    <div className="edit-profile">
      <div className="profile-section">
        <div className="profile-section-header">
          <h2>Edit Profile</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="edit-profile-form">
          <div className="avatar-upload">
            <div className="avatar-preview">
              {previewImage ? (
                <img src={previewImage} alt="Profile Preview" />
              ) : (
                <div className="avatar-placeholder">
                  {formData.firstName.charAt(0)}{formData.lastName.charAt(0)}
                </div>
              )}
            </div>
            
            <div className="avatar-controls">
              <label className="upload-button">
                <FontAwesomeIcon icon={faUpload} />
                <span>Upload Photo</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange} 
                  style={{ display: 'none' }} 
                />
              </label>
              
              {previewImage && (
                <button 
                  type="button" 
                  className="remove-button"
                  onClick={handleRemoveImage}
                >
                  <FontAwesomeIcon icon={faTrash} />
                  <span>Remove Photo</span>
                </button>
              )}
              
              <div className="hint">
                Recommended: Square image, at least 200x200 pixels
              </div>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={user.isGuest}
            />
            {user.isGuest && (
              <div className="hint">
                Create an account to change your email address.
              </div>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone Number (optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
            />
          </div>
          
          <div className="form-actions">
            <button 
              type="button" 
              className="cancel-button"
              onClick={handleCancel}
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
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faSave} />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
