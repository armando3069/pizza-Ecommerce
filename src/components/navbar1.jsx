import React from 'react';
import logo from '../assets/pizza.png';
import { Link } from 'react-router-dom';
import '../styles/nav.css';


function navbar1() {

  return(
  <div className='navbar'>

 <div className="leftSide">
 <Link to={'/home'}>
 <img src={logo} alt="logo" />
</Link>
 </div>

 <div className="rightSide">
     <Link to={'/home'}>Home</Link>
     <Link to={'/menu'}>Menu</Link>
     <Link to={'/contact'}>Contact</Link>

 </div>

  </div>

  );
}

export default navbar1;
