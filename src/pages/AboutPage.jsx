import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faHandHoldingHeart, faLeaf, faShippingFast } from "@fortawesome/free-solid-svg-icons";
import "./AboutPage.css";

const AboutPage = () => {
   return (
      <div className='about-page'>
         {/* Hero Section */}
         <section className='about-hero'>
            <div className='about-hero-content'>
               <h1>Our Story</h1>
               <p>Discover the passion and purpose behind Crystal Haven</p>
            </div>

            <div className='crystal-animation'>
               <div className='crystal'>
                  <div className='crystal-face'></div>
                  <div className='crystal-face'></div>
                  <div className='crystal-face'></div>
                  <div className='crystal-face'></div>
                  <div className='crystal-face'></div>
                  <div className='crystal-face'></div>
               </div>
            </div>
         </section>

         {/* Our Mission */}
         <section className='about-section mission-section'>
            <div className='container'>
               <div className='about-grid'>
                  <div className='about-image'>
                     <img
                        src='https://images.unsplash.com/photo-1567225591450-06036b3392a6?q=80&w=800&auto=format&fit=crop'
                        alt='Crystal collection'
                     />
                  </div>
                  <div className='about-content'>
                     <h2>Our Mission</h2>
                     <p>
                        At Crystal Haven, our mission is to connect people with the healing energy of natural crystals and gemstones. We
                        believe in the power of these earth-born treasures to enhance wellbeing, promote spiritual growth, and bring balance
                        to our busy modern lives.
                     </p>
                     <p>
                        Founded in 2018 by a team of crystal enthusiasts and holistic practitioners, Crystal Haven has grown from a small
                        online store to a trusted source for premium quality crystals and gemstones from around the world.
                     </p>
                     <p>
                        We are committed to ethical sourcing, sustainability, and sharing our knowledge to help you find the perfect crystal
                        companions for your journey.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Our Values */}
         <section className='about-section values-section'>
            <div className='container'>
               <div className='section-header'>
                  <h2>Our Values</h2>
                  <p>The principles that guide everything we do</p>
               </div>

               <div className='values-grid'>
                  <div className='value-card'>
                     <div className='value-icon'>
                        <FontAwesomeIcon icon={faGem} />
                     </div>
                     <h3>Quality</h3>
                     <p>
                        We personally select each crystal for its energy, beauty, and authenticity, ensuring you receive only the finest
                        specimens.
                     </p>
                  </div>

                  <div className='value-card'>
                     <div className='value-icon'>
                        <FontAwesomeIcon icon={faHandHoldingHeart} />
                     </div>
                     <h3>Integrity</h3>
                     <p>We operate with honesty and transparency in all aspects of our business, from sourcing to customer service.</p>
                  </div>

                  <div className='value-card'>
                     <div className='value-icon'>
                        <FontAwesomeIcon icon={faLeaf} />
                     </div>
                     <h3>Sustainability</h3>
                     <p>We work with responsible suppliers who follow ethical mining practices and minimize environmental impact.</p>
                  </div>

                  <div className='value-card'>
                     <div className='value-icon'>
                        <FontAwesomeIcon icon={faShippingFast} />
                     </div>
                     <h3>Service</h3>
                     <p>We're dedicated to providing exceptional customer experiences through knowledgeable support and prompt service.</p>
                  </div>
               </div>
            </div>
         </section>

         {/* Our Team */}
         <section className='about-section team-section'>
            <div className='container'>
               <div className='section-header'>
                  <h2>Meet Our Team</h2>
                  <p>The passionate people behind Crystal Haven</p>
               </div>

               <div className='team-grid'>
                  <div className='team-member'>
                     <div className='team-photo'>
                        <img
                           src='https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop'
                           alt='Sarah Johnson'
                        />
                     </div>
                     <h3>Sarah Johnson</h3>
                     <p className='team-role'>Founder & Crystal Expert</p>
                     <p className='team-bio'>
                        With over 15 years of experience in crystal healing, Sarah founded Crystal Haven to share her passion for the
                        transformative power of crystals.
                     </p>
                  </div>

                  <div className='team-member'>
                     <div className='team-photo'>
                        <img
                           src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop'
                           alt='David Chen'
                        />
                     </div>
                     <h3>David Chen</h3>
                     <p className='team-role'>Gemologist & Sourcing Director</p>
                     <p className='team-bio'>
                        David's expertise in gemology ensures that every crystal in our collection meets the highest standards of quality
                        and authenticity.
                     </p>
                  </div>

                  <div className='team-member'>
                     <div className='team-photo'>
                        <img
                           src='https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop'
                           alt='Emma Rodriguez'
                        />
                     </div>
                     <h3>Emma Rodriguez</h3>
                     <p className='team-role'>Holistic Practitioner</p>
                     <p className='team-bio'>
                        Emma brings her knowledge of energy work and holistic healing to help customers find the perfect crystals for their
                        specific needs.
                     </p>
                  </div>

                  <div className='team-member'>
                     <div className='team-photo'>
                        <img
                           src='https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=500&auto=format&fit=crop'
                           alt='Michael Thompson'
                        />
                     </div>
                     <h3>Michael Thompson</h3>
                     <p className='team-role'>Customer Experience Manager</p>
                     <p className='team-bio'>
                        Michael ensures that every interaction with Crystal Haven is positive, helpful, and exceeds your expectations.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Testimonials */}
         <section className='about-section testimonials-section'>
            <div className='container'>
               <div className='section-header'>
                  <h2>What Our Customers Say</h2>
                  <p>Hear from the Crystal Haven community</p>
               </div>

               <div className='testimonials-grid'>
                  <div className='testimonial'>
                     <div className='testimonial-content'>
                        <p>
                           "The crystals I received from Crystal Haven are absolutely beautiful and came with such thoughtful packaging. I
                           could feel their energy as soon as I opened the box!"
                        </p>
                     </div>
                     <div className='testimonial-author'>
                        <p>
                           <strong>Jessica M.</strong> - Portland, OR
                        </p>
                     </div>
                  </div>

                  <div className='testimonial'>
                     <div className='testimonial-content'>
                        <p>
                           "I'm new to crystals and had so many questions. The team at Crystal Haven was incredibly helpful and patient in
                           guiding me to the perfect starter collection."
                        </p>
                     </div>
                     <div className='testimonial-author'>
                        <p>
                           <strong>Robert K.</strong> - Chicago, IL
                        </p>
                     </div>
                  </div>

                  <div className='testimonial'>
                     <div className='testimonial-content'>
                        <p>
                           "The quality of crystals from Crystal Haven is unmatched. I've ordered from many online shops, but none compare
                           to the specimens I've received here."
                        </p>
                     </div>
                     <div className='testimonial-author'>
                        <p>
                           <strong>Amara T.</strong> - Austin, TX
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* CTA Section */}
         <section className='about-cta'>
            <div className='container'>
               <h2>Ready to Experience the Power of Crystals?</h2>
               <p>Explore our collection and find the perfect crystal companions for your journey.</p>
               <a href='/shop' className='cta-button'>
                  Shop Our Collection
               </a>
            </div>
         </section>
      </div>
   );
};

export default AboutPage;
