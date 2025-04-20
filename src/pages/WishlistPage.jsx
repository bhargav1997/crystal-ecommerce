import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import "./WishlistPage.css";

const WishlistPage = () => {
   const { addToCart } = useCart();
   const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();

   const handleRemoveFromWishlist = (id) => {
      removeFromWishlist(id);
   };

   const handleAddToCart = (product) => {
      addToCart(product);
   };

   const handleClearWishlist = () => {
      clearWishlist();
   };

   return (
      <div className='wishlist-page'>
         <div className='container'>
            <div className='wishlist-header'>
               <h1>My Wishlist</h1>
               <p>Save your favorite crystals for later</p>
            </div>

            {wishlist.length === 0 ? (
               <div className='empty-wishlist'>
                  <div className='empty-wishlist-icon'>
                     <FontAwesomeIcon icon={faHeart} />
                  </div>
                  <h2>Your wishlist is empty</h2>
                  <p>Add items to your wishlist by clicking the heart icon on product pages.</p>
                  <Link to='/shop' className='shop-now-btn'>
                     Explore Crystals
                  </Link>
               </div>
            ) : (
               <>
                  <div className='wishlist-actions'>
                     <button className='clear-wishlist-btn' onClick={handleClearWishlist}>
                        Clear Wishlist
                     </button>
                  </div>

                  <div className='wishlist-grid'>
                     {wishlist.map((item) => (
                        <div className='wishlist-item' key={item.id}>
                           <div className='wishlist-item-image'>
                              <img src={item.image} alt={item.name} />
                              <button
                                 className='remove-btn'
                                 onClick={() => handleRemoveFromWishlist(item.id)}
                                 aria-label='Remove from wishlist'>
                                 <FontAwesomeIcon icon={faTrash} />
                              </button>
                           </div>

                           <div className='wishlist-item-info'>
                              <Link to={`/product/${item.id}`} className='item-name'>
                                 {item.name}
                              </Link>
                              <div className='item-category'>{item.category}</div>
                              <div className='item-price'>${item.price.toFixed(2)}</div>

                              <div className='item-actions'>
                                 <button className='add-to-cart-btn' onClick={() => handleAddToCart(item)}>
                                    <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                                 </button>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </>
            )}
         </div>
      </div>
   );
};

export default WishlistPage;
