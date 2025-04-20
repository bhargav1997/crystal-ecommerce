import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMoneyBillWave, faShieldAlt, faQuestionCircle, faLock } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa, faCcMastercard, faCcAmex, faCcDiscover, faCcPaypal, faApplePay, faGooglePay } from '@fortawesome/free-brands-svg-icons';
import './PaymentMethodsPage.css';

const PaymentMethodsPage = () => {
  return (
    <div className="payment-methods-page">
      <div className="page-hero">
        <div className="container">
          <h1>Payment Methods</h1>
          <p>Secure and convenient ways to pay for your crystal treasures</p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          {/* Accepted Payment Methods */}
          <section className="payment-section accepted-methods">
            <div className="section-header">
              <h2>Accepted Payment Methods</h2>
              <p>We offer a variety of secure payment options for your convenience</p>
            </div>
            
            <div className="payment-methods-grid">
              <div className="payment-method-card">
                <div className="payment-icon">
                  <FontAwesomeIcon icon={faCcVisa} />
                </div>
                <h3>Visa</h3>
                <p>We accept all Visa credit and debit cards for both domestic and international orders.</p>
              </div>
              
              <div className="payment-method-card">
                <div className="payment-icon">
                  <FontAwesomeIcon icon={faCcMastercard} />
                </div>
                <h3>Mastercard</h3>
                <p>All Mastercard credit and debit cards are accepted for purchases on our website.</p>
              </div>
              
              <div className="payment-method-card">
                <div className="payment-icon">
                  <FontAwesomeIcon icon={faCcAmex} />
                </div>
                <h3>American Express</h3>
                <p>We accept American Express cards for all purchases with no additional fees.</p>
              </div>
              
              <div className="payment-method-card">
                <div className="payment-icon">
                  <FontAwesomeIcon icon={faCcDiscover} />
                </div>
                <h3>Discover</h3>
                <p>Discover cards are accepted for all domestic orders on our website.</p>
              </div>
              
              <div className="payment-method-card">
                <div className="payment-icon">
                  <FontAwesomeIcon icon={faCcPaypal} />
                </div>
                <h3>PayPal</h3>
                <p>Securely pay with your PayPal account without sharing your financial information.</p>
              </div>
              
              <div className="payment-method-card">
                <div className="payment-icon">
                  <FontAwesomeIcon icon={faApplePay} />
                </div>
                <h3>Apple Pay</h3>
                <p>Quick and secure checkout with Apple Pay on compatible devices.</p>
              </div>
              
              <div className="payment-method-card">
                <div className="payment-icon">
                  <FontAwesomeIcon icon={faGooglePay} />
                </div>
                <h3>Google Pay</h3>
                <p>Fast and convenient checkout with Google Pay on supported devices.</p>
              </div>
              
              <div className="payment-method-card">
                <div className="payment-icon">
                  <FontAwesomeIcon icon={faMoneyBillWave} />
                </div>
                <h3>Shop Pay</h3>
                <p>Accelerated checkout with Shop Pay for returning customers.</p>
              </div>
            </div>
          </section>
          
          {/* Payment Security */}
          <section className="payment-section security-section">
            <div className="section-header">
              <h2>Payment Security</h2>
              <p>Your security is our priority</p>
            </div>
            
            <div className="security-content">
              <div className="security-icon">
                <FontAwesomeIcon icon={faLock} />
              </div>
              
              <div className="security-info">
                <h3>Secure Transactions</h3>
                <p>All payment transactions on our website are encrypted using SSL (Secure Socket Layer) technology. This ensures that your personal and financial information is securely transmitted and cannot be intercepted by unauthorized parties.</p>
                
                <h3>PCI Compliance</h3>
                <p>We adhere to the Payment Card Industry Data Security Standard (PCI DSS), a set of security standards designed to ensure that all companies that accept, process, store, or transmit credit card information maintain a secure environment.</p>
                
                <h3>No Stored Card Data</h3>
                <p>For your security, we do not store your full credit card information on our servers. When you choose to save your payment method for future purchases, the information is securely stored with our payment processor, not on our website.</p>
                
                <div className="security-badges">
                  <div className="badge">
                    <FontAwesomeIcon icon={faShieldAlt} />
                    <span>SSL Secured</span>
                  </div>
                  <div className="badge">
                    <FontAwesomeIcon icon={faLock} />
                    <span>PCI Compliant</span>
                  </div>
                  <div className="badge">
                    <FontAwesomeIcon icon={faShieldAlt} />
                    <span>Fraud Protection</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Payment Process */}
          <section className="payment-section process-section">
            <div className="section-header">
              <h2>Payment Process</h2>
              <p>How payments are processed on our website</p>
            </div>
            
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Add Items to Cart</h3>
                  <p>Browse our collection and add your desired crystals to your shopping cart.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Proceed to Checkout</h3>
                  <p>Review your cart and click "Proceed to Checkout" to begin the payment process.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Enter Shipping Information</h3>
                  <p>Provide your shipping address and select your preferred shipping method.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Choose Payment Method</h3>
                  <p>Select your preferred payment method from the available options.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Complete Purchase</h3>
                  <p>Review your order details and complete your purchase by submitting your payment information.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">6</div>
                <div className="step-content">
                  <h3>Order Confirmation</h3>
                  <p>Receive an order confirmation email with your order details and tracking information once your order ships.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section className="payment-section faq-section">
            <div className="section-header">
              <h2>Payment FAQs</h2>
              <p>Common questions about payments</p>
            </div>
            
            <div className="payment-faqs">
              <div className="faq-item">
                <div className="faq-icon">
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
                <div className="faq-content">
                  <h3>When will my card be charged?</h3>
                  <p>Your card will be charged immediately upon completing your purchase. If an item is out of stock or there's an issue with your order, we'll notify you and issue a refund if necessary.</p>
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-icon">
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
                <div className="faq-content">
                  <h3>Is it safe to save my payment information?</h3>
                  <p>Yes, it's safe to save your payment information for future purchases. We use a secure payment processor that encrypts and stores your information according to the highest security standards. We never store your full card details on our servers.</p>
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-icon">
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
                <div className="faq-content">
                  <h3>Do you accept international payments?</h3>
                  <p>Yes, we accept international payments through all major credit cards and PayPal. Please note that your bank may charge foreign transaction fees depending on your card issuer and the currency of your account.</p>
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-icon">
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </div>
                <div className="faq-content">
                  <h3>What currency will I be charged in?</h3>
                  <p>All transactions are processed in US Dollars (USD). If you're using a card issued in another currency, your bank will convert the amount using their exchange rate at the time of the transaction.</p>
                </div>
              </div>
            </div>
            
            <div className="more-questions">
              <p>Have more questions about payments or experiencing issues with your transaction?</p>
              <div className="contact-buttons">
                <a href="/contact" className="contact-btn">Contact Us</a>
                <a href="/faq" className="faq-btn">View All FAQs</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodsPage;
