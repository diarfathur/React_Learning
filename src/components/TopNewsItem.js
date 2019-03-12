import React, { Component } from 'react';
import PropTypes from "prop-types";

class TopNewsItem extends Component {
    render() {
        return (
            <div className="card" style={{"border-radius": 0}}>
                <div className="card-body">
                    <h6 className="card-title"><a href={this.props.url}>{this.props.title}</a></h6>
                    <p className="card-text"><small className="text-muted">By {this.props.author}</small></p>
                </div>
            </div>
        );
    }
}

TopNewsItem.propTypes = {
    img: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default TopNewsItem;