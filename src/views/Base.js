import React from "react";
import {MainMenu} from "../components/MainMenu";
import Twitter from "../components/twitter/Twitter";

export default class Base extends React.Component {
  render() {
    const { main, twitter } = this.props;
    return (
      <div className="row">
        <div className="row">
          <div className="col-xs-2">&nbsp;</div>
          <div className="col-xs-8"><MainMenu></MainMenu></div>
          <div className="col-xs-2">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-xs-2">&nbsp;</div>
          <div className="col-xs-8">
            {twitter}
            {main}

          </div>
          <div className="col-xs-2">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-xs-2">&nbsp;</div>
          <div className="col-xs-8">{this.props.children}</div>
        </div>
      </div>
    );
  }
};
