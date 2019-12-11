import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

class Welcome extends Component {
    render() {
        return (
            <>
            <div id="welcomeBackground" >

                <h1 id="welcomeTitle">Hair Guy'd</h1>
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

export default Welcome;