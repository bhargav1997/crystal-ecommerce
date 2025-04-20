import './LegalPage.css';

const PrivacyPolicyPage = () => {
  // Get current date for last updated
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
  
  return (
    <div className="legal-page privacy-policy-page">
      <div className="page-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>How we collect, use, and protect your information</p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          <div className="legal-content">
            <div className="last-updated">
              Last Updated: {formattedDate}
            </div>
            
            <section className="legal-section">
              <h2>Introduction</h2>
              <p>Crystal Haven ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website crystalhaven.com (the "Site") or make a purchase from us.</p>
              <p>Please read this Privacy Policy carefully. By accessing or using our Site, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our Site.</p>
            </section>
            
            <section className="legal-section">
              <h2>Information We Collect</h2>
              <p>We collect several types of information from and about users of our Site, including:</p>
              
              <h3>Personal Information</h3>
              <p>When you create an account, place an order, sign up for our newsletter, or contact us, we may collect personal information such as:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Mailing address</li>
                <li>Phone number</li>
                <li>Payment information (credit card numbers, billing address)</li>
              </ul>
              
              <h3>Non-Personal Information</h3>
              <p>As you navigate through and interact with our Site, we may automatically collect certain information about your equipment, browsing actions, and patterns, including:</p>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages you visit on our Site</li>
                <li>Time and date of your visit</li>
                <li>Time spent on those pages</li>
                <li>Clickstream data</li>
              </ul>
              
              <h3>Cookies and Similar Technologies</h3>
              <p>We use cookies and similar tracking technologies to track activity on our Site and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
            </section>
            
            <section className="legal-section">
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect about you for various purposes, including to:</p>
              <ul>
                <li>Process and fulfill your orders</li>
                <li>Create and manage your account</li>
                <li>Provide customer service and respond to your inquiries</li>
                <li>Send transactional emails (order confirmations, shipping updates)</li>
                <li>Send marketing communications (if you've opted in)</li>
                <li>Improve our website and product offerings</li>
                <li>Analyze usage patterns and trends</li>
                <li>Protect against fraud and unauthorized transactions</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>
            
            <section className="legal-section">
              <h2>Disclosure of Your Information</h2>
              <p>We may disclose personal information that we collect or you provide:</p>
              <ul>
                <li><strong>To Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform functions on our behalf (such as payment processors, shipping companies, and marketing services).</li>
                <li><strong>For Business Transfers:</strong> If we or our assets are acquired by another company, your information may be included among the transferred assets.</li>
                <li><strong>For Legal Purposes:</strong> We may disclose your information to comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
                <li><strong>To Protect Rights:</strong> We may disclose your information to enforce our agreements and protect our rights or the rights of others.</li>
              </ul>
            </section>
            
            <section className="legal-section">
              <h2>Data Security</h2>
              <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All payment information is encrypted using SSL technology.</p>
              <p>Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Site. Any transmission of personal information is at your own risk.</p>
            </section>
            
            <section className="legal-section">
              <h2>Your Rights and Choices</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul>
                <li>The right to access personal information we hold about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to opt-out of marketing communications</li>
                <li>The right to withdraw consent (where processing is based on consent)</li>
              </ul>
              <p>To exercise these rights, please contact us using the information provided in the "Contact Us" section below.</p>
            </section>
            
            <section className="legal-section">
              <h2>Children's Privacy</h2>
              <p>Our Site is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information from our files.</p>
            </section>
            
            <section className="legal-section">
              <h2>Changes to Our Privacy Policy</h2>
              <p>We may update our Privacy Policy from time to time. If we make material changes, we will notify you by email (if you have an account with us) or by posting a notice on our Site. The date the Privacy Policy was last revised is identified at the top of the page.</p>
            </section>
            
            <section className="legal-section">
              <h2>Contact Us</h2>
              <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:</p>
              <div className="contact-info">
                <p>Email: privacy@crystalhaven.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: 123 Crystal Way, Sedona, AZ 86336</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
