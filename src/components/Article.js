import React, { Component } from 'react';
import axios from 'axios'
import ArticleItem from './ArticleItem';

const noImg = '../img/No_Image_Available.jpg';
const anon = 'Anonymous'
const apiKey = 'e74dfabd2d864debb564eea6a21bd7ee';
const cari = 'indonesia'
const urlTopNews = 'https://newsapi.org/v2/everything?q=' + cari + '&pageSize=5&apiKey=' + apiKey


class Article extends Component {
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
         <div class="col-md-8 col-12">
            {listNews.map((item, key) => {
               const img = item.urlToImage === null ? noImg : item.urlToImage;
               const url = item.url;
               const title = item.title;
               const publishedAt = item.publishedAt;
               const author = item.author === null ? anon : item.author;
               const content = item.description;

               return <ArticleItem key={key} img={img} url={url} title={title} publishedAt={publishedAt}
                  author={author} content={content} />
            })}
         </div>
      );
   }
}

export default Article;

