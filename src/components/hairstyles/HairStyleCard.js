import React, { Component } from 'react';
import './hairstylecard.css'


class HairStyleCard extends Component {


    render() {
        // console.log("userId", this.props.hairstyle.userId)
        // console.log("localstorage", Number(localStorage.getItem("activeUser")))        

        return (
            <section className="section">
            <div className="container">
                <div className="card-content">
                    <h3 className="instructions">Style: <span className="card-stylename">{this.props.hairstyle.styleName}</span></h3>
                    <picture>
                        <img src={require(`./${this.props.hairstyle.imgUrl}`)} alt="Hair Style" width="256" height="256"/>
                    </picture>
                    <p className="instructions">Instructions: <span>{this.props.hairstyle.instructions}</span></p>
                    <div>
                        {/* <a href={this.props.hairstyle.videoUrl} target="_blank" rel="noopener noreferrer">Watch Tutorial:</a> */}
                        <iframe width="560" height="315" src={this.props.hairstyle.videoUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>

                    {
                        (this.props.hairstyle.userId) === Number(localStorage.getItem("activeUser"))
                            ?
                            <>
                            <button
                                className="button is-info is-rounded"
                                type="button"
                                onClick={() => { this.props.history.push(`/hairstyles/${this.props.hairstyle.id}/edit`) }}>
                                Edit
                            </button>
                             <button 
                             className="button is-danger is-rounded"
                             type="button"
                                onClick={() => this.props.deleteHairStyle(this.props.hairstyle.id)}>
                                Delete
                            </button>
                            </>
                            : null
                    }
                </div>
            </div>
            </section>
        );
    }
}

export default HairStyleCard;