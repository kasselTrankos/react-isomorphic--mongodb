import React from "react";
import {Link} from 'react-router';
import InlineCss from "react-inline-css";
const ACTIVE = {color :'red'};
export default class Menu extends React.Component {

  render(){
    return (
      <InlineCss stylesheet={`
                & .card {
                    cursor: pointer;
                    margin: 15px;
                    padding: 15px;
                    text-align: center;
                    height: 200px;
                }
                & img {
                    width: 130px;
                    height: 130px;
                }
                & p {
                    margin: 10px;
                }
                `}>
      <div stylesheet="{stylesheet}">
        <h1>React Isomorphic  ::: A clear mount of menu</h1>
        <ul>
          <li><Link to="/" activeStyle={ACTIVE}>/</Link></li>
          <li><Link to="/about" activeStyle={ACTIVE}>/about</Link></li>
        </ul>
      </div>
      </InlineCss>
    );
  }
};
