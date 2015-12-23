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
			<div className="row">
			<br />
				<ul className="list-group">
						{stargazers && stargazers.map((user) =>
							<li className="list-group-item" key={user.id}>{user.name}</li>
						)}
				</ul>
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
		stargazers () {
			let urlSession = `http://localhost:8001/twitter`;
			return fetch(
				urlSession
			).then((response) => response.json()).then((body) => {

				return body;
			}).catch((error) => {
				console.error(error);
			});
		}
	}
});
