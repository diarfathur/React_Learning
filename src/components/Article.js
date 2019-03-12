import React, { Component } from 'react';
import PropTypes from "prop-types";
import ArticleItem from './ArticleItem'


class Article extends Component {
   constructor(props) {
      super(props);
      this.props = {
         img: this.props.img
      }
   }
  
   render() {
      return (

         <div className="card mb-2">
            <div className="card-body">
               <ArticleItem img={this.props.img} />

               <h5 className="card-title"><a href={this.props.url}>{this.props.title}</a></h5>
               <p className="card-text"><small className="text-muted">Posted At {this.props.publishedAt}</small></p>
               <p className="card-text"><small className="text-muted">By {this.props.author}</small></p>
               <p className="card-text">{this.props.content}</p>
            </div>
         </div>
      );
   }
}

Article.propTypes = {
   img: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   publishedAt: PropTypes.string.isRequired,
   author: PropTypes.string.isRequired,
   content: PropTypes.string.isRequired
}

export default Article;

