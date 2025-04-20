import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingCart, faArrowLeft, faCube, faImage, faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import ProductViewer3D from "./ProductViewer3D";
import "./ProductDetail.css";

const ProductDetail = ({ products }) => {
   const { id } = useParams();
   const navigate = useNavigate();
   const { addToCart } = useCart();
   const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
   const [quantity, setQuantity] = useState(1);
   const [viewMode, setViewMode] = useState("image"); // 'image' or '3d'

   const product = products.find((p) => p.id === parseInt(id));

   if (!product) {
      return (
         <div className='product-not-found'>
            <h2>Product Not Found</h2>
            <p>The product you're looking for doesn't exist.</p>
            <button onClick={() => navigate("/shop")} className='back-btn'>
               <FontAwesomeIcon icon={faArrowLeft} /> Back to Shop
            </button>
         </div>
      );
   }

   const { name, description, price, image, category, rating, stock } = product;

   const handleQuantityChange = (e) => {
      const value = parseInt(e.target.value);
      if (value > 0 && value <= stock) {
         setQuantity(value);
      }
   };

   const decreaseQuantity = () => {
      if (quantity > 1) {
         setQuantity(quantity - 1);
      }
   };

   const increaseQuantity = () => {
      if (quantity < stock) {
         setQuantity(quantity + 1);
      }
   };

   const handleAddToCart = () => {
      addToCart(product, quantity);
   };

   const handleToggleWishlist = () => {
      if (isInWishlist(product.id)) {
         removeFromWishlist(product.id);
      } else {
         addToWishlist(product);
      }
   };

   return (
      <div className='product-detail-container'>
         <button onClick={() => navigate(-1)} className='back-btn'>
            <FontAwesomeIcon icon={faArrowLeft} /> Back
         </button>

         <div className='product-detail'>
            <div className='product-detail-image'>
               <div className='view-mode-toggle'>
                  <button className={`view-mode-btn ${viewMode === "image" ? "active" : ""}`} onClick={() => setViewMode("image")}>
                     <FontAwesomeIcon icon={faImage} /> 2D View
                  </button>
                  <button className={`view-mode-btn ${viewMode === "3d" ? "active" : ""}`} onClick={() => setViewMode("3d")}>
                     <FontAwesomeIcon icon={faCube} /> 3D View
                  </button>
               </div>

               {viewMode === "image" ? <img src={image} alt={name} /> : <ProductViewer3D product={product} />}
            </div>

            <div className='product-detail-info'>
               <div className='product-category'>{category}</div>
               <h1 className='product-title'>{name}</h1>

               <div className='product-rating'>
                  <FontAwesomeIcon icon={faStar} className='star-icon' />
                  <span>{rating} Rating</span>
               </div>

               <div className='product-price'>${price.toFixed(2)}</div>

               <div className='product-description'>
                  <h3>Description</h3>
                  <p>{description}</p>
               </div>

               <div className='product-stock'>
                  <span className={stock > 0 ? "in-stock" : "out-of-stock"}>
                     {stock > 0 ? `In Stock (${stock} available)` : "Out of Stock"}
                  </span>
               </div>

               {stock > 0 && (
                  <>
                     <div className='quantity-selector'>
                        <button onClick={decreaseQuantity} disabled={quantity <= 1}>
                           -
                        </button>
                        <input type='number' min='1' max={stock} value={quantity} onChange={handleQuantityChange} />
                        <button onClick={increaseQuantity} disabled={quantity >= stock}>
                           +
                        </button>
                     </div>

                     <div className='product-actions'>
                        <button className='add-to-cart-button' onClick={handleAddToCart}>
                           <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                        </button>
                        <button
                           className={`wishlist-button ${isInWishlist(product.id) ? "in-wishlist" : ""}`}
                           onClick={handleToggleWishlist}>
                           <FontAwesomeIcon icon={isInWishlist(product.id) ? faHeartSolid : faHeartRegular} />
                           {isInWishlist(product.id) ? "In Wishlist" : "Add to Wishlist"}
                        </button>
                     </div>
                  </>
               )}
            </div>
         </div>
      </div>
   );
};

export default ProductDetail;
