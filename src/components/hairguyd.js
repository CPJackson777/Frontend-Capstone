import React, { Component } from "react";
import ApplicationViews from "./ApplicationViews";
import NavBar from './nav/NavBar'


class HairGuyd extends Component {

  //****************************** 
  // user doesn't exist by default
  //******************************
  state = {
    user: false
  }

  //*****************************************************************************************
  // Authentication: isSignedUp checks if credentials are in local storage returns true/false
  //*****************************************************************************************
  isSignedup = () => localStorage.getItem("credentials") !== null

  //**********************************************
  // Set Store Email and password in local storage
  //**********************************************
  setUser = (signupObj) => {
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
      <>
      <NavBar user={this.state.user} clearUser={this.clearUser} />
      <ApplicationViews setUser={this.setUser} />
      </>
    );
  }
}

export default HairGuyd;