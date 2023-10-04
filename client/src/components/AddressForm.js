import React, { useState } from 'react';
import './AddressForm.css';

const AddressForm = () => {
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    document.write(`<div style='text-align:center'><h3>Your order is done...<h3> <br> <a href='/'>back to home</a></div>`)
    console.log('Order placed:', {
      address,
      pincode,
      country,
      state
    });
  };

  return (
    <div className='address-form-container'>
      <h2>Address Details</h2>
      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Pincode</label>
          <input
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>Country</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label>State</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div className='form-group'><button  type="submit">Place Order</button></div>
      </form>
    </div>
  );
};

export default AddressForm;