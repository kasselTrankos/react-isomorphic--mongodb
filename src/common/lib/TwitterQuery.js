import {MongoDB} from "./../MongoDB";
import http from "http";
import url from "url";
import Q from "q";

const Query = {
  koa:null,
  url:'',
  get(path, callback){
    return this.query(path, 'GET', callback);
  },
  post(path, callback){
    return this.query(path, 'POST', callback);
  },
  query(path, type, callback){
    var deferred = Q.defer();
    //acabo de pensar en el orden logico de condicional, si esto no es pensar!!!, break!
    if(!this.koa.request.method.toUpperCase()===type || !this.route(path))
      deferred.reject("no route trued:", path);
    else
      deferred.resolve(this.koa);

    deferred.promise.nodeify(callback);
    return deferred.promise;
  },
  route(pattern, url) {
    var urlParts = url.split("/");
    var param = [];
    var currentRoute = null;

    var patternSplit = pattern.split("/");
    if (urlParts.length === patternSplit.length) {
      for (var i = 0, l = urlParts.length;i<l;i++) {
        var reg = patternSplit[i].match(/{(.*)}/);
        if (!reg) {
          if (patternSplit[i] !== urlParts[i]) {
            return false;
            break;
          }
        }
      }
    }
    else
      return false;




    return true;
  },
  /*
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
  },*/

}
export {Query};
