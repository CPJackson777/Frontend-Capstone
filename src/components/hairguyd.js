import React, { Component } from "react";
import ApplicationViews from "./ApplicationViews";


class HairGuyd extends Component {

    isSignedup = () => localStorage.getItem("credentials") !== null

    setUser = (signupObj) => {
        // Set Store Email and password in local storage
        localStorage.setItem(
          "credentials",
          JSON.stringify(signupObj)
        )
        this.setState({
          user: this.isSignedup()
        });
      }


  render() {
    return (

          <ApplicationViews setUser={this.setUser}/>
    );
  }
}

export default HairGuyd;