import React, { Component } from 'react';
import '../styles/Search.css';
import Search from './Search';


class BlogControl extends Component {
   render() {
      return (
         <div class="container">
            <div class="navbar">
               <a href="#sport" onClick={this.props.sportClick}>Sport</a>
               <a href="#news" onClick={this.props.businessClick}>Business</a>
               <a href="#news" onClick={this.props.politicClick}>Politic</a>
               <a href="#news" onClick={this.props.styleClick}>Style</a>
               <form class="form-inline float-left">
                  <input class="form-control mr-sm-2" type="search" placeholder="Cari..." aria-label="Search" onChange={this.props.doSearch}/>
                  <button class="btn btn-light my-2 my-sm-0" type="submit">Search</button>
               </form>
            </div>
         </div>
      );
   }
}

export default BlogControl;

