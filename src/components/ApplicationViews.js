import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom"
//***********Welcome Page************
import Welcome from './welcome/Welcome';
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
//***********Home****************
import HairTypeHome from "./hairtypes/hairTypeHome";


class ApplicationViews extends Component {

    render() {
        return (
            <>
                {/* Home and Authentication */}
                <Route exact path="/" render={(props) => {
                    return <Welcome {...props} />
                }}
                />

                {/* Remove null and return the component which will handle user registration */}
                <Route exact path="/signup" render={props => {
                    return <SignUp setUser={this.props.setUser} {...props} />
                }}
                />

                {/* Remove null and return the component which will handle user login */}
                <Route exact path="/login" render={props => {
                    return <Login setUser={this.props.setUser} {...props} />
                }}
                />

                <Route exact path="/hairtypes" render={(props) => {
                    return <HairTypeHome {...props} />
                }}
                />
            </>
        );

    }
}

export default ApplicationViews;


