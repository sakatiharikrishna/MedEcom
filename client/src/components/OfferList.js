import React, { useState } from 'react';
import './Offer.css'; 
import { Link } from 'react-router-dom';

const Offer = () => {
  const [offers, setOffers] = useState([
    {
      id: 1,
      title: 'Special Discount on Nexium',
      description: 'Get 20% off on Nexium medication for a limited time.',
    },
    {
      id: 2,
      title: 'Buy One Get One Free on Generic Drug ',
      description: 'Purchase Generic Drug 1 or 2 and get another one for free.',
    },
    {
      id: 3,
      title: 'Buy One Get One Free on Xtandi',
      description: 'Purchase Xtandi and get another one for free.',
    },
  ]);
  console.log(setOffers);

  return (
    <>
    <h2>Current Offers</h2>
    <img src='https://www.pulseplus.in/content/images/offers/20offer-banner.jpg' alt='offer' style={{backgroundSize:'cover',width:'100%',height:'374px'}}/>
    <div className="offer-container">
      <ul className="offer-list">
        {offers.map((offer) => (
          <li key={offer.id} className="offer-item">
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </li>
        ))}
      </ul>
      <div className="back-link">
        <Link to="/drugs">Back to Drug List</Link>
      </div>
    </div>
    </>
  );
};

export default Offer;