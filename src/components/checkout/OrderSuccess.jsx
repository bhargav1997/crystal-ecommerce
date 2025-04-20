import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faHome, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './OrderSuccess.css';

const OrderSuccess = () => {
  const orderNumber = Math.floor(100000 + Math.random() * 900000); // Generate a random order number
  
  return (
    <div className="order-success-container">
      <div className="order-success-content">
        <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
        <h1>Thank You for Your Order!</h1>
        <p className="order-number">Order #{orderNumber}</p>
        <p className="success-message">
          Your order has been placed successfully. We'll send you a confirmation email shortly with your order details.
        </p>
        
        <div className="estimated-delivery">
          <h3>Estimated Delivery</h3>
          <p>Your crystals will be delivered within 3-5 business days.</p>
        </div>
        
        <div className="success-actions">
          <Link to="/" className="home-btn">
            <FontAwesomeIcon icon={faHome} /> Return to Home
          </Link>
          <Link to="/shop" className="shop-btn">
            <FontAwesomeIcon icon={faShoppingBag} /> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
