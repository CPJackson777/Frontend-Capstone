import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Welcome extends Component {
    render() {
        return (
            <>
                <div id="welcomeBackground" >


                    <figure className="image is-128x128">
                        <img src="HairGuydLogoLarge.png"/>
                    </figure>
                        <div id="signUpButton">
                            <Link to={`/signup`}><button>Sign Up</button></Link>
                        </div>
                        <div id="loginButton">
                            <Link to={`/login`}><button>Login</button></Link>
                        </div>

            </div>
            </>
                );
            }
        }
        
export default Welcome;