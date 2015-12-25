import {MongoDB} from "./MongoDB";
import {Query} from "./lib/TwitterQuery"



const Twitter = (opts, app)=>{
  if (opts && typeof opts.use === 'function') {
    var tmp = app;
    app = opts;
    opts = tmp;
  }

  opts = opts || {};
  opts.uses = [];

  let proxy=()=>{
    opts.uses = [
      {
        path:'/twitter/accounts',
        method:'GET',
        middleware: function (){
          let ctx = this;
          MongoDB.getAllTwitterAccounts()
           .then((docs)=>{
             ctx.body = docs;
           }).catch(function(e){
             console.log('no route founded!/twitter/accounts', e);
           })
        }

      }
    ];
  }

  proxy();
  return function* (next){

    // make sessionOptions independent in each request
    yield* serveTwitter(this, opts);
    //yield* next;
    try {
      yield* next;
    } catch (err) {
      throw err;
    } finally {
    }
  };

}
function serveTwitter(ctx, opts, app){

  let i=0, l=opts.uses.length;

  for(i;i<l;i++){

    if(ctx.request.method===opts.uses[i].method &&
      route(ctx.request.url, opts.uses[i].path)){
        return opts.uses[i].middleware.call(ctx);
      break;
    }
  }
}

function route(pattern, url) {
  var urlParts = url.split("/");

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
}
module.exports = Twitter;
/*var OAuth = require('oauth');
import https from "https";
import {MongoDB} from "./MongoDB";
import {Query} from "./lib/TwitterQuery"
import Q from "q";

const twitterConsumerKey = 'YcsBUJYAH5LYXUkFFHJWQxqIk';
const twitterConsumerSecret = 'PCArQ1hqitctQOG1JY2OHiOvBLbuuYRaFRWsp0aBeedZkDx0zn';
const Twitter = (_app)=>{
  let app = _app || false;

  var proxy = (koa, path)=>{
    console.log(koa);
  }
  return{
    proxy: proxy
  }
  /*Token(){
    return this.getAccessToken();
  },
  add(){

  },
  proxy(koa, location){
    Query.koa= koa;
    Query.url = location.pathname;
    return  Query.get('/twitter/accounts').then(function(koa){
      return MongoDB.getAllTwitterAccounts();
    }).then((docs)=>{
      return docs;
    }).catch(function(){
      console.log('no route founded!/twitter/accounts');
    });
    return Query.post('/twitter/account').then(function(koa){
      console.log(' method post for it');
    }).catch(function(){
      console.log('no route founded!/twitter/account');
    });
  }*/

//}

//export {Twitter}
