import React, { Component } from "react";
import ApplicationViews from "./ApplicationViews";


class HairGuyd extends Component {


  render() {
    return (

          <ApplicationViews {...this.props}/>
    );
  }
}

export default HairGuyd;