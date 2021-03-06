import https from "https";
import koa from "koa";
import proxy from "koa-proxy";
import serve from "koa-static";
import bodyParser from 'koa-body-parser';
import session from "koa-session";
var router = require('koa-router')();
import React from "react";
import ReactDOM from "react-dom/server";
import {RoutingContext, match} from "react-router";
import {createLocation} from "history";
import Transmit from "react-transmit";

import routes from "views/routes";

import Twitter from './common/Twitter'
import {MongoDB} from './common/MongoDB'

const app      = koa();
const hostname = process.env.HOSTNAME || "localhost";
const port     = process.env.PORT || 8001;


app.keys = ['some secret hurr'];
app.use(bodyParser());
app.use(serve("static", {defer: true}));
app.use(serve("bower_components/bootstrap/dist"), {defer:true});
app.use(session(app));

app
  .use(router.routes())
  .use(router.allowedMethods());

//Twitter(router);
let twitterResponse = null;

app.use(function *(next) {
  //let ctx = this;
	const location = createLocation(this.path);
	const webserver = process.env.NODE_ENV === "production" ? "" : "//" + hostname + ":8080";


  if(location.pathname==='/twitter/accounts'){
    try{
      this.body = yield MongoDB.getAllTwitterAccounts().then((docs)=>{
        return docs;
      }).catch(function(e){
        console.log('no route founded!/twitter/accounts', e);
      })
    }catch(e){
      console.log('exception',e);
    }
    //this.body=[{account: 'alwais', _id:1}]
  }
	yield ((callback) => {



		match({routes, location}, (error, redirectLocation, renderProps) => {

			if (redirectLocation) {
				this.redirect(redirectLocation.pathname + redirectLocation.search, "/");
				return;
			}

			if (error || !renderProps) {

				callback(error);
				return;
			}

			Transmit.renderToString(RoutingContext, renderProps).then(({reactString, reactData}) => {


				let template = (
						`<!doctype html>
					<html lang="en-us">
						<head>
							<meta charset="utf-8">
							<title>react-isomorphic-starterkit</title>
							<link rel="stylesheet" type="text/css" href="/css/bootstrap.css">
							<link rel="shortcut icon" href="/favicon.ico">
						</head>
						<body>
							<div id="react-root">${reactString}</div>
						</body>
					</html>`
				);

				this.type = "text/html";
				this.body = Transmit.injectIntoMarkup(template, reactData, [`${webserver}/dist/client.js`]);

				callback(null);
			});
		});
	});
});


app.listen(port, () => {
	console.info("==> ✅  Server is listening");
	console.info("==> 🌎  Go to http://%s:%s", hostname, port);
});
