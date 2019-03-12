import React, { Component } from 'react';
import PropTypes from "prop-types";

class ArticleItem extends Component {
   render() {
      return (
         <div>
            <img className="card-img-top" src={this.props.img}/>
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

