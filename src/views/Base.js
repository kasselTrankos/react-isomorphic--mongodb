import React from "react";
import {MainMenu} from "../components/MainMenu";

export default class Base extends React.Component {
  render() {
    console.log(' FROM BASE');
    const {main, twitter} = this.props;
    return (
      <div className="row">
        <div className="row">
          <div className="col-xs-2">&nbsp;</div>
          <div className="col-xs-8"><MainMenu></MainMenu></div>
          <div className="col-xs-2">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-xs-2">&nbsp;</div>
          <div className="col-xs-8">---
            {main}
            {twitter}
            ---
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
