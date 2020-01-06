import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'


class HairGuydNavBar extends Component {

  handleLogout = () => {
    this.props.clearUser();
    // this.props.history.push('/');
}

  render(){

    return (
      <header>
        <h1 className="header">Hair Guy'd<br />
          <small>Dads guyding other dads on doing their daughter's hair.</small>
        </h1>
        <nav className="navbar" role="navigation" aria-label="main navigation">
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

export default HairGuydNavBar;