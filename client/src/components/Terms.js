import React from "react";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-header">Terms and Conditions</h1>

      <section className="terms-section">
        <h2 className="section-heading">1. Introduction</h2>
        <p>The introduction sets the tone for the terms and conditions and provides a brief overview of what users can expect. It explains that the terms outline the rules and regulations governing the use of your website and any services you offer.</p>
      </section>

      <section className="terms-section">
        <h2 className="section-heading">2. Acceptance of Terms</h2>
        <p>This section explains that by accessing or using your website, users agree to abide by the terms and conditions. It's important to make users aware that using your site constitutes their agreement to these rules.</p>
      </section>
      <section className="terms-section">
        <h2 className="section-heading">3. User Accounts</h2>
        <p>If your website requires user accounts, this section can detail the process of creating an account, maintaining account security, and any responsibilities users have for their account activities.</p>
      </section>
      <section className="terms-section">
        <h2 className="section-heading">4. Products and Services</h2>
        <p>Describe the products or services your website offers. Include details about pricing, availability, warranties, and any specific terms associated with purchasing items from your site.</p>
      </section>
      <section className="terms-section">
        <h2 className="section-heading">5. Ordering and Payment</h2>
        <p>Outline the process of placing orders, including how users select products, add them to their cart, and complete the checkout process. Explain accepted payment methods and any relevant payment-related information.</p>
      </section>
      <section className="terms-section">
        <h2 className="section-heading">6. Shipping and Delivery</h2>
        <p>Provide information about shipping options, delivery times, and associated costs. Clarify how orders are processed and when users can expect their items to be delivered.</p>
      </section>
      <section className="terms-section">
        <h2 className="section-heading">7. Returns and Refunds</h2>
        <p>Clearly outline your policies for returns, exchanges, and refunds. Specify conditions under which users can return items, any time limits, and the process for initiating a return.</p>
      </section>

      
      <section className="terms-section">
        <h2 className="section-heading">8. Contact Information</h2>
        <p>If you have any questions about these terms and conditions, please contact us:</p>
        <address className="contact-info">
          Email: contact@example.com<br />
          Phone: +123-456-7890
        </address>
      </section>
    </div>
  );
};

export default TermsAndConditions;