/**
that file tries to use backbone as mmodel/colecction to brings me the REST
*/

import * as Backbone from 'backbone';

var SessionModel = Backbone.Model.extend({
  url(){
    return '//twitter';
  },
  defaults () {
    return {
      name: null,
      id: null,
      email:null,
      avatar:null
    };
  }
});
export {SessionModel}
