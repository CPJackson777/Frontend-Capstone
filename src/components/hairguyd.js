import React, { Component } from "react";
import ApplicationViews from "./ApplicationViews";
import NavBar from './nav/NavBar'


class HairGuyd extends Component {

  //****************************** 
  // user doesn't exist by default
  //******************************
  state = {
    isLoggedIn: false
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
      isLoggedIn: this.isAuthenticated()
    });
  }

  clearUser = () => {
    localStorage.clear()

    this.setState({isLoggedIn: this.isAuthenticated() });
}


componentDidMount(){
  this.setState({
    isLoggedIn: this.isAuthenticated()
  })
}


  render() {
    return (
      <>
      <NavBar isLoggedIn={this.state.isLoggedIn} clearUser={this.clearUser} />
      <ApplicationViews isAuthenticated={this.isAuthenticated}
                        setUser={this.setUser} />
      </>
    );
  }
}

export default HairGuyd;