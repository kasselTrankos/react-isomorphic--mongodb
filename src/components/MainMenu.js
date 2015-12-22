import React from "react";
import {Link} from 'react-router';
const ACTIVE = {color :'red'};
export default class Menu extends React.Component {
  render(){
    return (<div>
      <h1>React Isomorphic  ::: A clear mount of menu</h1>
      <ul>
        <li><Link to="/" activeStyle={ACTIVE}>/</Link></li>
        <li><Link to="/about" activeStyle={ACTIVE}>/about</Link></li>
      </ul>
    </div>);
  }
};
