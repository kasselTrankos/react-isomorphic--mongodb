import {MongoDB} from "./../MongoDB";

import Q from "q";

const Query = {
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

}
export {Query};
