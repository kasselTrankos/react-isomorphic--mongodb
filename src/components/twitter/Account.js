import React from "react";

const Account = React.createClass({
  render(){
    const {account} = this.props.account;
    return (
      <li className="list-group-item">{account.account}</li>
    );
  }
});

export {Account};
