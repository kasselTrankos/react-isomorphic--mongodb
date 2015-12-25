import React from "react";
import Transmit from "react-transmit";
import TwitterNewUser from "./TwitterNewUser";
import TwitterAccounts from "./TwitterAccounts";
import {Vars} from "../../common/Common";

export default class Twitter extends React.Component {
  componentWillMount(){
  }
  render() {
    return (
      <div className="row">
        <TwitterNewUser></TwitterNewUser>
      
        <TwitterAccounts></TwitterAccounts>
      </div>
    );
  }
}
