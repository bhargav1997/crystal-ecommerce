import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch, faBars, faTimes, faHeart, faTruck, faBook, faUser } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../context/CartContext";
import "./Header.css";

const Header = () => {
   const { totalItems } = useCart();
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [searchQuery, setSearchQuery] = useState("");

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   const handleSearch = (e) => {
      e.preventDefault();
      // Implement search functionality
      console.log("Searching for:", searchQuery);
      // You could redirect to a search results page here
   };

   return (
      <header className='header'>
         <div className='header-container'>
            <div className='logo'>
               <Link to='/'>
                  <h1>Crystal Haven</h1>
               </Link>
            </div>

            <div className='mobile-toggle' onClick={toggleMenu}>
               <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </div>

            <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
               <ul>
                  <li>
                     <Link to='/' onClick={() => setIsMenuOpen(false)}>
                        Home
                     </Link>
                  </li>
                  <li>
                     <Link to='/shop' onClick={() => setIsMenuOpen(false)}>
                        Shop
                     </Link>
                  </li>
                  <li>
                     <Link to='/blog' onClick={() => setIsMenuOpen(false)}>
                        Blog
                     </Link>
                  </li>
                  <li>
                     <Link to='/about' onClick={() => setIsMenuOpen(false)}>
                        About
                     </Link>
                  </li>
                  <li>
                     <Link to='/contact' onClick={() => setIsMenuOpen(false)}>
                        Contact
                     </Link>
                  </li>
               </ul>
            </nav>

            <div className='header-actions'>
               <form className='search-form' onSubmit={handleSearch}>
                  <input
                     type='text'
                     placeholder='Search for crystals, gemstones...'
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type='submit'>
                     <FontAwesomeIcon icon={faSearch} />
                  </button>
               </form>

               <Link to='/wishlist' className='cart-icon' title='Wishlist'>
                  <FontAwesomeIcon icon={faHeart} />
               </Link>

               <Link to='/track-order' className='cart-icon' title='Track Order'>
                  <FontAwesomeIcon icon={faTruck} />
               </Link>

               <Link to='/profile' className='cart-icon' title='My Account'>
                  <FontAwesomeIcon icon={faUser} />
               </Link>

               <Link to='/cart' className='cart-icon' title='Shopping Cart'>
                  <FontAwesomeIcon icon={faShoppingCart} />
                  {totalItems > 0 && <span className='cart-count'>{totalItems}</span>}
               </Link>
            </div>
         </div>
      </header>
   );
};

export default Header;
