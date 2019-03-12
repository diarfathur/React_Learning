import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import MyBlog from './pages/MyBlog';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MyBlog />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
