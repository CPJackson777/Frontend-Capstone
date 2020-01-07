import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import vet1 from './vet1.png';
import './Welcome.css'

class Welcome extends Component {
    render() {
        return (
            <>
                <div id="welcomeBackground" >

                    
                    <img className="welcome-logo" src={vet1}></img>
                    
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