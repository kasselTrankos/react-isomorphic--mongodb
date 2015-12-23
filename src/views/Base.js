import React from "react";
import {MainMenu} from "../components/MainMenu";
import {Twitter} from "../components/twitter/Twitter";

export default class Base extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="row">
          <div className="col-md-2">&nbsp;</div>
          <div className="col-md-8"><MainMenu></MainMenu></div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6"><Twitter></Twitter></div>
        </div>
        <div className="row">
          <div className="col-md-2">&nbsp;</div>
          <div className="col-md-8">{this.props.children}</div>
        </div>
      </div>
    );
  }
};
