import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Header = props => {
   return (
      <div className="container-fluid">
         <div className="row aboutheader">
            <div className="col-md-6">
               <img id="logo" src={require("../img/logo/logo-alterra-academy.png")} alt="logo-alterra" />
            </div>
            <div className="col-md-6">
               <nav>
                  <ul className="nav justify-content-end headerlist" id="navbarku">
                     <li className="nav-item">
                        <Link className="nav-link" to="/">HOME</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/gallery">GALLERY</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/contact">CONTACT</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/blog">BLOG</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/profile">PROFILE</Link>
                     </li><li className="nav-item">
                        <Link className="nav-link" to="/signup">SIGN UP</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link btn-success" to="/signin">SIGN IN</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link btn-danger" to="/" onClick={() => props.postSignOut()}>SIGN OUT</Link>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      </div>
   );
};


export default Header;