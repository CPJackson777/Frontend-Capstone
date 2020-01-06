import React, { Component } from "react";
import ApplicationViews from "./ApplicationViews";
import HairGuydNavBar from './nav/HairGuydNavBar'
import './hairguyd.css'


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
  isAuthenticated = () => localStorage.getItem("activeUser") !== null

  //**********************************************
  // Set Store Email and password in local storage
  //**********************************************
  setUser = (signupArray) => {
    localStorage.setItem(
      "activeUser",
      JSON.stringify(signupArray[0].id)
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
      <HairGuydNavBar isLoggedIn={this.state.isLoggedIn} clearUser={this.clearUser} />
      <ApplicationViews isAuthenticated={this.isAuthenticated}
                        setUser={this.setUser} />
      </>
    );
  }
}

export default HairGuyd;