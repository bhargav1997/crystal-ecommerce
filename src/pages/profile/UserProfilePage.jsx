import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faShoppingBag, 
  faCreditCard, 
  faGift, 
  faMapMarkerAlt, 
  faShieldAlt, 
  faBell, 
  faSignOutAlt,
  faEdit,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import './ProfilePages.css';

// Import profile components
import ProfileDashboard from './components/ProfileDashboard';
import EditProfile from './components/EditProfile';
import OrderHistory from './components/OrderHistory';
import PaymentMethods from './components/PaymentMethods';
import RewardsPoints from './components/RewardsPoints';
import AddressBook from './components/AddressBook';
import SecuritySettings from './components/SecuritySettings';
import NotificationPreferences from './components/NotificationPreferences';

const UserProfilePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isGuest, setIsGuest] = useState(false);
  
  useEffect(() => {
    // Get the active tab from the URL path
    const path = location.pathname.split('/');
    const tab = path[path.length - 1];
    
    if (tab && tab !== 'profile') {
      setActiveTab(tab);
    } else {
      setActiveTab('dashboard');
    }
    
    // Simulate fetching user data
    setTimeout(() => {
      // Check if user is guest
      const isGuestUser = localStorage.getItem('isGuest') === 'true';
      setIsGuest(isGuestUser);
      
      if (isGuestUser) {
        setUser({
          firstName: 'Guest',
          lastName: 'User',
          email: 'guest@example.com',
          phone: '',
          avatar: null,
          isGuest: true,
          joinDate: new Date().toISOString(),
          rewardsPoints: 0,
          tier: 'Bronze'
        });
      } else {
        // Mock user data for a registered user
        setUser({
          firstName: 'Sarah',
          lastName: 'Johnson',
          email: 'sarah.johnson@example.com',
          phone: '(555) 123-4567',
          avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          isGuest: false,
          joinDate: '2023-01-15T00:00:00.000Z',
          rewardsPoints: 1250,
          tier: 'Gold'
        });
      }
      
      setIsLoading(false);
    }, 1000);
  }, [location.pathname]);
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/profile/${tab === 'dashboard' ? '' : tab}`);
  };
  
  const handleSignOut = () => {
    // Clear any user data from localStorage
    localStorage.removeItem('isGuest');
    // Redirect to home page
    navigate('/');
  };
  
  if (isLoading) {
    return (
      <div className="profile-loading">
        <div className="loading-spinner"></div>
        <p>Loading your profile...</p>
      </div>
    );
  }
  
  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <ProfileDashboard user={user} />;
      case 'edit-profile':
        return <EditProfile user={user} setUser={setUser} />;
      case 'orders':
        return <OrderHistory isGuest={isGuest} />;
      case 'payment-methods':
        return <PaymentMethods isGuest={isGuest} />;
      case 'rewards':
        return <RewardsPoints user={user} isGuest={isGuest} />;
      case 'addresses':
        return <AddressBook isGuest={isGuest} />;
      case 'security':
        return <SecuritySettings isGuest={isGuest} />;
      case 'notifications':
        return <NotificationPreferences isGuest={isGuest} />;
      default:
        return <ProfileDashboard user={user} />;
    }
  };
  
  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="container">
            <h1>My Account</h1>
            <div className="breadcrumbs">
              <Link to="/">Home</Link> / 
              <Link to="/profile">My Account</Link>
              {activeTab !== 'dashboard' && ` / ${activeTab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`}
            </div>
          </div>
        </div>
        
        <div className="profile-content container">
          <div className="profile-sidebar">
            <div className="user-info">
              <div className="user-avatar">
                {user.avatar ? (
                  <img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
                ) : (
                  <div className="avatar-placeholder">
                    {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                  </div>
                )}
                {isGuest && <div className="guest-badge">Guest</div>}
              </div>
              <div className="user-details">
                <h3>{user.firstName} {user.lastName}</h3>
                <p>{user.email}</p>
                {!isGuest && (
                  <div className="user-tier">
                    <span className={`tier-badge ${user.tier.toLowerCase()}`}>{user.tier}</span>
                    <span className="points">{user.rewardsPoints} points</span>
                  </div>
                )}
              </div>
            </div>
            
            <nav className="profile-nav">
              <ul>
                <li className={activeTab === 'dashboard' ? 'active' : ''}>
                  <button onClick={() => handleTabChange('dashboard')}>
                    <FontAwesomeIcon icon={faUser} />
                    <span>Dashboard</span>
                    <FontAwesomeIcon icon={faChevronRight} className="nav-arrow" />
                  </button>
                </li>
                <li className={activeTab === 'edit-profile' ? 'active' : ''}>
                  <button onClick={() => handleTabChange('edit-profile')}>
                    <FontAwesomeIcon icon={faEdit} />
                    <span>Edit Profile</span>
                    <FontAwesomeIcon icon={faChevronRight} className="nav-arrow" />
                  </button>
                </li>
                <li className={activeTab === 'orders' ? 'active' : ''}>
                  <button onClick={() => handleTabChange('orders')}>
                    <FontAwesomeIcon icon={faShoppingBag} />
                    <span>Order History</span>
                    <FontAwesomeIcon icon={faChevronRight} className="nav-arrow" />
                  </button>
                </li>
                <li className={activeTab === 'payment-methods' ? 'active' : ''}>
                  <button onClick={() => handleTabChange('payment-methods')}>
                    <FontAwesomeIcon icon={faCreditCard} />
                    <span>Payment Methods</span>
                    <FontAwesomeIcon icon={faChevronRight} className="nav-arrow" />
                  </button>
                </li>
                <li className={activeTab === 'rewards' ? 'active' : ''}>
                  <button onClick={() => handleTabChange('rewards')} disabled={isGuest}>
                    <FontAwesomeIcon icon={faGift} />
                    <span>Rewards & Points</span>
                    {isGuest && <span className="guest-restricted">(Registered users only)</span>}
                    {!isGuest && <FontAwesomeIcon icon={faChevronRight} className="nav-arrow" />}
                  </button>
                </li>
                <li className={activeTab === 'addresses' ? 'active' : ''}>
                  <button onClick={() => handleTabChange('addresses')}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>Address Book</span>
                    <FontAwesomeIcon icon={faChevronRight} className="nav-arrow" />
                  </button>
                </li>
                <li className={activeTab === 'security' ? 'active' : ''}>
                  <button onClick={() => handleTabChange('security')} disabled={isGuest}>
                    <FontAwesomeIcon icon={faShieldAlt} />
                    <span>Security Settings</span>
                    {isGuest && <span className="guest-restricted">(Registered users only)</span>}
                    {!isGuest && <FontAwesomeIcon icon={faChevronRight} className="nav-arrow" />}
                  </button>
                </li>
                <li className={activeTab === 'notifications' ? 'active' : ''}>
                  <button onClick={() => handleTabChange('notifications')} disabled={isGuest}>
                    <FontAwesomeIcon icon={faBell} />
                    <span>Notification Preferences</span>
                    {isGuest && <span className="guest-restricted">(Registered users only)</span>}
                    {!isGuest && <FontAwesomeIcon icon={faChevronRight} className="nav-arrow" />}
                  </button>
                </li>
                <li className="sign-out">
                  <button onClick={handleSignOut}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>{isGuest ? 'Exit Guest Mode' : 'Sign Out'}</span>
                  </button>
                </li>
              </ul>
            </nav>
            
            {isGuest && (
              <div className="guest-upgrade-banner">
                <h4>Create an Account</h4>
                <p>Sign up to access all features and save your information.</p>
                <Link to="/register" className="upgrade-button">Create Account</Link>
              </div>
            )}
          </div>
          
          <div className="profile-main-content">
            {renderActiveComponent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
