import {MongoDB} from "./MongoDB";
import {Query} from "./lib/TwitterQuery"


var Twitter = function(router)
{
  router.get('/twitter/accounts', function *(){
    let ctx = this;
    MongoDB.getAllTwitterAccounts()
     .then((docs)=>{
       ctx.body = docs;
     }).catch(function(e){
       console.log('no route founded!/twitter/accounts', e);
     })
  });
  router.post('/twitter/accounts', function *(){
    let ctx = this;
    this.body={casa:'pelon'};
  });
}

module.exports = Twitter;
