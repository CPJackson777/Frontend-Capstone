import React, { Component } from 'react'
import { Link } from "react-router-dom";

class HairTypeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./Paul gives Ringo props.jpg')} alt="Coily Hair Pic" />
          </picture>
          {/* <h3>Name: <b>{this.props.animal.name}</b></h3>
          <p>Breed: {this.props.animal.breed}</p> */}
         
        
          <Link to={`/hairtypes/${this.props.hairtype.id}`}><button>Tutorials</button></Link>
        </div>
      </div>
    );
  }
}

export default HairTypeCard;