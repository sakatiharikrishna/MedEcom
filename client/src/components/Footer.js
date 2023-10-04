import React, { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import BasicExample from './LoginForm';

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 MedEcom. All rights reserved.</p>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/drugs">Drugs</a>
          <Link to="/cart">Cart</Link>
          <Link onClick={handleClick}>Login</Link>
          <a href="/about">About</a>
        </div>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
      {(show) &&
    <div className='panel'>
         <div className='panel-header'>Login <span className='bi bi-x-lg' onClick={()=>setShow(false)}></span></div>
         <div className='panel-content'>
<BasicExample />
</div>
</div>
}
    </footer>
  );
};

export default Footer;