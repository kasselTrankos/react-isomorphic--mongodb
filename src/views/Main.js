import __fetch from "isomorphic-fetch";
import React from "react";
import InlineCss from "react-inline-css";
import Transmit from "react-transmit";

/**
 * Main React application entry-point for both the server and client.
 */
export default class Main extends React.Component {
	/**
	 * Runs on server and client.
	 */
	componentWillMount () {
		if (__SERVER__)
			console.log("Hello server");

		if (__CLIENT__)
			console.log("Hello client");



	}

	/**
	 * Runs on server and client.
	 */
	render () {

		/**
		 * This is a Transmit fragment.
		 */
		const {stargazers} = this.props;

		return (
			<div className="row">
			<br />no hay?
				<ul className="list-group">
						
				</ul>
			</div>
		);
	}


}
