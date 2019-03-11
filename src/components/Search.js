import React, { Component } from 'react';
import '../styles/Search.css';


class Search extends Component {
   render() {
      return (
         <div class="container">
            <div class="navbar">
               <a href="#home">Sepak Bola</a>
               <a href="#news">Ekonomi</a>
               <a href="#news">Politik</a>
               <a href="#news">Hiburan</a>               
               <form class="form-inline float-left">
                  <input class="form-control mr-sm-2" type="search" placeholder="Cari..." aria-label="Search" />
                  <button class="btn btn-light my-2 my-sm-0" type="submit">Search</button>
               </form>
            </div>
         </div>
      );
   }
}

export default Search;

