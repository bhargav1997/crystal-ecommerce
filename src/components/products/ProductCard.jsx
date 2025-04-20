import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart, faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
   const { addToCart } = useCart();
   const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
   const { id, name, price, image, rating, category } = product;

   const handleAddToCart = (e) => {
      e.preventDefault();
      addToCart(product);
   };

   const handleToggleWishlist = (e) => {
      e.preventDefault();
      if (isInWishlist(id)) {
         removeFromWishlist(id);
      } else {
         addToWishlist(product);
      }
   };

   return (
      <div className='product-card'>
         <div className='product-badge'>{category}</div>
         <button className={`wishlist-btn ${isInWishlist(id) ? "in-wishlist" : ""}`} onClick={handleToggleWishlist}>
            <FontAwesomeIcon icon={isInWishlist(id) ? faHeartSolid : faHeartRegular} />
         </button>
         <Link to={`/product/${id}`} className='product-link'>
            <div className='product-image'>
               <img src={image} alt={name} />
               <div className='product-overlay'>
                  <button className='add-to-cart-btn' onClick={handleAddToCart}>
                     <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                  </button>
               </div>
            </div>
            <div className='product-info'>
               <h3 className='product-name'>{name}</h3>
               <div className='product-rating'>
                  <FontAwesomeIcon icon={faStar} className='star-icon' />
                  <span>{rating}</span>
               </div>
               <p className='product-price'>${price.toFixed(2)}</p>
            </div>
         </Link>
      </div>
   );
};

export default ProductCard;
