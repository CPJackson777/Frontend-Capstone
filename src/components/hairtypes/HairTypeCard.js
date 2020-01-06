import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./HairTypesCard.css"

class HairTypeCard extends Component {
  render() {
    return (
      <>
        <div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              Type: {this.props.hairtype.title}
            </p>
          </header>
          <div className="card-image">
            <figure className="image is-128x128">
              <img className="is-rounded" src={require(`./${this.props.hairtype.img}`)} alt="Hair Type Pic" />
            </figure>
          </div>

          <div className="card-content">
            <div className="content"></div>
            Description: {this.props.hairtype.description}
          </div>
        </div>

        <footer className="card-footer">
        <Link to={`/hairstyles/${this.props.hairtype.id}`}>
          <button className="button is-primary is-focused is-fullwidth">Tutorials</button></Link>
          </footer>
      </div>
          {/* </div> */ }
      </>
        );
  }
}

export default HairTypeCard;