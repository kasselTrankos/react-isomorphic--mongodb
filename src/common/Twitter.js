var OAuth = require('oauth');
import https from "https";
import Q from "q";

const twitterConsumerKey = 'YcsBUJYAH5LYXUkFFHJWQxqIk';
const twitterConsumerSecret = 'PCArQ1hqitctQOG1JY2OHiOvBLbuuYRaFRWsp0aBeedZkDx0zn';
const Twitter = {
  use(koa, location){
    if(/^\/twitter$/i.test(location.pathname)){
      if(koa.request.method==='GET')  return __Twitter.Get(koa);
    }
    return null;
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
          deferred.reject("Houston from getOAuthAccessToken, file Twitter", error);
        }
    });
    deferred.promise.nodeify(callback);
    return deferred.promise;
  }
}
const __Twitter = {
  Get(koa){
    let twitterResponse = [
        {name: 'Hello World', id:1},
        {name: 'Juan Palomo', id:2}
      ];
    koa.body = twitterResponse;
    return twitterResponse;
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
