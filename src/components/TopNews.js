import React, { Component } from 'react';
import axios from 'axios'
import TopNewsItem from './TopNewsItem';
import { connect } from 'unistore/react';
import { actions } from '../Store';
import { withRouter } from 'react-router-dom'


const noImg = '../img/No_Image_Available.jpg';
const anon = 'Anonymous'


class TopNews extends Component {
   
   componentDidMount = () => {
      this.props.getTopNews()
   }

   render() {
      return (
         <div class="col-md-4">
            <div className="card">
               <h5 className="pl-3 pt-2">Popular News</h5>
               {this.props.topNews.map((item, key) => {
                  const img = item.urlToImage === null ? noImg : item.urlToImage;
                  const url = item.url;
                  const title = item.title;
                  const publishedAt = item.publishedAt;
                  const author = item.author === null ? anon : item.author;
                  const content = item.content;

                  return <TopNewsItem key={key} img={img} url={url} title={title} publishedAt={publishedAt}
                     author={author} content={content} />
               })}
            </div>
         </div>
      );
   }
}

export default connect("topNews , username, is_login", actions)(withRouter(TopNews));

