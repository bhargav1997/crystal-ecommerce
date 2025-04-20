import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faArrowLeft, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, totalPrice, removeFromCart, updateQuantity, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-content">
          <FontAwesomeIcon icon={faShoppingBag} className="empty-cart-icon" />
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any crystals to your cart yet.</p>
          <Link to="/shop" className="continue-shopping-btn">
            <FontAwesomeIcon icon={faArrowLeft} /> Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Shopping Cart</h1>
      
      <div className="cart-content">
        <div className="cart-items">
          <div className="cart-header">
            <span className="header-product">Product</span>
            <span className="header-price">Price</span>
            <span className="header-quantity">Quantity</span>
            <span className="header-total">Total</span>
            <span className="header-actions"></span>
          </div>
          
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-product">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-category">{item.category}</p>
                </div>
              </div>
              
              <div className="item-price">${item.price.toFixed(2)}</div>
              
              <div className="item-quantity">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  disabled={item.quantity >= item.stock}
                >
                  +
                </button>
              </div>
              
              <div className="item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              
              <div className="item-actions">
                <button 
                  className="remove-item-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cart-summary">
          <h2>Order Summary</h2>
          
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          
          <div className="summary-row total">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          
          <div className="cart-actions">
            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout
            </Link>
            
            <button className="clear-cart-btn" onClick={clearCart}>
              Clear Cart
            </button>
            
            <Link to="/shop" className="continue-shopping-btn">
              <FontAwesomeIcon icon={faArrowLeft} /> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
