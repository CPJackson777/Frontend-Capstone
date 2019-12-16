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
          <h3>Type: <b>{this.props.hairtype.title}</b></h3>
          <p>Description: {this.props.hairtype.description}</p>
         
        
          <Link to={`/hairtypes/${this.props.hairtype.id}`}><button>Tutorials</button></Link> 
          {/* Above line should link to hairstyles_hairtypes join table */}
        </div>
      </div>
    );
  }
}

export default HairTypeCard;