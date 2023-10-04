import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DrugList from './components/DrugList';
import DrugDetails from './components/DrugDetails';
import Cart from './components/Cart';
import { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Offer from './components/OfferList';
import TermsAndConditions from './components/Terms';
import PrivacyNotice from './components/PrivacyNotice';
import AddressForm from './components/AddressForm';
import { CartProvider } from './components/CartContext';
import Signup from './components/SignUp';
import BasicAccordion from './components/Accordion';

const App = () => {
  const [selectedDrugId, setSelectedDrugId] = useState();
  const [selectedCarts, setSelectedCarts] = useState([])
  const [searchId, setSearchId] = useState();
  const [cartItem, setCartItem] = useState();
  console.log(selectedDrugId);
  const selectedCart=(items)=>{
    setSelectedCarts(items)
  }
  const cartClick = (item)=>{
    console.log(item)
    setCartItem(item)
  }
  return (
    <CartProvider>
      <Router>
      <div>
        <Navbar searchClick={(id)=>setSearchId(id)} cartSelected={selectedCarts} cartClicked={cartItem}/>
        <div style={{marginTop:120}}></div>
        <Switch>
          <Route path="/" exact component={() => <Home drugClick={(item) => setSelectedDrugId(item.id)} searchId={searchId} cartAdded={(value)=> cartClick(value)}/> } />
          <Route path="/drugs" component={() => <DrugList cartClicked={(items)=>selectedCart(items)}/> }/>
          <Route path={`/drug/:id/:name`} component={DrugDetails} />
          <Route path={`/cart`} component={Cart} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/offer" component={Offer} />
          <Route path="/terms" component={TermsAndConditions} />
          <Route path="/privacy" component={PrivacyNotice} />
          <Route path="/address" component={AddressForm} />
          <Route path="/signup" component={Signup} />
          <Route path="/accordion" component={BasicAccordion} />
        </Switch>
      </div>
      <Footer />
    </Router>
    </CartProvider>
  );
};

export default App;