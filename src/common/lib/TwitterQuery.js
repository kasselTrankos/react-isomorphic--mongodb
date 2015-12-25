import {MongoDB} from "./../MongoDB";

import Q from "q";

const Query = {
  Get(koa, pathname)
  {
    if(/^\/twitter\/accounts$/i.test(pathname)){
      return MongoDB.getAllTwitterAccounts()
      .then((docs)=>{
        return docs;
      });
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
