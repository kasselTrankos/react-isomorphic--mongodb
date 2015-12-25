import Base from "views/Base";
import Main from "views/Main";
import About from "views/About";
import TwitterNewAccount from "views/TwitterNewAccount"
import React from "react";
import {Router, Route} from "react-router";

/**
 * The React Router 1.0 routes for both the server and the client.
 */
export default (
	<Router>
		<Route component={Base}>
			<Route path="/" components={{main:Main, twitter: TwitterNewAccount} }/>
			<Route path="about" component={About}/>
			<Route path="/new/twitter/user_timeline" component={TwitterNewAccount}/>
		</Route>
	</Router>
);
