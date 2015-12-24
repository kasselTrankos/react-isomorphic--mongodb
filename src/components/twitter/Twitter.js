import React from "react";
import Transmit from "react-transmit";
import TwitterNewUser from "./TwitterNewUser";
import {Vars} from "../../common/Common";

class Twitter extends React.Component {
  componentWillMount(){
  }
  render() {
    return (
      <TwitterNewUser></TwitterNewUser>
    );
  }
}

export default Transmit.createContainer(Twitter, {

	initialVariables: {
    host: Vars.host()
	},
	fragments: {
    twitterUserTimeline({host}){
      let urlSession = `${host}/twitter/statuses/user_timeline`;
      return fetch(
				urlSession
			).then((response) => response.json()).then((body) => {

				return body;
			}).catch((error) => {
				console.error(error);
			});
    }
	}
});
