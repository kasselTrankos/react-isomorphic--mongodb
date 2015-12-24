import React from "react";
import Form from 'react-router-form'
export default class TwitterNewUser extends React.Component{
  
  render(){
    return (<Form className="form-inline" method="POST" to="/new/twitter/user_timeline">
      <div className="form-group">
        <label htmlFor="twitterUser">Twitter User name</label>
        <input type="text" className="form-control" id="twitterUser" placeholder="Twitter User name" />
      </div>
      <button type="submit" className="btn btn-default">Guardar</button>
    </Form>)
  }
}
