import React, { Component } from 'react';
import ApiManager from '../../modules/ApiManager'
import './hairstyleform.css'

class HairStyleForm extends Component {
    state = {
        styleName: "",
        imgUrl: "",
        instructions: "",
        videoUrl: "",
        hairtypeId: "",
        loadingStatus: false,
        hairtypes: []

    }

    inputFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange)
    }

    componentDidMount() {
        //getAll from ApiManager and hang on to that data; put it in state
        ApiManager.getAll('hairtypes')
            .then((hairtypesArray) => {
                this.setState({
                    hairtypes: hairtypesArray
                })
            })
    }

    addNewHairStyle = event => {
        event.preventDefault();
        if (this.state.styleName === "") {
            window.alert("Let us know what you call this style.")
        } else {
            if (this.state.instructions === "") {
                window.alert("Please provide brief instructions to guy'd us through how you did this hairstyle.")
            } else {
                // if (this.state.hairtypeId === "") {
                //     window.alert("What hair type is this style for?")
                // } else {
                this.setState({ loadingStatus: true })
                const hairstyle = {
                    styleName: this.state.styleName,
                    instructions: this.state.instructions,
                    imgUrl: this.state.imgUrl,
                    videoUrl: this.state.videoUrl,
                    hairtypeId: parseInt(this.state.hairtypeId),
                    userId: Number(localStorage.getItem("activeUser"))
                };

                ApiManager.post(hairstyle)
                    .then(() => this.props.history.push(`/hairstyles/${parseInt(this.state.hairtypeId)}`));
            }
        }
    }




    render() {
        return (
            <>
            <div className="container">
                <form>
                    <fieldset>

                        <div className="field">
                            <label className="label">Hair Style Name:</label>
                            <div className="control">
                                <input
                                    className="input is-link"
                                    type="text"
                                    id="styleName"
                                    required
                                    onChange={this.inputFieldChange}
                                    placeholder="Hair Style Name"
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Picture of Finished Style:</label>
                            <div className="control">
                                <input
                                    className="input is-link"
                                    type="text"
                                    id="imgUrl"
                                    required
                                    onChange={this.inputFieldChange}
                                    placeholder="Place image link here"
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Instructions:</label>
                            <div className="control">
                                <textarea
                                    className="textarea is-link"
                                    id="instructions"
                                    required
                                    onChange={this.inputFieldChange}
                                    cols="40"
                                    rows="5"
                                    placeholder="Guyd other dads on how to create this style."
                                >
                                </textarea>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Video Guyd:</label>
                            <div className="control">
                                <input
                                className="input is-link"
                                    type="text"
                                    id="videoUrl"
                                    required
                                    onChange={this.inputFieldChange}
                                    placeholder="Place video link here"
                                /> 
                                 </div>
                        </div>

                        <div className="field">
                            <label className="label">Hair Type:</label>
                            <div className="control">
                            <div className="select is-link">
                                <select
                                    id="hairtypeId"
                                    
                                    value={this.state.hairtypeId}
                                    onChange={this.inputFieldChange}
                                >
                                    <option value="">Select an Option</option>
                                    {this.state.hairtypes.map(hairtype =>
                                        <option id={hairtype.id} key={hairtype.id} value={hairtype.id}>
                                            {hairtype.title}
                                        </option>
                                    )}
                                </select>
                                 </div>
                                 </div>
                        </div>

                            
                            <div className="alignRight">
                                <button
                                className="button is-link"
                                    type="button"
                                    disabled={this.state.loadingStatus}
                                    onClick={this.addNewHairStyle}
                                >Submit</button>
                            </div>
                    </fieldset>
                </form>
                </div>
            </>

                );
            }
        }
        
        
        
export default HairStyleForm;