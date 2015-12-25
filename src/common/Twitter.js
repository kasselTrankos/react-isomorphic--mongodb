var OAuth = require('oauth');
import https from "https";
import {MongoDB} from "./MongoDB";

import Q from "q";

const twitterConsumerKey = 'YcsBUJYAH5LYXUkFFHJWQxqIk';
const twitterConsumerSecret = 'PCArQ1hqitctQOG1JY2OHiOvBLbuuYRaFRWsp0aBeedZkDx0zn';
const Twitter = {
  Token(){
    return this.getAccessToken();
  },
  getAccessToken(){
    return MongoDB.findAccessTokenPrevious()
    	.then((doc)=>{
    		if(doc){
    			return doc;
    		}else{
    			OAuth()
    			.then((access_token)=>{
    				return {access_token: access_token};
    			})
    			.catch((err)=>{
    				console.log("errror cuando intento conectarme a outh", err);
    			});
    		}
    	})
    	.catch((err)=>{
    		console.log('Existe previo!!!', err);
    });
    //return {hh:10};
  },
  proxy(koa, location){
    if(/^\/twitter/i.test(location.pathname)){
      if(koa.request.method==='GET')  return __Twitter.Get(koa, location);
      if(koa.request.method==='POST')  return __Twitter.Post(koa, location);
    }
    return {void: true};
  },
  OAuth(callback){
    var deferred = Q.defer();
    var OAuth2 = OAuth.OAuth2;
    new OAuth2(
      twitterConsumerKey,
      twitterConsumerSecret,
      'https://api.twitter.com/', null, 'oauth2/token', null)
    .getOAuthAccessToken(
      '', {'grant_type':'client_credentials'},
      function (error, access_token, refresh_token, results){
        if(!error){
          deferred.resolve(access_token);
        }else{
          deferred.reject("Houston Twitter.getOAuthAccessToken, common/Twitter", error);
        }
    });
    deferred.promise.nodeify(callback);
    return deferred.promise;
  }
}
const __Twitter = {
  Get(koa, location){
    if(/^\/twitter\/account$/i.test(location.pathname)){
      let twitterResponse = [
          {name: 'Hello World y antonio', id:1},
          {name: 'Juan Palomo', id:2}
        ];
      koa.body = twitterResponse;
      return twitterResponse;
      return MongoDB.getAllTwitterAccounts()
      .then((docs)=>{
        koa.body = docs;
        return docs;
      });
    }else{
      let twitterResponse = [
          {name: 'Hello World', id:1},
          {name: 'Juan Palomo', id:2}
        ];
      koa.body = twitterResponse;
      return twitterResponse;
    }
  },
  Post(koa, location){
    let postedVariables = koa.request.body;
    if(/\/twitter\/account$/i.test(location.pathname)){
      return MongoDB.insertNewAccount(postedVariables)
      .then((accountName, rowsAffected)=>{
        let twitterResponse = [
            postedVariables
          ];
        koa.body = twitterResponse;
        return twitterResponse;
      });

    }
  },
  getTimeline(access_token, screen_name, callback){
    var deferred = Q.defer();
    var options = {
        hostname: 'api.twitter.com',
        path: '/1.1/statuses/user_timeline.json?screen_name=',
        headers: {
            Authorization: 'Bearer ' + access_token
        }
    };
    https.get(options, function(result){
      let buffer = '';
      result.setEncoding('utf8');
      result.on ('data', (data)=>{
        buffer += data;
      });
      result.on ('end', ()=>{
          deferred.resolve(JSON.parse(buffer));
      });
      result.on ('error', (e)=>{
        deferred.reject("Houston from getTimeline, file Twitter, with: ",e);
      });
    });
    deferred.promise.nodeify(callback);
    return deferred.promise;
  }
}
export {Twitter}
