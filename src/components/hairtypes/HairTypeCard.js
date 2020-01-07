import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./HairTypesCard.css"

class HairTypeCard extends Component {
  render() {
    return (
      <>
        
        <div className="card">
          <header className="card-header">
            <h4 className="card-header-title">
              Type: {this.props.hairtype.title}
            </h4>
          </header>

          <div className="card-image" className="section">
            <figure className="">
              <img className="is-rounded" src={require(`./${this.props.hairtype.img}`)} alt="Hair Type Pic" />
            </figure>
          </div>


          <div className="card-content" className="section">
            <div className="content"></div>
            Description: {this.props.hairtype.description}
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