import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope, faClock, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./ContactPage.css";

const ContactPage = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
   });

   const [formSubmitted, setFormSubmitted] = useState(false);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      // In a real application, you would send the form data to a server here
      console.log("Form submitted:", formData);
      setFormSubmitted(true);

      // Reset form after submission
      setFormData({
         name: "",
         email: "",
         subject: "",
         message: "",
      });

      // Reset submission status after 5 seconds
      setTimeout(() => {
         setFormSubmitted(false);
      }, 5000);
   };

   return (
      <div className='contact-page'>
         {/* Hero Section */}
         <section className='contact-hero'>
            <div className='contact-hero-content'>
               <h1>Get in Touch</h1>
               <p>We'd love to hear from you. Reach out with any questions or inquiries.</p>
            </div>
         </section>

         {/* Contact Information */}
         <section className='contact-section'>
            <div className='container'>
               <div className='contact-grid'>
                  <div className='contact-info'>
                     <h2>Contact Information</h2>
                     <p>Have questions about our products or need guidance on selecting the right crystals? Our team is here to help.</p>

                     <div className='info-items'>
                        <div className='info-item'>
                           <div className='info-icon'>
                              <FontAwesomeIcon icon={faMapMarkerAlt} />
                           </div>
                           <div className='info-content'>
                              <h3>Our Location</h3>
                              <p>123 Crystal Way, Sedona, AZ 86336</p>
                           </div>
                        </div>

                        <div className='info-item'>
                           <div className='info-icon'>
                              <FontAwesomeIcon icon={faPhone} />
                           </div>
                           <div className='info-content'>
                              <h3>Phone Number</h3>
                              <p>(555) 123-4567</p>
                           </div>
                        </div>

                        <div className='info-item'>
                           <div className='info-icon'>
                              <FontAwesomeIcon icon={faEnvelope} />
                           </div>
                           <div className='info-content'>
                              <h3>Email Address</h3>
                              <p>info@crystalhaven.com</p>
                           </div>
                        </div>

                        <div className='info-item'>
                           <div className='info-icon'>
                              <FontAwesomeIcon icon={faClock} />
                           </div>
                           <div className='info-content'>
                              <h3>Business Hours</h3>
                              <p>Monday - Friday: 9am - 6pm</p>
                              <p>Saturday: 10am - 4pm</p>
                              <p>Sunday: Closed</p>
                           </div>
                        </div>
                     </div>

                     <div className='contact-map'>
                        <iframe
                           src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26259.99679860495!2d-111.78796430224607!3d34.86400229999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872da132f942b00d%3A0x5548c523fa6c8efd!2sSedona%2C%20AZ%2086336!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus'
                           width='100%'
                           height='300'
                           style={{ border: 0 }}
                           allowFullScreen=''
                           loading='lazy'
                           referrerPolicy='no-referrer-when-downgrade'
                           title='Crystal Haven Location'></iframe>
                     </div>
                  </div>

                  <div className='contact-form-container'>
                     <h2>Send Us a Message</h2>
                     <p>Fill out the form below and we'll get back to you as soon as possible.</p>

                     {formSubmitted ? (
                        <div className='form-success'>
                           <FontAwesomeIcon icon={faCheckCircle} className='success-icon' />
                           <h3>Thank You!</h3>
                           <p>Your message has been sent successfully. We'll respond to you shortly.</p>
                        </div>
                     ) : (
                        <form className='contact-form' onSubmit={handleSubmit}>
                           <div className='form-group'>
                              <label htmlFor='name'>Your Name</label>
                              <input
                                 type='text'
                                 id='name'
                                 name='name'
                                 value={formData.name}
                                 onChange={handleChange}
                                 placeholder='Enter your full name'
                                 required
                              />
                           </div>

                           <div className='form-group'>
                              <label htmlFor='email'>Email Address</label>
                              <input
                                 type='email'
                                 id='email'
                                 name='email'
                                 value={formData.email}
                                 onChange={handleChange}
                                 placeholder='your.email@example.com'
                                 required
                              />
                           </div>

                           <div className='form-group'>
                              <label htmlFor='subject'>Subject</label>
                              <input
                                 type='text'
                                 id='subject'
                                 name='subject'
                                 value={formData.subject}
                                 onChange={handleChange}
                                 placeholder='What is your inquiry about?'
                                 required
                              />
                           </div>

                           <div className='form-group'>
                              <label htmlFor='message'>Your Message</label>
                              <textarea
                                 id='message'
                                 name='message'
                                 rows='5'
                                 value={formData.message}
                                 onChange={handleChange}
                                 placeholder='Please provide details about your inquiry...'
                                 required></textarea>
                           </div>

                           <button type='submit' className='submit-btn'>
                              Send Message
                           </button>
                        </form>
                     )}
                  </div>
               </div>
            </div>
         </section>

         {/* FAQ Section */}
         <section className='contact-faq'>
            <div className='container'>
               <div className='section-header'>
                  <h2>Frequently Asked Questions</h2>
                  <p>Find quick answers to common questions</p>
               </div>

               <div className='faq-grid'>
                  <div className='faq-item'>
                     <h3>How do I care for my crystals?</h3>
                     <p>
                        Most crystals can be cleansed with water (except water-soluble ones like selenite), moonlight, sunlight, or
                        smudging. We recommend researching specific care instructions for each crystal type.
                     </p>
                  </div>

                  <div className='faq-item'>
                     <h3>Do you ship internationally?</h3>
                     <p>
                        Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. Please
                        check our shipping policy for details.
                     </p>
                  </div>

                  <div className='faq-item'>
                     <h3>Are your crystals ethically sourced?</h3>
                     <p>
                        Absolutely. We work with suppliers who follow ethical mining practices and fair labor standards. We're committed to
                        sustainability and responsible sourcing.
                     </p>
                  </div>

                  <div className='faq-item'>
                     <h3>What if my crystal arrives damaged?</h3>
                     <p>
                        We carefully package all orders, but if your crystal arrives damaged, please contact us within 48 hours with photos,
                        and we'll arrange a replacement or refund.
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default ContactPage;
