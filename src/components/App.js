import React, { Component } from 'react';
import '../styles/about_style.css';
import Header from './Header';
import Footer from './Footer';
import ContentIndex from './ContentIndex';
import Search from './Search';


class App extends Component {
   render() {
      return (
         <div>
            <Header/>
            <Search/>
            <ContentIndex/>
            <Footer/>
         </div>
      );
   }
}

export default App;

