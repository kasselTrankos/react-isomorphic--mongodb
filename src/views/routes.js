import Base from "./Base";
import Main from "./Main";
import About from "./About";
import Twitter from "./Twitter"
import SaveAccount from "./SaveAccount";
import React from "react";
import {Router, Route} from "react-router";

/**
 * The React Router 1.0 routes for both the server and the client.
 */
export default (
	<Router>
		<Route component={Base}>
		<Route path="/" components={{main:Main , twitter:Twitter}}/>
		<Route path="/twitter/account" components={{main:Main,  twitter:Twitter}}/>
		<Route path="about" component={About}/>



		</Route>
	</Router>
);
