import React from "react";
import __fetch from "isomorphic-fetch";
import Transmit from "react-transmit";
import {Vars} from "../common/Common";
import {Account, NewAccountForm} from "../components/twitter/Account";

class SaveAccount extends React.Component {


  render() {
    const {accounts} = this.props;
    return (
      <p>Salvado</p>
    );
  }
}
export default Transmit.createContainer(SaveAccount, {
	initialVariables: {
    host: Vars.host()
	},
	fragments: {
		accounts ({host}) {
			let url = `${host}/twitter/accounts`;
			return fetch(
				url, {
          method: 'POST',
          body: JSON.stringify({
            account: document.getElementById("account").value,
            pass: 'bar'
          })
        }
			).then((response) => response.json()).then((body) => {
				return body;
			}).catch((error) => {
				console.error(error);
			});
		}
	}
});
