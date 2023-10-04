import React, { useState } from 'react';
import './Cart.css';
import { drugDetails } from './mockData';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Cart = (props) => {
  const { cartList,removeFromCart, clickLogin  } = useCart();
  const [quantity, setQuantity] = useState([]);

  console.log(cartList);
  const cartItems = [
  ];

  const handleAddress = () => {
    clickLogin(true)
  };
  const { id, name } = props.match.params;
  const selectedDrug = drugDetails.find((drug) => drug.id.toString() === id);
  cartItems.push(selectedDrug);
  console.log(name);
  return (
    <>
    <h2 style={{backgroundColor:'#0E746E'}}>Cart</h2>
      <ul className='drug-item'>
        {cartList.map((item,index) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: <b>${item.price}</b></p>
            <input
              type="number"
              name={"quantity"}
              value={quantity.length && quantity[index]?quantity[index][name]:1}
              onChange={(e) => setQuantity([...quantity,{[e.target.name]:e.target.value}])}
            /><br/>
            <button  onClick={() => handleAddress(item.id)}><Link style={{textDecoration:"none"}} >Add Delivery Address</Link></button>
            <button onClick={() => removeFromCart(item.id)} style={{marginTop:10,backgroundColor:'#ff2a42',color:'white'}}>Remove</button>
            <p>Delivery By <b>Today ,before 10:00 pm</b></p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;