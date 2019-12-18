import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom"
//***********Welcome Page************
import Welcome from './welcome/Welcome';
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
//***********Hair Types****************
import HairTypeList from './hairtypes/HairTypeList'
//***********Hair Styles****************
import HairStyleList from './hairstyles/HairStyleList'
import HairStyleForm from "./hairstyles/HairStyleForm"
import HairStyleEditForm from './hairstyles/HairStyleEditForm'


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
                    return this.props.isAuthenticated() ?
                        <HairTypeList {...props} />
                        :
                        <Redirect to="/" />
                }} />

                <Route path="/hairstyles/:hairtypeId(\d+)" render={(props) => {
                    return this.props.isAuthenticated() ?
                        <HairStyleList
                            hairtypeId={parseInt(props.match.params.hairtypeId)}
                            {...props} />
                        :
                        <Redirect to="/" />
                }} />

                <Route path="/hairstyles/new" render={props => {
                    return <HairStyleForm {...props} />
                }}
                />

                <Route path="/hairstyles/:hairstyleId(\d+)/edit" render={props => {
                    return <HairStyleEditForm 
                    hairtypeId={parseInt(props.match.params.hairtypeId)}
                    {...props} />
                }}
                />
            </>
        );

    }
}

export default ApplicationViews;


