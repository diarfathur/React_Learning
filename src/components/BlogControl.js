import React, { Component } from 'react';
import '../styles/Search.css';
import Search from './Search';


class BlogControl extends Component {
   render() {
      return (
         <div class="container">
            <div class="navbar">
               <button className="btn btn-light" style={{background: "none"}} href="#sport" value="Sport" onClick={(e) => this.props.catagoryClick(e)}>Sport</button>
               <button className="btn btn-light" style={{background: "none"}} href="#news" value="Business" onClick={(e) => this.props.catagoryClick(e)}>Business</button>
               <button className="btn btn-light" style={{background: "none"}} href="#news" value="Politic" onClick={(e) => this.props.catagoryClick(e)}>Politic</button>
               <button className="btn btn-light" style={{background: "none"}} href="#news" value="Technology" onClick={(e) => this.props.catagoryClick(e)}>Technology</button>
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