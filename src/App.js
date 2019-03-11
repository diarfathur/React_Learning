import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
   render() {
      return (
         <div>
            <div className="container-fluid">
               <div className="row aboutheader">
                  <div className="col-md-6">
                     <img id="logo" src="assets/img/logo/logo-alterra-academy.png" />
                  </div>
                  <div className="col-md-6">
                     <nav>
                        <ul className="nav justify-content-end headerlist" id="navbarku">
                           <li className="nav-item">
                              <a className="nav-link" id="active" href="about.html">ABOUT</a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" href="galery.html">GALLERY</a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" href="contact.html">CONTACT</a>
                           </li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </div>


            <section className="container-fluid" id="section_profile">
               <img id="profile-image" src="assets/img/profile.jpg" /><br />
               <span id="myname">Kanan Kiri</span><br />
               <img id="ico-location" src="assets/img/ico/ico-location.png" />
               <span id="mylocation">Malang, East Java, Indonesia</span><br />
               <span id="mydescription">Frontend Dev, UI/UX and Design</span><br />
               <button id="cv-button"><a>Download CV</a></button>
            </section>


            <div className="container-fluid">
               <div className="row">
                  <div className="myprofile row">
                     <div className="col-md-6 col-sm-12 col-12" id="aboutme">
                        <h4>About Me</h4>
                        <p id="phar1">Hi! I am <strong>Kanan Kiri</strong>, i work as a Front-end Developer at <span id="alterra">Alterra Group</span>.</p>
                        <p id="phar2">Front-end developer are constructive work websites use HTML, CSS, and JavaScript.</p>
                        <p id="phar3">Front-end Developer are the people who make it design and develop the design until becoming a website that can run.</p>
                     </div>
                     <div className="col-md-6 col-sm-12 col-12" id="information">
                        <h4>Information</h4>
                        <table className="tabelinformasi">
                           <tr>
                              <th>Age</th>
                              <td>: 22th</td>
                           </tr>
                           <tr id="tabelrow2">
                              <th>Email</th>
                              <td>: kanankiri@alphatech.id</td>
                           </tr>
                           <tr>
                              <th>Address</th>
                              <td>: Jl. Tidar Utara no. 20</td>
                           </tr>
                        </table>
                     </div>
                  </div>
               </div>
            </div>

            <footer className="container-fluid">

               <div className="row footer">
                  <div className="col-md-6 col-sm-12">
                     <img id="logofooter" src="assets/img/logo/logo-alterra-academy-plain.png" />
                     <p id="copyright"> &copy; Copyright Alterra Group 2019</p>
                  </div>

                  <div className="col-md-6 col-sm-12 sosmedfooter">
                     <div className="followme">
                        <p className="textfollowme">Follow Us On</p>
                        <ul>
                           <li className="listsosmed">
                              <img className="imgsosmed" src="assets/img/ico/ico-facebook.png" />
                              <span className="textsosmed" id="facebook">Facebook</span>
                           </li>
                           <li className="listsosmed">
                              <img className="imgsosmed" src="assets/img/ico/ico-twitter.png" />
                              <span className="textsosmed">Twitter</span>
                           </li>
                           <li className="listsosmed">
                              <img className="imgsosmed" src="assets/img/ico/ico-instagram.png" />
                              <span className="textsosmed">Instagram</span>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </footer>
         </div>
      );
   }
}

export default App;

