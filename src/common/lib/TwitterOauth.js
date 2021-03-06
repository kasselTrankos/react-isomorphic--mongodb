import {MongoDB} from "./../MongoDB";
import https from "https";
import Q from "q";


const Oauth ={
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
export {Oauth};
