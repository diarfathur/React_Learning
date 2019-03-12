import React, { Component } from 'react';
import '../styles/about_style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContentIndex from '../components/ContentIndex';


class App extends Component {
   render() {
      return (
         <div>
            <ContentIndex/>
            <Footer/>
         </div>
      );
   }
}

export default App;

