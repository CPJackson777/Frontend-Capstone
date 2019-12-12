import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom"
import Welcome from './welcome/Welcome';
import SignUp from "./auth/SignUp";
// import Login from "./auth/Login";


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

            </>
        );

    }
}

export default ApplicationViews;


