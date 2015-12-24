import Q from "q";
import mongoose from "mongoose";
const urlDatabase = 'mongodb://localhost:27017/vera';
mongoose.connect(urlDatabase);
var Schema = mongoose.Schema;
var TwitterToken = new Schema({
  access_token: { type: String, default: '', index:true },
  date: { type: Date, default: Date.now }
});
var TwitterTokenModel = mongoose.model('TwitterToken', TwitterToken);
var TwitterAccount = new Schema({
  account:{ type: String, default: '', index:true },
  date: { type: Date, default: Date.now }
});
var TwitterAccountModel = mongoose.model('TwitterAccount', TwitterAccount);
const MongoDB = {
  saveAccessToken(access_token, callback){
    var deferred = Q.defer();
    TwitterTokenModel.update(
      {access_token: access_token},
      {$setOnInsert: {access_token: access_token}},
      {upsert: true}, function (err, rowsAffected) {
      if(err)
        deferred.reject("Houston from MongoDB.saveAccessToken, file common/MongoDB", err);

      deferred.resolve([access_token, rowsAffected]);
    });
    deferred.promise.nodeify(callback);
    return deferred.promise;
  },
  findAccessTokenPrevious(callback){
    var deferred = Q.defer();
    TwitterTokenModel.findOne({}, 'access_token', function(err, doc){
      if(err)
        deferred.reject("Houston from MongoDB.findTokenByAccessTokenPrevious, file common/MongoDB", err);
      deferred.resolve(doc);
    });
    deferred.promise.nodeify(callback);
    return deferred.promise;
  },
  insertNewAccount(accountName, callback){
    var deferred = Q.defer();
    TwitterAccountModel.update(
      accountName,
      {$setOnInsert: accountName},
      {upsert: true}, function (err, rowsAffected) {
        console.log(err, accountName);
      if(err)
        deferred.reject("Houston from MongoDB.saveAccessToken, file common/MongoDB", err);
      deferred.resolve([accountName, rowsAffected]);
    });
    deferred.promise.nodeify(callback);
    return deferred.promise;
  }

}
export {MongoDB}
