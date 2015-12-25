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
      if(koa.request.method==='GET')
        return Query.Get(koa, location.pathname);


      if(koa.request.method==='POST')
        return __Twitter.Post(koa, location.pathname);

  }
}

export {Twitter}
