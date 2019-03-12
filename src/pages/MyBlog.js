import React, { Component } from 'react';
import axios from 'axios'

import '../styles/about_style.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogControl from '../components/BlogControl';
import TopNews from '../components/TopNews';
import Article from '../components/Article';

const noImg = '../img/No_Image_Available.jpg';
const anon = 'Anonymous'

const apiKey = 'e74dfabd2d864debb564eea6a21bd7ee';
const baseUrl = 'https://newsapi.org/v2/everything'

const cari = 'indonesia'
const urlTopNews = baseUrl + '?q=' + cari + '&pageSize=5&apiKey=' + apiKey


class MyBlog extends Component {
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

    handleInputChange = e => {
        console.log("event", e.target.value);
        let value = e.target.value;

        this.setState(
            {
                search: value
            },
            () => {
                this.keywordNews(value)
            }
        );
    };

    sport = e => {
        this.keywordNews("sport")
    }

    business = e => {
        this.keywordNews("business")
    }
    
    politic = e => {
        this.keywordNews("politic")
    }
    
    style = e => {
        this.keywordNews("style")
    }
    
    keywordNews = async keyword => {
        console.log("search News", keyword)
        const self = this;

        if (keyword.length > 2) {
            try {
                const response = await axios.get(
                    baseUrl + "?q=" + keyword + "&apiKey=" + apiKey
                );
                console.log(response);
                self.setState({ listNews: response.data.articles })
            }
            catch (error) {
                console.error(error);
            }
        }
    };
    
    

    render() {
        const { listNews, userName, isLogin } = this.state;

        return (
            <div>
                <BlogControl doSearch={this.handleInputChange} sportClick={this.sport} businessClick={this.business} styleClick={this.style} politicClick={this.politic} />
                <div className="container text-left">
                    <div className="row mb-5">
                        <TopNews />
                        <div class="col-md-8 col-12">
                            {listNews.map((item, key) => {
                                const img = item.urlToImage === null ? noImg : item.urlToImage;
                                const url = item.url;
                                const title = item.title;
                                const publishedAt = item.publishedAt;
                                const author = item.author === null ? anon : item.author;
                                const content = item.description;

                                return <Article key={key} img={img} url={url} title={title} publishedAt={publishedAt}
                                    author={author} content={content} />
                            })}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default MyBlog;