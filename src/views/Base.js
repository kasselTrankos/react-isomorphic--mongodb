import React from "react";
import MainMenu from "../components/MainMenu";
export default class Base extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-2">&nbsp;</div>
          <div className="col-md-8"><MainMenu></MainMenu></div>
        </div>
        <div className="row">
          <div className="col-md-2">&nbsp;</div>
          <div className="col-md-8">{this.props.children}</div>
        </div>
      </div>
    );
  }
};
