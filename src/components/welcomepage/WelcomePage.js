import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

class WelcomePage extends Component {
    render() {
        return (
            <>
            <div id="homeBackground" >

                <h1 id="welcomeHomePageHeader">Hair Huy'd</h1>
                        <div id="signUpButton">
                            <button>Sign Up</button>
                        </div>
                        <div id="loginButton">
                            <button>Login</button>
                        </div> 
                                                 
            </div>
            </>
        );
    }
}

export default WelcomePage;