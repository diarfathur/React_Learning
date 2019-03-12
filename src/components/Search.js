import React, { Component } from 'react';
import PropTypes from "prop-types";



class Search extends Component {
	render() {
		return (

			<form class="form-inline float-left">
				<input class="form-control mr-sm-2" type="search" placeholder="Cari..." aria-label="Search" />
				<button class="btn btn-light my-2 my-sm-0" type="submit">Search</button>
			</form>

		);
	}
}

export default Search;

