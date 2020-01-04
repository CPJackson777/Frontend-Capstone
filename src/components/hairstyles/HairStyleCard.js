import React, { Component } from 'react';
import { Link } from "react-router-dom";


class HairStyleCard extends Component {


    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Style: <span className="card-petname">{this.props.hairstyle.styleName}</span></h3>
                    <picture>
                        <img src={require(`./${this.props.hairstyle.imgUrl}`)} alt="Hair Style" />
                    </picture>
                    <p>Instructions: <span>{this.props.hairstyle.instructions}</span></p>
                    <div>
                        <a href={this.props.hairstyle.videoUrl}>Watch Tutorial:</a>
                    </div>
                    <button 
                    type="button" 
                    onClick={() => { this.props.history.push(`/hairstyles/${this.props.hairstyle.id}/edit`) }}>
                        Edit
                    </button>
                    <button type="button"
                    onClick={() => this.props.deleteHairStyle(this.props.hairstyle.id)}>
                        Delete
                    </button>
                    {/* <Link to={`/hairstyles/${this.props.hairstyle.id}`}><button>See More</button></Link> */}
                    </div>
            </div>
        );
    }
}

export default HairStyleCard;