import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../components/products/ProductCard";
import "./HomePage.css";

const HomePage = ({ products }) => {
   // Get featured products
   const featuredProducts = products.filter((product) => product.featured);

   return (
      <div className='home-page'>
         {/* Hero Section */}
         <section className='hero-section'>
            <div className='hero-content'>
               <h1>Discover the Healing Power of Crystals</h1>
               <p>
                  Explore our collection of premium quality crystals and gemstones, carefully selected to enhance your spiritual journey.
               </p>
               <Link to='/shop' className='shop-now-btn'>
                  Shop Now <FontAwesomeIcon icon={faArrowRight} />
               </Link>
            </div>
         </section>

         {/* Featured Products Section */}
         <section className='featured-section'>
            <div className='section-header'>
               <h2>Featured Crystals</h2>
               <p>Discover our most popular healing crystals</p>
            </div>

            <div className='featured-products'>
               {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
               ))}
            </div>

            <div className='view-all-container'>
               <Link to='/shop' className='view-all-btn'>
                  View All Crystals <FontAwesomeIcon icon={faArrowRight} />
               </Link>
            </div>
         </section>

         {/* Benefits Section */}
         <section className='benefits-section'>
            <div className='section-header'>
               <h2>The Benefits of Crystals</h2>
               <p>Harness the natural energy of crystals for your well-being</p>
            </div>

            <div className='benefits-grid'>
               <div className='benefit-card'>
                  <h3>Healing Properties</h3>
                  <p>
                     Crystals have been used for centuries for their healing properties, helping to balance energy and promote physical and
                     emotional well-being.
                  </p>
               </div>

               <div className='benefit-card'>
                  <h3>Spiritual Growth</h3>
                  <p>Many crystals enhance meditation practices and spiritual awareness, helping you connect with higher consciousness.</p>
               </div>

               <div className='benefit-card'>
                  <h3>Energy Cleansing</h3>
                  <p>Certain crystals can cleanse and purify the energy in your space, creating a more harmonious environment.</p>
               </div>

               <div className='benefit-card'>
                  <h3>Emotional Balance</h3>
                  <p>Crystals can help regulate emotions, reduce stress, and promote feelings of calm and peace in your daily life.</p>
               </div>
            </div>
         </section>

         {/* FAQ Section */}
         <section className='faq-section'>
            <div className='container'>
               <div className='section-header'>
                  <h2>Frequently Asked Questions</h2>
                  <p>Find answers to common questions about crystals and our products</p>
               </div>

               <div className='faq-container'>
                  <div className='faq-column'>
                     <div className='faq-item'>
                        <h3>How do crystals work?</h3>
                        <p>
                           Crystals have unique energy frequencies that interact with your body's energy field. They can help balance,
                           cleanse, and enhance your natural energies through a process called resonance and entrainment.
                        </p>
                     </div>

                     <div className='faq-item'>
                        <h3>How should I choose my first crystal?</h3>
                        <p>
                           Trust your intuition! The crystal you're most drawn to is often the one you need. Alternatively, you can select
                           based on properties that align with your current needs, such as amethyst for calm or citrine for abundance.
                        </p>
                     </div>

                     <div className='faq-item'>
                        <h3>Are your crystals ethically sourced?</h3>
                        <p>
                           Yes, we work with suppliers who follow ethical mining practices and fair labor standards. We're committed to
                           sustainability and responsible sourcing for all our products.
                        </p>
                     </div>
                  </div>

                  <div className='faq-column'>
                     <div className='faq-item'>
                        <h3>How do I cleanse my crystals?</h3>
                        <p>
                           Common methods include running them under water (except water-soluble crystals), placing them in moonlight or
                           sunlight, using sound vibrations, or smudging with sage. Each crystal may have specific cleansing requirements.
                        </p>
                     </div>

                     <div className='faq-item'>
                        <h3>How long does shipping take?</h3>
                        <p>
                           Domestic orders typically arrive within 3-5 business days. International shipping varies by location, usually
                           taking 7-14 business days. All orders include tracking information.
                        </p>
                     </div>

                     <div className='faq-item'>
                        <h3>Do you offer crystal identification services?</h3>
                        <p>
                           Yes! If you have a crystal you can't identify, email us a clear photo, and our gemologists will help identify it
                           for you at no charge.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Newsletter Section */}
         <section className='newsletter-section'>
            <div className='newsletter-content'>
               <h2>Join Our Crystal Community</h2>
               <p>Subscribe to receive updates on new crystals, exclusive offers, and tips on crystal healing.</p>

               <form className='newsletter-form'>
                  <input type='email' placeholder='Enter your email for updates and offers' required />
                  <button type='submit'>Subscribe</button>
               </form>
            </div>
         </section>
      </div>
   );
};

export default HomePage;
