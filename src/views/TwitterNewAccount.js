import React from "react";
import __fetch from "isomorphic-fetch";
import Transmit from "react-transmit";
import {Vars} from "../common/Common";

class TwitterNewAccount extends React.Component {



  render() {
    const {accounts} = this.props;
    return (
      <div className="row">
      <ul className="list-group">
      {accounts && accounts.map((account) =>
        <li key={account._id}>{account.account}</li>
      )}
      </ul>

      </div>
    );
  }
}
export default Transmit.createContainer(TwitterNewAccount, {
	initialVariables: {
    host: Vars.host()
	},
	fragments: {
		accounts ({host}) {
			let url = `${host}/twitter/accounts`;
			return fetch(
				url
			).then((response) => response.json()).then((body) => {
				return body;
			}).catch((error) => {
				console.error(error);
			});
		}
	}
});
