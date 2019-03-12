import React, { Component } from 'react';
import '../styles/about_style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';
import TopNews from '../components/TopNews';
import Article from '../components/Article';


class MyBlog extends Component {
    render() {
        return (
            <div>
                <Header />
                <Search />
                <div className="container">
                    <div className="row mb-5">
                        <TopNews />
                        <Article />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default MyBlog;