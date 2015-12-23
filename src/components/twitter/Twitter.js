import React from "react";
import Transmit from "react-transmit";
var  Promise = require("bluebird");
import {SessionModel} from "./model/TwitterModel";

const Twitter = React.createClass({
  componentWillMount(){
    //Buscar como hacer un fetch de Backbone como un model.
    ///la missssma filosofia que hay para Extjs, joder ahi lo robo!!!
    

  },
  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Usuario o Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail2">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com"/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
});
export {Twitter}
