import React from 'react';
import './About.css'; // Import your About.css file for styling

const About = () => {
  return (
    <>
    <h2>About</h2>
    <img src="https://t4.ftcdn.net/jpg/02/44/94/17/360_F_244941752_blcmwFb9nuztXpp7F8GAXAsptt0FNyko.jpg" alt='About' style={{backgroundSize:'cover',width:'100%',height:'400px'}}/>
    <h1 style={{background:'white',color:'black',textAlign:'center'}}>Who We Are</h1>
    <div className="about-container">
      <p>Health-E Commerce is a consumer health and wellness online retailer, comprised of four brands — FSA Store, HSA Store, WellDeserved Health, and Caring Mill. Since 2010, we have launched direct-to-consumer e-commerce brands aimed at simplifying the U.S. tax-free healthcare market and helping everyday Americans and companies benefit better from workplace benefits, wellness and health spending programs.</p>
      <p>
        MedEcom is a revolutionary online platform that aims to provide easy access to a wide range of pharmaceutical products.
        Our mission is to make healthcare products and medications more accessible and convenient for individuals around the world.
        With a user-friendly interface and a comprehensive drug database, MedEcom enables users to search, compare, and purchase
        various medications with just a few clicks. Whether you're looking for prescription drugs, over-the-counter medications,
        or specialized treatments, MedEcom has you covered.
        Our team of experts ensures that the information provided about each drug is accurate and up-to-date. We strive to maintain
        the highest standards of security and privacy, ensuring that your personal information and health-related data are protected.
        MedEcom is committed to empowering individuals to take control of their health and well-being. We believe that access to
        reliable healthcare information and quality medications is a fundamental right, and we're dedicated to making that a reality.
      </p>
      <p style={{fontWeight:600,marginTop:20}}>
        Thank you for choosing MedEcom as your trusted healthcare companion. We look forward to serving you and contributing to
        improved health outcomes for everyone.
      </p>
    </div>
    </>
  );
};

export default About;
