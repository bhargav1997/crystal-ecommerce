import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faHeadset,
   faEnvelope,
   faComments,
   faQuestionCircle,
   faShippingFast,
   faExchangeAlt,
   faCreditCard,
   faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./CustomerServicePage.css";

const CustomerServicePage = () => {
   return (
      <div className='customer-service-page'>
         <div className='page-hero'>
            <div className='container'>
               <h1>Customer Service</h1>
               <p>We're here to help with any questions or concerns</p>
            </div>
         </div>

         <div className='page-content'>
            <div className='container'>
               {/* Contact Options */}
               <section className='cs-section contact-options-section'>
                  <div className='section-header'>
                     <h2>Contact Options</h2>
                     <p>Multiple ways to reach our customer service team</p>
                  </div>

                  <div className='contact-options-grid'>
                     <div className='contact-option-card'>
                        <div className='option-icon'>
                           <FontAwesomeIcon icon={faHeadset} />
                        </div>
                        <h3>Phone Support</h3>
                        <p>Speak directly with our customer service representatives for immediate assistance.</p>
                        <div className='option-details'>
                           <p>
                              <strong>Phone:</strong> (555) 123-4567
                           </p>
                           <p>
                              <strong>Hours:</strong> Monday-Friday, 9am-6pm EST
                           </p>
                        </div>
                        <a href='tel:+15551234567' className='option-button'>
                           Call Now
                        </a>
                     </div>

                     <div className='contact-option-card'>
                        <div className='option-icon'>
                           <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <h3>Email Support</h3>
                        <p>Send us an email with your questions or concerns for a detailed response.</p>
                        <div className='option-details'>
                           <p>
                              <strong>Email:</strong> support@crystalhaven.com
                           </p>
                           <p>
                              <strong>Response Time:</strong> Within 24 hours
                           </p>
                        </div>
                        <a href='mailto:support@crystalhaven.com' className='option-button'>
                           Email Us
                        </a>
                     </div>

                     <div className='contact-option-card'>
                        <div className='option-icon'>
                           <FontAwesomeIcon icon={faComments} />
                        </div>
                        <h3>Live Chat</h3>
                        <p>Chat with our customer service team in real-time for quick assistance.</p>
                        <div className='option-details'>
                           <p>
                              <strong>Availability:</strong> Monday-Friday, 9am-6pm EST
                           </p>
                           <p>
                              <strong>Response Time:</strong> Immediate
                           </p>
                        </div>
                        <button className='option-button'>Start Chat</button>
                     </div>

                     <div className='contact-option-card'>
                        <div className='option-icon'>
                           <FontAwesomeIcon icon={faQuestionCircle} />
                        </div>
                        <h3>Help Center</h3>
                        <p>Browse our comprehensive knowledge base for answers to common questions.</p>
                        <div className='option-details'>
                           <p>
                              <strong>Topics:</strong> Orders, Products, Shipping, Returns
                           </p>
                           <p>
                              <strong>Availability:</strong> 24/7
                           </p>
                        </div>
                        <a href='/faq' className='option-button'>
                           Visit Help Center
                        </a>
                     </div>
                  </div>
               </section>

               {/* Quick Links */}
               <section className='cs-section quick-links-section'>
                  <div className='section-header'>
                     <h2>Quick Links</h2>
                     <p>Fast access to our most requested services</p>
                  </div>

                  <div className='quick-links-grid'>
                     <a href='/track-order' className='quick-link-card'>
                        <div className='quick-link-icon'>
                           <FontAwesomeIcon icon={faShippingFast} />
                        </div>
                        <h3>Track Your Order</h3>
                        <p>Check the status and location of your recent orders</p>
                     </a>

                     <a href='/shipping-returns' className='quick-link-card'>
                        <div className='quick-link-icon'>
                           <FontAwesomeIcon icon={faExchangeAlt} />
                        </div>
                        <h3>Returns & Exchanges</h3>
                        <p>Learn how to return or exchange your purchase</p>
                     </a>

                     <a href='/payment-methods' className='quick-link-card'>
                        <div className='quick-link-icon'>
                           <FontAwesomeIcon icon={faCreditCard} />
                        </div>
                        <h3>Payment Information</h3>
                        <p>View accepted payment methods and billing details</p>
                     </a>

                     <a href='/faq' className='quick-link-card'>
                        <div className='quick-link-icon'>
                           <FontAwesomeIcon icon={faInfoCircle} />
                        </div>
                        <h3>FAQs</h3>
                        <p>Find answers to frequently asked questions</p>
                     </a>
                  </div>
               </section>

               {/* Contact Form */}
               <section className='cs-section contact-form-section'>
                  <div className='section-header'>
                     <h2>Send Us a Message</h2>
                     <p>We'll get back to you as soon as possible</p>
                  </div>

                  <div className='contact-form-container'>
                     <form className='contact-form'>
                        <div className='form-row'>
                           <div className='form-group'>
                              <label htmlFor='name'>Your Name</label>
                              <input type='text' id='name' name='name' placeholder='Enter your full name' required />
                           </div>

                           <div className='form-group'>
                              <label htmlFor='email'>Email Address</label>
                              <input type='email' id='email' name='email' placeholder='your.email@example.com' required />
                           </div>
                        </div>

                        <div className='form-row'>
                           <div className='form-group'>
                              <label htmlFor='order'>Order Number (if applicable)</label>
                              <input type='text' id='order' name='order' placeholder='e.g. CR12345 (optional)' />
                           </div>

                           <div className='form-group'>
                              <label htmlFor='subject'>Subject</label>
                              <select id='subject' name='subject' required>
                                 <option value=''>Select a subject</option>
                                 <option value='order'>Order Status</option>
                                 <option value='return'>Return/Exchange</option>
                                 <option value='product'>Product Information</option>
                                 <option value='payment'>Payment Issue</option>
                                 <option value='other'>Other</option>
                              </select>
                           </div>
                        </div>

                        <div className='form-group'>
                           <label htmlFor='message'>Your Message</label>
                           <textarea
                              id='message'
                              name='message'
                              rows='5'
                              placeholder='Please provide details about your inquiry...'
                              required></textarea>
                        </div>

                        <button type='submit' className='submit-button'>
                           Send Message
                        </button>
                     </form>
                  </div>
               </section>

               {/* Customer Service Policies */}
               <section className='cs-section policies-section'>
                  <div className='section-header'>
                     <h2>Our Customer Service Policies</h2>
                     <p>What you can expect from us</p>
                  </div>

                  <div className='policies-grid'>
                     <div className='policy-card'>
                        <h3>Response Time</h3>
                        <p>
                           We strive to respond to all customer inquiries within 24 hours during business days. For urgent matters, we
                           recommend using our phone support or live chat options for immediate assistance.
                        </p>
                     </div>

                     <div className='policy-card'>
                        <h3>Order Issues</h3>
                        <p>
                           If you experience any issues with your order, please contact us within 48 hours of receiving your package. We'll
                           work quickly to resolve any problems with missing items, damaged products, or incorrect shipments.
                        </p>
                     </div>

                     <div className='policy-card'>
                        <h3>Satisfaction Guarantee</h3>
                        <p>
                           Your satisfaction is our priority. If you're not completely satisfied with your purchase, please contact our
                           customer service team, and we'll do everything we can to make it right.
                        </p>
                     </div>

                     <div className='policy-card'>
                        <h3>Privacy Protection</h3>
                        <p>
                           We respect your privacy and protect your personal information. All communications with our customer service team
                           are confidential and handled according to our Privacy Policy.
                        </p>
                     </div>
                  </div>
               </section>

               {/* Business Hours */}
               <section className='cs-section hours-section'>
                  <div className='hours-container'>
                     <div className='hours-content'>
                        <h2>Business Hours</h2>
                        <div className='hours-grid'>
                           <div className='day'>
                              <span>Monday - Friday:</span>
                              <span>9:00 AM - 6:00 PM EST</span>
                           </div>
                           <div className='day'>
                              <span>Saturday:</span>
                              <span>10:00 AM - 4:00 PM EST</span>
                           </div>
                           <div className='day'>
                              <span>Sunday:</span>
                              <span>Closed</span>
                           </div>
                        </div>
                        <p className='hours-note'>
                           Holiday hours may vary. Please check our website or social media for updates on holiday schedules.
                        </p>
                     </div>
                  </div>
               </section>
            </div>
         </div>
      </div>
   );
};

export default CustomerServicePage;
