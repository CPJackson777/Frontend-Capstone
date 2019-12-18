import React, { Component } from 'react';
import ApiManager from '../../modules/ApiManager'

class HairStyleForm extends Component {
    state = {
        styleName: "",
        img: "",
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
                if (this.state.hairtypeId === "") {
                    window.alert("What hair type is this style for?")
                } else {
                    this.setState({ loadingStatus: true })
                    const hairstyle = {
                        styleName: this.state.styleName,
                        instructions: this.state.instructions,
                        img: this.state.img,
                        videoUrl: this.state.videoUrl,
                        hairtypeId: this.state.hairtypeId,
                        userId: Number(localStorage.getItem("activeUser"))
                    };

                    ApiManager.post(hairstyle)
                        .then(() => this.props.history.push("/hairstyles"));
                }
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
                                onChange={this.handleFieldChange}
                                placeholder="Hair Style Name"
                            />
                            <label htmlFor="breed">Instructions: </label>
                            <textarea
                                id="instructions"
                                required
                                onChange={this.handleFieldChange}
                                cols="40"
                                rows="5"
                                placeholder="Guyd other dads on how to create this style."
                            >
                            </textarea>

                            <label htmlFor="image">Image</label>

                            <img className="uploadImage" src={this.state.imageUrl} alt="" />
                            <button>
                                Add Image
                </button>
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