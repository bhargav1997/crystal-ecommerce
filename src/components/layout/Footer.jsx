import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
   const currentYear = new Date().getFullYear();

   return (
      <footer className='footer'>
         <div className='footer-container'>
            <div className='footer-section'>
               <h3>Crystal Haven</h3>
               <p>Your source for premium quality crystals and gemstones. Discover the healing power of nature's treasures.</p>
               <div className='social-icons'>
                  <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                     <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                     <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href='https://pinterest.com' target='_blank' rel='noopener noreferrer'>
                     <FontAwesomeIcon icon={faPinterest} />
                  </a>
                  <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                     <FontAwesomeIcon icon={faTwitter} />
                  </a>
               </div>
            </div>

            <div className='footer-section'>
               <h3>Quick Links</h3>
               <ul>
                  <li>
                     <Link to='/'>Home</Link>
                  </li>
                  <li>
                     <Link to='/shop'>Shop</Link>
                  </li>
                  <li>
                     <Link to='/about'>About Us</Link>
                  </li>
                  <li>
                     <Link to='/contact'>Contact</Link>
                  </li>
                  <li>
                     <Link to='/blog'>Blog</Link>
                  </li>
                  <li>
                     <Link to='/faq'>FAQ</Link>
                  </li>
               </ul>
            </div>

            <div className='footer-section'>
               <h3>Customer Service</h3>
               <ul>
                  <li>
                     <Link to='/customer-service'>Customer Service</Link>
                  </li>
                  <li>
                     <Link to='/shipping-returns'>Shipping & Returns</Link>
                  </li>
                  <li>
                     <Link to='/track-order'>Track Order</Link>
                  </li>
                  <li>
                     <Link to='/wishlist'>Wishlist</Link>
                  </li>
               </ul>
            </div>

            <div className='footer-section'>
               <h3>Legal</h3>
               <ul>
                  <li>
                     <Link to='/privacy-policy'>Privacy Policy</Link>
                  </li>
                  <li>
                     <Link to='/terms-conditions'>Terms & Conditions</Link>
                  </li>
                  <li>
                     <Link to='/payment-methods'>Payment Methods</Link>
                  </li>
               </ul>
            </div>

            <div className='footer-section'>
               <h3>Newsletter</h3>
               <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
               <form className='newsletter-form'>
                  <input type='email' placeholder='Your email for exclusive deals' required />
                  <button type='submit'>Subscribe</button>
               </form>
            </div>
         </div>

         <div className='footer-bottom'>
            <p>&copy; {currentYear} Crystal Haven. All Rights Reserved.</p>
         </div>
      </footer>
   );
};

export default Footer;
