var OAuth = require('oauth');
import https from "https";
import {MongoDB} from "./MongoDB";
import {Query} from "./lib/TwitterQuery"
import Q from "q";

const twitterConsumerKey = 'YcsBUJYAH5LYXUkFFHJWQxqIk';
const twitterConsumerSecret = 'PCArQ1hqitctQOG1JY2OHiOvBLbuuYRaFRWsp0aBeedZkDx0zn';
const Twitter = {
  Token(){
    return this.getAccessToken();
  },
  proxy(koa, location){
    Query.koa= koa;
    Query.url = location.pathname;
    return Query.get('/twitter/accounts').then(function(koa){
      return MongoDB.getAllTwitterAccounts()
    }).then((docs)=>{
      console.log(docs, 'o lo tengo o me patrece a mi!');
      return docs;
    }).catch(function(){
      console.log('no route founded!');
    });
        /*

      if(koa.request.method==='POST')
        return __Twitter.Post(koa, location.pathname);
        */
  }
}

export {Twitter}
