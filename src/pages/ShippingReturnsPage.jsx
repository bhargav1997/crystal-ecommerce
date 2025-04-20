import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faExchangeAlt, faBoxOpen, faGlobe, faTruck, faUndo } from '@fortawesome/free-solid-svg-icons';
import './ShippingReturnsPage.css';

const ShippingReturnsPage = () => {
  return (
    <div className="shipping-returns-page">
      <div className="page-hero">
        <div className="container">
          <h1>Shipping & Returns</h1>
          <p>Information about our shipping policies and return procedures</p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          {/* Shipping Policy Section */}
          <section className="policy-section shipping-section">
            <div className="section-header">
              <h2>Shipping Policy</h2>
              <p>We strive to deliver your crystals safely and promptly</p>
            </div>
            
            <div className="policy-grid">
              <div className="policy-card">
                <div className="policy-icon">
                  <FontAwesomeIcon icon={faShippingFast} />
                </div>
                <h3>Processing Time</h3>
                <p>All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.</p>
              </div>
              
              <div className="policy-card">
                <div className="policy-icon">
                  <FontAwesomeIcon icon={faTruck} />
                </div>
                <h3>Domestic Shipping</h3>
                <p>We offer free standard shipping on all domestic orders over $75. Standard shipping typically takes 3-5 business days to arrive. Expedited shipping options are available at checkout for an additional fee.</p>
              </div>
              
              <div className="policy-card">
                <div className="policy-icon">
                  <FontAwesomeIcon icon={faGlobe} />
                </div>
                <h3>International Shipping</h3>
                <p>We ship to most countries worldwide. International shipping rates are calculated at checkout based on weight, dimensions, and destination. Delivery typically takes 7-14 business days, depending on customs processing.</p>
              </div>
              
              <div className="policy-card">
                <div className="policy-icon">
                  <FontAwesomeIcon icon={faBoxOpen} />
                </div>
                <h3>Packaging</h3>
                <p>We take special care in packaging your crystals to ensure they arrive safely. Each crystal is individually wrapped in protective materials and placed in sturdy boxes with appropriate cushioning.</p>
              </div>
            </div>
            
            <div className="shipping-rates">
              <h3>Domestic Shipping Rates</h3>
              <div className="rates-table">
                <div className="table-header">
                  <div className="table-cell">Shipping Method</div>
                  <div className="table-cell">Estimated Delivery</div>
                  <div className="table-cell">Cost</div>
                </div>
                
                <div className="table-row">
                  <div className="table-cell">Standard Shipping</div>
                  <div className="table-cell">3-5 business days</div>
                  <div className="table-cell">$5.99 (Free over $75)</div>
                </div>
                
                <div className="table-row">
                  <div className="table-cell">Expedited Shipping</div>
                  <div className="table-cell">2-3 business days</div>
                  <div className="table-cell">$12.99</div>
                </div>
                
                <div className="table-row">
                  <div className="table-cell">Express Shipping</div>
                  <div className="table-cell">1-2 business days</div>
                  <div className="table-cell">$19.99</div>
                </div>
              </div>
              
              <p className="shipping-note">Please note that these are estimated delivery times and may vary depending on your location and other factors.</p>
            </div>
          </section>
          
          {/* Returns Policy Section */}
          <section className="policy-section returns-section">
            <div className="section-header">
              <h2>Returns Policy</h2>
              <p>We want you to be completely satisfied with your purchase</p>
            </div>
            
            <div className="policy-grid">
              <div className="policy-card">
                <div className="policy-icon">
                  <FontAwesomeIcon icon={faExchangeAlt} />
                </div>
                <h3>Return Eligibility</h3>
                <p>We accept returns within 30 days of delivery for most items in their original condition. Custom orders, cleansing tools, and certain specialty items may not be eligible for return. Please contact us if you're unsure about a specific item.</p>
              </div>
              
              <div className="policy-card">
                <div className="policy-icon">
                  <FontAwesomeIcon icon={faUndo} />
                </div>
                <h3>Return Process</h3>
                <p>To initiate a return, please email our customer service team with your order number and reason for return. Once approved, you'll receive return shipping instructions. We recommend using a trackable shipping method for returns.</p>
              </div>
              
              <div className="policy-card">
                <div className="policy-icon">
                  <FontAwesomeIcon icon={faBoxOpen} />
                </div>
                <h3>Refunds</h3>
                <p>Once we receive your returned item, we'll inspect it and process your refund within 3-5 business days. The refund will be issued to your original payment method. Depending on your bank, it may take an additional 5-10 business days to appear in your account.</p>
              </div>
              
              <div className="policy-card">
                <div className="policy-icon">
                  <FontAwesomeIcon icon={faExchangeAlt} />
                </div>
                <h3>Exchanges</h3>
                <p>If you'd prefer to exchange an item rather than return it, please contact our customer service team. We'll guide you through the process and help you select a replacement. Exchanges are subject to product availability.</p>
              </div>
            </div>
            
            <div className="returns-info">
              <h3>Non-Returnable Items</h3>
              <ul>
                <li>Custom or personalized orders</li>
                <li>Digital products</li>
                <li>Gift cards</li>
                <li>Cleansing tools (sage, palo santo, etc.) once opened</li>
                <li>Sale items marked as final sale</li>
                <li>Items damaged due to improper handling after delivery</li>
              </ul>
              
              <h3>Damaged or Defective Items</h3>
              <p>If you receive a damaged or defective item, please contact us within 48 hours of receipt with photos of the damaged item and packaging. We'll promptly arrange a replacement or refund at no additional cost to you.</p>
              
              <h3>Return Shipping Costs</h3>
              <p>Customers are responsible for return shipping costs unless the return is due to our error (such as sending the wrong item) or if the product arrived damaged. In these cases, we will provide a prepaid return shipping label.</p>
            </div>
          </section>
          
          {/* Contact Section */}
          <section className="contact-section">
            <h2>Questions About Shipping or Returns?</h2>
            <p>Our customer service team is here to help with any questions or concerns about shipping, tracking, or returns.</p>
            <div className="contact-buttons">
              <a href="/contact" className="contact-btn">Contact Us</a>
              <a href="/faq" className="faq-btn">View FAQs</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingReturnsPage;
