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

  proxy(koa, location){
      return [{account: 'pedro', _id: 1}];
      /*if(koa.request.method==='GET')  return __Twitter.Get(koa, location);
      if(koa.request.method==='POST')  return __Twitter.Post(koa, location);*/

  }
}

export {Twitter}
