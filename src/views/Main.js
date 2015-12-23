import __fetch from "isomorphic-fetch";
import React from "react";
import InlineCss from "react-inline-css";
import Transmit from "react-transmit";

/**
 * Main React application entry-point for both the server and client.
 */
class Main extends React.Component {
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
			<div>
					{stargazers && stargazers.map((user) =>
						<p key={user.id}>{user.name}</p>
					)}
			</div>
		);
	}
	/**
	 * <InlineCss> component allows you to write a CSS stylesheet for your component. Target
	 * your component with `&` and its children with `& selectors`. Be specific.
	 */
	static css (avatarSize) {
		return (`
			& .github {
				position: absolute;
				top: 0;
				right: 0;
				border: 0;
			}
			& {
				font-family: sans-serif;
				color: #0df;
				padding: 10px 30px 30px;
				width: 443px;
				margin: 10px auto;
				background: #222;
			}
			& .avatar {
				border-radius: 50%;
				width: ${avatarSize}px;
				height: ${avatarSize}px;
				margin: 0 2px 2px 0;
			}
		`);
	}

}

/**
 * Use Transmit to query and return GitHub stargazers as a Promise.
 */
export default Transmit.createContainer(Main, {
	initialVariables: {
	},
	fragments: {
		/**
		 * Return a Promise of the previous stargazers + the newly fetched stargazers.
		 */
		stargazers () {

			/**
			 * On the server, connect to GitHub directly.
			 */
			let urlSession = `http://localhost:8001/twitter`;
			if (__SERVER__)console.log(' callled before????');
			/**
			 * On the client, connect to GitHub via the proxy route.
			 */
			/*if (__CLIENT__) {
				const {hostname, port} = window.location;
				githubApi = `http://${hostname}:${port}/api/github`;
			}*/

			/**
			 * Load a few stargazers using the Fetch API.
			 */
			return fetch(
				urlSession
			).then((response) => response.json()).then((body) => {
				/**
				 * Stop fetching if the response body is empty.
				 */


				/**
				 * Pick id and username from fetched stargazers.
				 */
				return body;
			}).catch((error) => {
				console.error(error);
			});
		}
	}
});
