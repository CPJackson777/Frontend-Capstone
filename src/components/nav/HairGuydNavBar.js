import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'


class HairGuydNavBar extends Component {

  handleLogout = () => {
    this.props.clearUser();
    // this.props.history.push('/');
  }

  render() {

    return (
      <>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
            Hair Guy'd
      </h1>
            <h2 className="subtitle">
            Dads guyding other dads on doing their daughter's hair.
      </h2>
          </div>
        </div>
      </section>

    
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
      </>
    )
  }
}

export default HairGuydNavBar;