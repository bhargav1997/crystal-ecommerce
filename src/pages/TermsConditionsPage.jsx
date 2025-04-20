import './LegalPage.css';

const TermsConditionsPage = () => {
  // Get current date for last updated
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
  
  return (
    <div className="legal-page terms-conditions-page">
      <div className="page-hero">
        <div className="container">
          <h1>Terms & Conditions</h1>
          <p>The rules and guidelines for using our website and services</p>
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
              <p>Welcome to Crystal Haven. These Terms and Conditions ("Terms") govern your use of the Crystal Haven website (crystalhaven.com) and any related services offered by Crystal Haven ("we," "our," or "us").</p>
              <p>By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website or services.</p>
            </section>
            
            <section className="legal-section">
              <h2>Use of Our Website</h2>
              <h3>Eligibility</h3>
              <p>You must be at least 16 years old to use our website. By using our website, you represent and warrant that you meet this requirement.</p>
              
              <h3>Account Registration</h3>
              <p>To access certain features of our website, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
              <p>You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
              
              <h3>Prohibited Conduct</h3>
              <p>You agree not to:</p>
              <ul>
                <li>Use our website in any way that violates any applicable law or regulation</li>
                <li>Use our website to transmit or send unsolicited commercial communications</li>
                <li>Use our website to impersonate or attempt to impersonate Crystal Haven, a Crystal Haven employee, another user, or any other person or entity</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of our website</li>
                <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of our website, the server on which our website is stored, or any server, computer, or database connected to our website</li>
                <li>Attack our website via a denial-of-service attack or a distributed denial-of-service attack</li>
                <li>Use any robot, spider, or other automatic device, process, or means to access our website for any purpose, including monitoring or copying any of the material on our website</li>
              </ul>
            </section>
            
            <section className="legal-section">
              <h2>Products and Purchases</h2>
              <h3>Product Information</h3>
              <p>We strive to display our products and their colors as accurately as possible. However, we cannot guarantee that your computer's display of any color will be accurate. Additionally, all items are subject to availability, and we reserve the right to discontinue any products at any time.</p>
              
              <h3>Pricing and Payment</h3>
              <p>All prices are shown in US dollars and are subject to change without notice. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.</p>
              <p>Payment must be received prior to the acceptance of an order. We accept credit cards, PayPal, and other forms of payment as indicated during the checkout process.</p>
              
              <h3>Order Acceptance and Fulfillment</h3>
              <p>Your receipt of an order confirmation does not constitute our acceptance of your order. We reserve the right to accept or decline your order for any reason up until the point of shipping.</p>
              <p>We will make every effort to fulfill orders within the estimated timeframes, but we cannot guarantee specific delivery dates. We are not liable for any delays in shipments.</p>
            </section>
            
            <section className="legal-section">
              <h2>Intellectual Property Rights</h2>
              <p>Our website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Crystal Haven, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
              <p>You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.</p>
            </section>
            
            <section className="legal-section">
              <h2>User Contributions</h2>
              <p>Our website may contain message boards, chat rooms, personal web pages or profiles, forums, product reviews, and other interactive features that allow users to post, submit, publish, display, or transmit content or materials.</p>
              <p>Any content you post to our website will be considered non-confidential and non-proprietary. By providing any content on our website, you grant us and our affiliates and service providers, and each of their and our respective licensees, successors, and assigns the right to use, reproduce, modify, perform, display, distribute, and otherwise disclose to third parties any such material.</p>
              <p>You represent and warrant that all content you provide complies with these Terms and does not violate the rights of any third party.</p>
            </section>
            
            <section className="legal-section">
              <h2>Disclaimer of Warranties</h2>
              <p>YOUR USE OF OUR WEBSITE, ITS CONTENT, AND ANY PRODUCTS OBTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS CONTENT, AND ANY PRODUCTS OBTAINED THROUGH THE WEBSITE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</p>
              <p>CRYSTAL HAVEN DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
            </section>
            
            <section className="legal-section">
              <h2>Limitation of Liability</h2>
              <p>IN NO EVENT WILL CRYSTAL HAVEN, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES, OR ANY PRODUCTS OBTAINED THROUGH THE WEBSITE, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.</p>
            </section>
            
            <section className="legal-section">
              <h2>Indemnification</h2>
              <p>You agree to defend, indemnify, and hold harmless Crystal Haven, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the website.</p>
            </section>
            
            <section className="legal-section">
              <h2>Governing Law and Jurisdiction</h2>
              <p>These Terms and any dispute or claim arising out of or related to them, their subject matter, or their formation shall be governed by and construed in accordance with the laws of the State of Arizona, without giving effect to any choice or conflict of law provision or rule.</p>
              <p>Any legal suit, action, or proceeding arising out of, or related to, these Terms or the website shall be instituted exclusively in the federal courts of the United States or the courts of the State of Arizona, although we retain the right to bring any suit, action, or proceeding against you for breach of these Terms in your country of residence or any other relevant country.</p>
            </section>
            
            <section className="legal-section">
              <h2>Changes to the Terms</h2>
              <p>We may revise and update these Terms from time to time at our sole discretion. All changes are effective immediately when we post them.</p>
              <p>Your continued use of the website following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.</p>
            </section>
            
            <section className="legal-section">
              <h2>Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <div className="contact-info">
                <p>Email: legal@crystalhaven.com</p>
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

export default TermsConditionsPage;
