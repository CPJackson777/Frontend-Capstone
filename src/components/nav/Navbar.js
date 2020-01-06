import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'
import 'bulma/css/bulma.css'

class NavBar extends Component {

  handleLogout = () => {
    this.props.clearUser();
    // this.props.history.push('/');
}

  render(){

    return (
      <header>
        <h1 className="navbar">Hair Guy'd<br />
          <small>Dads guyding other dads on doing their daughter's hair.</small>
        </h1>
        <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="logo"/>
    </a>

    <a href='/#' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href='/#'>
        Home
      </a>
      </div>
      </div>
  
          <ul className="container">
            {
            (this.props.isLoggedIn)
            ? 
            <>
            <li><Link className="nav-link" to="/hairtypes">Hair Types</Link></li>
            <li><Link className="nav-link" to="/hairstyles/1">Straight Hair</Link></li>
            <li><Link className="nav-link" to="/hairstyles/2">Wavy Hair</Link></li>
            <li><Link className="nav-link" to="/hairstyles/3">Curly Hair</Link></li>
            <li><Link className="nav-link" to="/hairstyles/4">Coily</Link></li>
            <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li>
            </>
            : null
            }
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;