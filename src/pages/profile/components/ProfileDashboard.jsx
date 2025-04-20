import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShoppingBag, 
  faCreditCard, 
  faGift, 
  faMapMarkerAlt,
  faCalendarAlt,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import './ProfileComponents.css';

const ProfileDashboard = ({ user }) => {
  const isGuest = user.isGuest;
  const joinDate = new Date(user.joinDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Mock data for dashboard
  const recentOrders = isGuest ? [] : [
    {
      id: 'ORD-12345',
      date: '2023-05-15',
      total: 129.99,
      status: 'Delivered',
      items: 3
    },
    {
      id: 'ORD-12344',
      date: '2023-04-28',
      total: 75.50,
      status: 'Delivered',
      items: 2
    }
  ];
  
  const savedAddresses = isGuest ? [] : [
    {
      id: 1,
      name: 'Home',
      isDefault: true,
      street: '123 Crystal Way',
      city: 'Sedona',
      state: 'AZ',
      zip: '86336',
      country: 'United States'
    }
  ];
  
  const savedPaymentMethods = isGuest ? [] : [
    {
      id: 1,
      type: 'visa',
      last4: '4242',
      expiry: '05/25',
      isDefault: true
    }
  ];
  
  return (
    <div className="profile-dashboard">
      <div className="welcome-section">
        <h2>Welcome back, {user.firstName}!</h2>
        <p>
          {isGuest 
            ? 'You are currently browsing as a guest. Create an account to save your information and access all features.'
            : `Member since ${joinDate}`
          }
        </p>
      </div>
      
      <div className="dashboard-grid">
        {/* Recent Orders */}
        <div className="dashboard-card">
          <div className="card-header">
            <div className="card-icon">
              <FontAwesomeIcon icon={faShoppingBag} />
            </div>
            <h3>Recent Orders</h3>
          </div>
          
          <div className="card-content">
            {recentOrders.length > 0 ? (
              <div className="recent-orders">
                {recentOrders.slice(0, 2).map(order => (
                  <div className="recent-order-item" key={order.id}>
                    <div className="order-info">
                      <div className="order-id">{order.id}</div>
                      <div className="order-date">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        {new Date(order.date).toLocaleDateString()}
                      </div>
                      <div className="order-status">
                        <span className={`status-badge ${order.status.toLowerCase()}`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                    <div className="order-details">
                      <div className="order-items">{order.items} items</div>
                      <div className="order-total">${order.total.toFixed(2)}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-card-state">
                <p>You have no recent orders.</p>
              </div>
            )}
          </div>
          
          <Link to="/profile/orders" className="card-footer">
            <span>View All Orders</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        
        {/* Rewards & Points */}
        <div className="dashboard-card">
          <div className="card-header">
            <div className="card-icon">
              <FontAwesomeIcon icon={faGift} />
            </div>
            <h3>Rewards & Points</h3>
          </div>
          
          <div className="card-content">
            {!isGuest ? (
              <div className="rewards-summary">
                <div className="points-circle">
                  <div className="points-value">{user.rewardsPoints}</div>
                  <div className="points-label">Points</div>
                </div>
                <div className="rewards-info">
                  <div className="tier-info">
                    <span className="label">Current Tier:</span>
                    <span className={`tier-badge ${user.tier.toLowerCase()}`}>{user.tier}</span>
                  </div>
                  <div className="points-info">
                    <span className="label">Points Value:</span>
                    <span className="value">${(user.rewardsPoints * 0.05).toFixed(2)}</span>
                  </div>
                  <div className="next-tier">
                    <span className="label">Next Tier:</span>
                    <span className="value">
                      {user.tier === 'Bronze' ? 'Silver (750 more points)' : 
                       user.tier === 'Silver' ? 'Gold (1500 more points)' : 
                       user.tier === 'Gold' ? 'Platinum (2500 more points)' : 
                       'Highest tier reached'}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="empty-card-state">
                <p>Create an account to earn rewards points with every purchase.</p>
              </div>
            )}
          </div>
          
          <Link to={isGuest ? "/register" : "/profile/rewards"} className="card-footer">
            <span>{isGuest ? "Sign Up to Earn Points" : "View Rewards Details"}</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        
        {/* Saved Addresses */}
        <div className="dashboard-card">
          <div className="card-header">
            <div className="card-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <h3>Saved Addresses</h3>
          </div>
          
          <div className="card-content">
            {savedAddresses.length > 0 ? (
              <div className="address-summary">
                {savedAddresses.slice(0, 1).map(address => (
                  <div className="address-item" key={address.id}>
                    <div className="address-name">
                      {address.name}
                      {address.isDefault && <span className="default-badge">Default</span>}
                    </div>
                    <div className="address-details">
                      <p>{address.street}</p>
                      <p>{address.city}, {address.state} {address.zip}</p>
                      <p>{address.country}</p>
                    </div>
                  </div>
                ))}
                {savedAddresses.length > 1 && (
                  <div className="more-addresses">
                    +{savedAddresses.length - 1} more address(es)
                  </div>
                )}
              </div>
            ) : (
              <div className="empty-card-state">
                <p>You have no saved addresses.</p>
              </div>
            )}
          </div>
          
          <Link to="/profile/addresses" className="card-footer">
            <span>Manage Addresses</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        
        {/* Payment Methods */}
        <div className="dashboard-card">
          <div className="card-header">
            <div className="card-icon">
              <FontAwesomeIcon icon={faCreditCard} />
            </div>
            <h3>Payment Methods</h3>
          </div>
          
          <div className="card-content">
            {savedPaymentMethods.length > 0 ? (
              <div className="payment-summary">
                {savedPaymentMethods.slice(0, 2).map(payment => (
                  <div className="payment-item" key={payment.id}>
                    <div className="payment-icon">
                      <div className={`card-type ${payment.type}`}></div>
                    </div>
                    <div className="payment-details">
                      <div className="card-number">
                        •••• •••• •••• {payment.last4}
                      </div>
                      <div className="card-expiry">
                        Expires {payment.expiry}
                      </div>
                      {payment.isDefault && (
                        <div className="default-payment">Default</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-card-state">
                <p>You have no saved payment methods.</p>
              </div>
            )}
          </div>
          
          <Link to="/profile/payment-methods" className="card-footer">
            <span>Manage Payment Methods</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
