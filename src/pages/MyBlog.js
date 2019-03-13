import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'unistore/react';
import { actions } from '../Store';
import { withRouter } from 'react-router-dom'

import '../styles/about_style.css';

import Footer from '../components/Footer';
import BlogControl from '../components/BlogControl';
import TopNews from '../components/TopNews';
import Article from '../components/Article';

const noImg = '../img/No_Image_Available.jpg';
const anon = 'Anonymous'


class MyBlog extends Component {
    
    //componentDidMount adalah component yg live-cycle jangan dimasukkan ke Store
    componentDidMount = () => {
        this.props.getNews()
    }

    handleInputChange = e => {
        console.log("event", e.target.value);
        this.props.setField(e);
        this.props.searchNews(e.target.value);
    };
    
    
    render() {
        return (
            <div>
                <BlogControl doSearch={this.handleInputChange} catagoryClick={this.handleInputChange} />
                <div className="container text-left">
                    <div className="row mb-5">
                        <TopNews />
                        <div class="col-md-8 col-12">
                            {this.props.listNews.map((item, key) => {
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

export default connect("listNews , username, is_login", actions)(withRouter(MyBlog));