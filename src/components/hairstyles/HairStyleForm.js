import React, { Component } from 'react';
import ApiManager from '../../modules/ApiManager'

class HairStyleForm extends Component {
    state = {
        styleName: "",
        imgUrl: "",
        instructions: "",
        videoUrl: "",
        hairtypeId: "",
        loadingStatus: false
    }

    inputFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange)
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
                        // hairtypeId: this.state.hairtypeId,
                        // userId: Number(localStorage.getItem("activeUser"))
                    };

                    ApiManager.post(hairstyle)
                        .then(() => this.props.history.push("/hairstyles"));
                }
            }
        }
    


    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="styleName">Hair Style Name: </label>
                            <input
                                type="text"
                                id="styleName"
                                required
                                onChange={this.inputFieldChange}
                                placeholder="Hair Style Name"
                            /> <br></br><br></br>

                            <label htmlFor="image">Picture of Finished Style: </label>
                            <input
                                type="text"
                                id="imgUrl"
                                required
                                onChange={this.inputFieldChange}
                                placeholder="Place image link here"
                            /> <br></br><br></br>

                            <label htmlFor="instructions">Instructions: </label>
                            <textarea
                                id="instructions"
                                required
                                onChange={this.inputFieldChange}
                                cols="40"
                                rows="5"
                                placeholder="Guyd other dads on how to create this style."
                            >
                            </textarea> <br></br><br></br>

                            <label htmlFor="videoUrl">Video Guyd:</label>
                            <input
                                type="text"
                                id="videoUrl"
                                required
                                onChange={this.inputFieldChange}
                                placeholder="Place video link here"
                            /> <br></br><br></br>

                            <label htmlFor="hairtype-dropdown">Hair Type: </label>
                            <select id="hairtypeId">
                                <option value="volvo">Straight</option>
                                <option value="saab">Wavy</option>
                                <option value="opel">Curly</option>
                                <option value="audi">Coily</option>
                            </select>

                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.addNewHairStyle}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>

        );
    }
}



export default HairStyleForm;