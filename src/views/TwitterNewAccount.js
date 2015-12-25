import React from "react";
import __fetch from "isomorphic-fetch";
import Transmit from "react-transmit";
import {Vars} from "../common/Common";

export default class TwitterNewAccount extends React.Component {

  /*componentWillMount(){
    let postBody = this.props.location.state.body
    let host = Vars.host();
    fetch(`${host}/twitter/account`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postBody)
    })
    .then((data)=>{
      console.log(data);
    }).catch(function(error) {
      console.log('request failed', error)
    })

  }*/
  render() {
    return (
      <p>No hay contenido, mostrar guardado o error!</p>
    );
  }
}
