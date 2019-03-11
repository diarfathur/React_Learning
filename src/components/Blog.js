import React, { Component } from 'react';
import '../styles/about_style.css';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import TopNews from './TopNews';
import Article from './Article';



class Blog extends Component {
   render() {
      return (
         <div>
            <Header/>
            <Search/>
            <div className="container">
               <div className="row mb-5">
               <TopNews/>
               <Article/>
               </div>
            </div>
            <Footer/>
         </div>
      );
   }
}

export default Blog;

