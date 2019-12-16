import React, { Component } from 'react';
import { Link } from "react-router-dom";


class HairStyleCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Style: <span className="card-petname">{this.props.hairstyle.styleName}</span></h3>
                    <picture>
                        {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
                    </picture>
                    <p>Instructions: <span>{this.props.hairstyle.instructions}</span></p>
                    <div>
                        <h4>Watch Tutorial: <span>{this.props.hairstyle.videoUrl}</span></h4>
                    </div>
                    <button type="button">
                        Edit
                    </button>
                    <button type="button">
                        Delete
                    </button>
                    {/* <Link to={`/hairstyles/${this.props.hairstyle.id}`}><button>See More</button></Link> */}
                    </div>
            </div>
        );
    }
}

export default HairStyleCard;