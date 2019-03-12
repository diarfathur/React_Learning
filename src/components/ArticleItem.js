import React, { Component } from 'react';
import PropTypes from "prop-types";

class ArticleItem extends Component {
   render() {
      return (
         <div className="card mb-2">
            <img className="card-img-top" src={this.props.img}/>
            <div className="card-body">
               <h5 className="card-title"><a href={this.props.url}>{this.props.title}</a></h5>
               <p className="card-text"><small className="text-muted">Posted At {this.props.publishedAt}</small></p>
               <p className="card-text"><small className="text-muted">By {this.props.author}</small></p>
               <p className="card-text">{this.props.content}</p>

            </div>
         </div>
      );
   }
}

ArticleItem.propTypes = {
   img: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   publishedAt: PropTypes.string.isRequired,
   author: PropTypes.string.isRequired,
   content: PropTypes.string.isRequired
}

export default ArticleItem;

