import React from "react";
import Transmit from "react-transmit";
import {Vars} from "../../common/Common";

class Twitter extends React.Component {
  componentWillMount(){
  }
  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Usuario o Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail2">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com"/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
}

export default Transmit.createContainer(Twitter, {
	initialVariables: {
	},
	fragments: {
		twitterSession () {
      console.log();
      let host = Vars.host();
      //
			let urlSession = `${host}/twitter`;
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
