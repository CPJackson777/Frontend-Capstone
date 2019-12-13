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

  //*******************************************************************************
  // isAuthenticated checks if credentials are in local storage returns true/false
  //*******************************************************************************
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  //**********************************************
  // Set Store Email and password in local storage
  //**********************************************
  setUser = (signupObj) => {
    localStorage.setItem(
      "credentials",
      JSON.stringify(signupObj)
    )
    this.setState({
      user: this.isAuthenticated()
    });
  }

  clearUser = () => {
    localStorage.clear()

    this.setState({user: this.isAuthenticated() });
}


componentDidMount(){
  this.setState({
    user: this.isAuthenticated()
  })
}


  render() {
    return (
      <>
      <NavBar user={this.state.user} clearUser={this.clearUser} />
      <ApplicationViews user={this.state.user}
                        setUser={this.setUser} />
      </>
    );
  }
}

export default HairGuyd;