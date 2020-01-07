import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HairGuydLogoLarge from './HairGuydLogoLarge.png';
// import Combs from './Combs.jpg'
import './Welcome.css'
import { ButtonGroup } from 'react-bootstrap';

class Welcome extends Component {
    render() {
        return (
            <>
                <div id="welcomeBackground" >
                {/* <img className="bg-image" src={Combs}></img> */}
                    
                    <img className="welcome-logo" src={HairGuydLogoLarge}></img>
                    
                    <div className="auth-button">
                        <Link to={`/signup`}><button className="button is-medium is-rounded is-info is-outlined">Sign Up</button></Link>
                    </div>
                    <br></br>
                    <div className="auth-button">
                        <Link to={`/login`}><button className="button is-medium is-rounded is-warning">Login</button></Link>
                    </div>

                </div>
            </>
        );
    }
}

export default Welcome;