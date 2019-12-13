import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  handleLogout = () => {
    this.props.clearUser();
    // this.props.history.push('/');
}

  render(){

    return (
      <header>
        <h1 className="navbar">Hair Guy'd<br />
          <small>Dads guyding other dads on doing their princess's hair.</small>
        </h1>
        <nav>
          <ul className="container">
            {
            (this.props.isLoggedIn)
            ? 
            <>
            <li><Link className="nav-link" to="/hairtypes">Hair Types</Link></li>
            <li><Link className="nav-link" to="/straight">Straight Hair</Link></li>
            <li><Link className="nav-link" to="/wavy">Wavy Hair</Link></li>
            <li><Link className="nav-link" to="/curly">Curly Hair</Link></li>
            <li><Link className="nav-link" to="/coily">Coily</Link></li>
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