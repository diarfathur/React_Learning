import React, { Component } from 'react';
import axios from 'axios'
import TopNewsItem from './TopNewsItem';

const noImg = '../img/No_Image_Available.jpg';
const anon = 'Anonymous'
const apiKey = 'e74dfabd2d864debb564eea6a21bd7ee';
const cari = 'indonesia'
const urlTopNews = 'https://newsapi.org/v2/top-headlines?q=' + cari + '&pageSize=5&apiKey=' + apiKey


class TopNews extends Component {
   constructor(props) {
      super(props);
      this.state = {
         listNews: [],
         userName: "",
         isLogin: false
      }
   }

   componentDidMount = () => {
      const self = this;
      axios
         .get(urlTopNews)
         .then(function (response) {
            self.setState({ listNews: response.data.articles })
         })
         .catch(function (error) {
            console.log(error);
         });
   }

   render() {
      const { listNews, userName, isLogin } = this.state;
      return (
         <div class="col-md-4">
            <div className="card">
               <h5 className="pl-3 pt-2">Popular News</h5>
               {listNews.map((item, key) => {
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

export default TopNews;

