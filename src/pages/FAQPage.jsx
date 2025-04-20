import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./FAQPage.css";

const FAQPage = () => {
   const [activeCategory, setActiveCategory] = useState("general");
   const [openItems, setOpenItems] = useState({});
   const [searchQuery, setSearchQuery] = useState("");

   // FAQ categories and items
   const faqData = {
      general: {
         title: "General Questions",
         items: [
            {
               question: "What are crystals and how do they work?",
               answer:
                  "Crystals are naturally occurring minerals formed over millions of years in the earth's crust. They are believed to work through energy vibrations that interact with your body's energy field. Each crystal has a unique molecular structure that causes it to resonate at a specific frequency, which can influence your own energetic vibration through a process called entrainment.",
            },
            {
               question: "How do I choose the right crystal for me?",
               answer:
                  "The best way to choose a crystal is to follow your intuition. Pay attention to which crystals you feel drawn to visually or energetically. You can also select crystals based on specific properties that align with your current needs, such as amethyst for calm or citrine for abundance. Many people report feeling a subtle warmth, tingling, or attraction to crystals that are right for them.",
            },
            {
               question: "Are your crystals ethically sourced?",
               answer:
                  "Yes, we are committed to ethical sourcing practices. We work with suppliers who follow responsible mining methods, fair labor practices, and environmental sustainability. We regularly audit our supply chain to ensure our crystals are obtained in ways that respect both the earth and the communities involved in mining.",
            },
            {
               question: "Do crystals need to be cleansed and charged?",
               answer:
                  "Yes, crystals absorb energy from their surroundings and the people who handle them. Regular cleansing helps remove accumulated energies, while charging restores their natural vibration. Common cleansing methods include running them under water (except for water-soluble crystals), placing them in sunlight or moonlight, using sound vibrations, or smudging with sage or palo santo.",
            },
         ],
      },
      orders: {
         title: "Orders & Shipping",
         items: [
            {
               question: "How long will it take to receive my order?",
               answer:
                  "Domestic orders typically ship within 1-2 business days and arrive within 3-5 business days after shipping. International shipping times vary by location, generally taking 7-14 business days. During peak seasons or holidays, shipping times may be slightly longer. All orders include tracking information so you can monitor your package's journey.",
            },
            {
               question: "Do you ship internationally?",
               answer:
                  "Yes, we ship to most countries worldwide. International shipping rates are calculated at checkout based on weight, dimensions, and destination. Please note that customers are responsible for any customs fees, import taxes, or duties that may be imposed by their country's regulations.",
            },
            {
               question: "What if my crystal arrives damaged?",
               answer:
                  "We carefully package all crystals to ensure safe delivery, but if your item arrives damaged, please contact our customer service team within 48 hours of receipt. Include photos of the damaged item and packaging, and we'll promptly arrange a replacement or refund. Your satisfaction is our priority, and we stand behind the quality of our products.",
            },
            {
               question: "Can I track my order?",
               answer:
                  "Yes, once your order ships, you'll receive an email with tracking information. You can also log into your account on our website to view your order status and tracking details. If you have any questions about your shipment, our customer service team is available to assist you.",
            },
         ],
      },
      products: {
         title: "Product Information",
         items: [
            {
               question: "Are the crystals in your photos the exact ones I'll receive?",
               answer:
                  "For most tumbled stones and smaller items, the photos are representative of the type of crystal you'll receive, as each piece is unique in size, shape, and pattern. For larger specimens, collector pieces, and special items, the exact crystal pictured is the one you'll receive, which will be noted in the product description.",
            },
            {
               question: "What is the difference between raw and polished crystals?",
               answer:
                  "Raw crystals are in their natural state as they're found in the earth, with rough edges and natural formations. They're often valued for their authentic energy and unique appearance. Polished crystals have been tumbled or shaped to create smooth surfaces that highlight the crystal's color and internal patterns. Both types retain their metaphysical properties, so the choice is primarily aesthetic.",
            },
            {
               question: "How should I care for my crystals?",
               answer:
                  "To maintain your crystals' beauty and energy, keep them away from direct sunlight for extended periods (which can fade some varieties), and store them where they won't get scratched or chipped. Clean them gently with a soft cloth, and for deeper cleaning, use mild soap and water for most types (avoiding water for selenite, kyanite, and other water-soluble varieties). Regularly cleanse their energy using your preferred method.",
            },
            {
               question: "Do you offer crystal authentication or certification?",
               answer:
                  "We carefully verify the authenticity of all our crystals and provide detailed descriptions of each product. For high-value specimens, we can provide a certificate of authenticity upon request. If you ever have questions about the identification or authenticity of a crystal you've purchased from us, please contact our team of gemology experts.",
            },
         ],
      },
      returns: {
         title: "Returns & Refunds",
         items: [
            {
               question: "What is your return policy?",
               answer:
                  "We accept returns within 30 days of delivery for most items in their original condition. Custom orders, cleansing tools, and certain specialty items may not be eligible for return. To initiate a return, please contact our customer service team with your order number and reason for return. Once approved, you'll receive return shipping instructions.",
            },
            {
               question: "How long do refunds take to process?",
               answer:
                  "Once we receive your returned item, we'll inspect it and process your refund within 3-5 business days. The refund will be issued to your original payment method. Depending on your bank or credit card company, it may take an additional 5-10 business days for the refund to appear in your account.",
            },
            {
               question: "Do I have to pay for return shipping?",
               answer:
                  "Customers are responsible for return shipping costs unless the return is due to our error (such as sending the wrong item) or if the product arrived damaged. We recommend using a trackable shipping method for returns to ensure the package can be traced if needed.",
            },
            {
               question: "Can I exchange an item instead of returning it?",
               answer:
                  "Yes, we're happy to exchange items. Please contact our customer service team with your order number and the item you'd like to exchange. We'll guide you through the process and help you select a replacement. Exchanges are subject to product availability and may require price adjustments if there's a difference in cost.",
            },
         ],
      },
      account: {
         title: "Account & Orders",
         items: [
            {
               question: "Do I need to create an account to place an order?",
               answer:
                  "No, you can check out as a guest without creating an account. However, creating an account offers several benefits, including order tracking, faster checkout for future purchases, the ability to create wishlists, and access to exclusive offers and discounts.",
            },
            {
               question: "How can I check the status of my order?",
               answer:
                  "If you have an account, you can log in and view your order history and current order status. If you checked out as a guest, you can use the order tracking feature on our website by entering your order number and email address. You'll also receive email updates about your order status.",
            },
            {
               question: "Can I modify or cancel my order after it's been placed?",
               answer:
                  "We process orders quickly to ensure fast shipping. If you need to modify or cancel your order, please contact us immediately. We can usually accommodate changes if the order hasn't entered the fulfillment process. Once an order has shipped, it cannot be modified or canceled, but you can return it according to our return policy.",
            },
            {
               question: "Is my payment information secure?",
               answer:
                  "Yes, we use industry-standard encryption and secure payment processors to protect your information. We never store your full credit card details on our servers. Our website is SSL-certified, ensuring that all data transmitted between your browser and our site is encrypted and secure.",
            },
         ],
      },
   };

   const toggleItem = (id) => {
      setOpenItems((prev) => ({
         ...prev,
         [id]: !prev[id],
      }));
   };

   const handleSearch = (e) => {
      e.preventDefault();
      // Search is handled in the filtering below
   };

   // Filter FAQ items based on search query
   const filteredFAQs = Object.keys(faqData).reduce((acc, category) => {
      if (searchQuery === "") {
         return acc;
      }

      const matchingItems = faqData[category].items.filter(
         (item) =>
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      );

      if (matchingItems.length > 0) {
         acc[category] = {
            title: faqData[category].title,
            items: matchingItems,
         };
      }

      return acc;
   }, {});

   const displayFAQs = searchQuery ? filteredFAQs : faqData;
   const hasSearchResults = Object.keys(filteredFAQs).length > 0;

   return (
      <div className='faq-page'>
         <div className='faq-hero'>
            <div className='container'>
               <h1>Frequently Asked Questions</h1>
               <p>Find answers to common questions about our crystals and services</p>

               <form className='faq-search-form' onSubmit={handleSearch}>
                  <div className='search-input'>
                     <input
                        type='text'
                        placeholder='Search for questions or answers...'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                     />
                     <button type='submit'>
                        <FontAwesomeIcon icon={faSearch} />
                     </button>
                  </div>
               </form>
            </div>
         </div>

         <div className='faq-content'>
            <div className='container'>
               {searchQuery && !hasSearchResults && (
                  <div className='no-results'>
                     <h2>No results found</h2>
                     <p>We couldn't find any FAQs matching your search. Please try different keywords or browse our categories below.</p>
                  </div>
               )}

               {!searchQuery && (
                  <div className='faq-categories'>
                     {Object.keys(faqData).map((category) => (
                        <button
                           key={category}
                           className={`category-btn ${activeCategory === category ? "active" : ""}`}
                           onClick={() => setActiveCategory(category)}>
                           {faqData[category].title}
                        </button>
                     ))}
                  </div>
               )}

               <div className='faq-items'>
                  {searchQuery ? (
                     // Display search results
                     Object.keys(displayFAQs).map((category) => (
                        <div key={category} className='faq-category'>
                           <h2>{displayFAQs[category].title}</h2>

                           <div className='faq-list'>
                              {displayFAQs[category].items.map((item, index) => {
                                 const itemId = `${category}-${index}`;
                                 return (
                                    <div key={itemId} className={`faq-item ${openItems[itemId] ? "open" : ""}`}>
                                       <div className='faq-question' onClick={() => toggleItem(itemId)}>
                                          <h3>{item.question}</h3>
                                          <div className='toggle-icon'>
                                             <FontAwesomeIcon icon={faChevronDown} />
                                          </div>
                                       </div>

                                       <div className='faq-answer'>
                                          <p>{item.answer}</p>
                                       </div>
                                    </div>
                                 );
                              })}
                           </div>
                        </div>
                     ))
                  ) : (
                     // Display active category
                     <div className='faq-category'>
                        <h2>{faqData[activeCategory].title}</h2>

                        <div className='faq-list'>
                           {faqData[activeCategory].items.map((item, index) => {
                              const itemId = `${activeCategory}-${index}`;
                              return (
                                 <div key={itemId} className={`faq-item ${openItems[itemId] ? "open" : ""}`}>
                                    <div className='faq-question' onClick={() => toggleItem(itemId)}>
                                       <h3>{item.question}</h3>
                                       <div className='toggle-icon'>
                                          <FontAwesomeIcon icon={faChevronDown} />
                                       </div>
                                    </div>

                                    <div className='faq-answer'>
                                       <p>{item.answer}</p>
                                    </div>
                                 </div>
                              );
                           })}
                        </div>
                     </div>
                  )}
               </div>

               <div className='faq-contact'>
                  <h2>Still have questions?</h2>
                  <p>If you couldn't find the answer you were looking for, please contact our customer support team.</p>
                  <a href='/contact' className='contact-btn'>
                     Contact Us
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FAQPage;
