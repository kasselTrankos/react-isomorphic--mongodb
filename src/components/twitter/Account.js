import React from "react";
import Form from 'react-router-form'

const Account = React.createClass({
  render(){
    const {account} = this.props.account;
    return (
      <li className="list-group-item">{account.account}</li>
    );
  }
});
const NewAccountForm = React.createClass({
  render(){
    return (
      <Form className="form-inline" method="POST" to="/twitter/user_timeline">
      <div className="form-group">
        <label htmlFor="account">Twitter User name</label>
        <input type="text" className="form-control" id="account" placeholder="Twitter User name" />
      </div>
      <button type="submit" className="btn btn-default">Guardar</button>
    </Form>)
  }
});

export {Account};
