import React, { useEffect, useState } from 'react';
import './DrugList.css';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const DrugList = (props) => {
  const { addToCart,cartList, removeFromCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedDrugs, setDisplayedDrugs] = useState([])
    useEffect(()=>{
      getDrugs()
    })
     const  getDrugs = async()=>{
      await fetch("http://127.0.0.1:4400/druglist")
      .then((response)=> response.json())
      .then((data)=> {
        setDisplayedDrugs(data)
        console.log(data.length)
      })
      .catch((error)=>{
        console.error('error',error)
      })
    }
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDrugs = displayedDrugs.filter((drug) =>
    drug.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const matchingDrugs = [];
  const remainingDrugs = [];

  filteredDrugs.forEach((drug) => {
    if (drug.name.toLowerCase().startsWith(searchTerm.toLowerCase())) {
      matchingDrugs.push(drug);
    } else {
      remainingDrugs.push(drug);
    }
  });

  return (
    <div>
      <h2>Drug List</h2>
      <h4>What are you looking for?</h4>
      <input
        type="text"
        placeholder="Search for drugs..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul className='drug-item'>
        {displayedDrugs.map((drug) => (
          <li key={drug.id} >
            <Link style={{ textDecoration: 'none' }} to={`/drug/${drug.id}/${encodeURIComponent(drug.name)}`}>
              <img src={drug.image} alt={drug.name} />
              <h3>{drug.name}</h3>
            </Link>
            <p className='druglist-description'>{drug.description}</p>
            <p>Price: <b>INR {drug.price}</b></p>
            <button
               onClick={cartList.find(item=>item.id === drug.id) ? () => removeFromCart(drug.id) :() => addToCart(drug)} className={cartList.find(item=>item.id === drug.id) && "focus"}
            >
              <span className='bi bi-cart4'></span> Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrugList;




