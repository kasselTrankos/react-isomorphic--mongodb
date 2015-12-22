import React from "react";
import {Link} from 'react-router';
import InlineCss from "react-inline-css";
const ACTIVE = {color :'red'};
export default class MenuMenu extends React.Component {

  render(){
    return (
      <div className="row">
        <h1>React Isomorphic  ::: A clear mount of menu</h1>
        <ol className="breadcrumb">
          <li><Link to="/" activeStyle={ACTIVE}>Home</Link></li>
          <li><Link to="/about" activeStyle={ACTIVE}>About</Link></li>
        </ol>
      </div>
    );
  }
};
