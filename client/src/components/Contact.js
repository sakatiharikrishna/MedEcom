import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
    <h2>Contact Us</h2>
    <div className="contact-container">
      <p style={{fontWeight:700}}>If you have any questions or inquiries, please feel free to get in touch with us.</p>
      <div className="contact-details">
        <div className="contact-info">
          <span className="bi bi-geo-alt"></span>
          <p>123 Main Street, Cityville, Country</p>
        </div>
        <div className="contact-info">
          <span className="bi bi-envelope"></span>
          <p>Email: info@medecom.com</p>
        </div>
        <div className="contact-info">
          <span className="bi bi-telephone"></span>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <p> The "Contact Us" section is a crucial part is that allows users to reach out to the website's administrators or support team. It typically includes a form through which users can submit their inquiries, feedback, or issues. The submitted information is then sent to a backend server for processing and further communication.</p>
    </div>
    </>
  );
};

export default Contact;