import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom"
import Welcome from './welcome/Welcome';


class ApplicationViews extends Component {

    render() {
        return (
            <>
                {/* Home and Authentication */}
                <Route exact path="/" render={(props) => {
                    return <Welcome {...props} />
                }}
                />
            </>
        );

    }
}

export default ApplicationViews;


