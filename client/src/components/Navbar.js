import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useCart } from './CartContext';

import BasicExample from './LoginForm';
const Navbar = (props) => {
  const [prodSearch, setProdSearch] = useState('');
  const [show, setShow] = useState(false);
  const {  cartList, showLogin, clickLogin } = useCart();
  const userDetail = localStorage.getItem("userDetail");

  var url = require("./logo1.png");
  var url1 = require("./logo2.png");

  const handleChange = (e) => {
    setProdSearch(e.target.value);
  };
  const searchProd = (e)=>{
    e.preventDefault();
    props.searchClick(prodSearch);
  }
  const handleClick = () => {
    setShow(true);
  };
  const signOut = () =>{
    localStorage.setItem("userDetail", "");
  }
console.log(cartList.length)
  return (
    <>
    <div className='nav-menu'>
      <nav className='header-nav'>
      <div style={{display:"grid"}}>
          <img className='main-logo' src={url} alt='logo'/>
          <img className='mobile-logo' src={url1} alt='logo1'/>
        </div>
        <div className='main-dropdown' style={{display:'grid',justifyContent:'center'}}>
        <label>Drug Details</label>
        <div className="dropdown" style={{width:"100%"}}>
    <button className="dropbtn">Drugs<i className="bi bi-chevron-down"></i>
    </button>
    <div className="dropdown-content">
      <a href={`/drugs`}>Drugs</a>
      <a href="/offer">Drug Offers</a>
    </div>
  </div> 
  </div>
    <div class="search-container">
    <form action="/drugs/:name" className='form'>
      <input type="text" value={prodSearch} onChange={(e)=>handleChange(e)} placeholder="Search Drug.." name="search" />
      <button type="button" onClick={searchProd}><i class="bi bi-search"> </i>Search</button>
      </form>
    </div>
    <div className='information'>
       <div>
       <div className="dropdown">
    <button className="dropbtn"><i className="bi bi-briefcase"></i> About
    </button>
    <div className="dropdown-content">
      <a href="/about">About Us</a>
      <a href="/privacy">Privacy Policy</a>
      <a href="/terms">Terms & Conditions</a>
    </div>
  </div> 
       </div>
       <div>
       <Link to="/contact" style={{textDecoration:'none',color:'black'}}> <span className='bi bi-telephone'> Contact</span></Link>
       </div>
       <div>
       <Link to="/offer" style={{textDecoration:'none',color:'black'}}> <span className="bi bi-gear"> Offers</span></Link>
       </div>
    </div>
     </nav>
     <div>
      <nav className='menu-nav' style={{position:"relative"}}>
        <Link to="/"><span className='bi bi-house-door'></span> Home</Link>
        <Link to="/drugs"><span className='bi bi-prescription2'></span> Drugs</Link>
        <Link to="/cart" style={{position:"relative"}}><span className='bi bi-cart2'> </span><div className='cart-icon'><span>{cartList.length}</span></div>Cart</Link>
    
        <div className="dropdown">
    <button className="dropbtn"><span className='bi bi-person'></span>  {userDetail? userDetail: "Login"} <i className="bi bi-chevron-down"></i>
    </button>
    <div className="dropdown-content">
    {userDetail?
           <Link  onClick={signOut}> signOut</Link>:
           <>
           <Link  onClick={handleClick}> Login </Link>
           <Link  onClick={handleClick}> Signup</Link>
           </>
    }
    </div>
  </div> 
      </nav>
    </div>
    </div>
    {(show || showLogin) &&
    <div className='panel'>
         <div className='panel-header'>Login <span className='bi bi-x-lg' onClick={()=>{clickLogin(false);setShow(false)}}></span></div>
         <div className='panel-content'>
<BasicExample />
</div>
<div className='panel-footer'></div>
</div>
}
</>
  );
};

export default Navbar;