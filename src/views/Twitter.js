import React from "react";
import __fetch from "isomorphic-fetch";
import Transmit from "react-transmit";
import {Vars} from "../common/Common";
import {Account, NewAccountForm} from "../components/twitter/Account";

class Twitter extends React.Component {


  render() {
    if(__CLIENT__) console.log(" TWITTER c");
    if(__SERVER__) console.log("TWITTER s")
    const {accounts} = this.props;
    return (
      <div className="row">
        <div className="row">
          <NewAccountForm></NewAccountForm>
        </div>
        <div className="row">
          <ul className="list-group">
          {accounts && accounts.map((account) =>
            <Account key={account._id} account={{account}}></Account>
          )}
          </ul>
        </div>
      </div>
    );
  }
}
export default Transmit.createContainer(Twitter, {
	initialVariables: {
    host: Vars.host()
	},
	fragments: {
		accounts ({host}) {
      console.log('HOST', host);
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
