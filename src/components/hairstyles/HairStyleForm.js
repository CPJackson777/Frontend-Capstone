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
                    const hairstlye = {
                        styleName: this.state.styleName,
                        instructions: this.state.instructions,
                        img: this.state.img,
                        videoUrl: this.state.videoUrl,
                        hairtypeId: this.state.hairtypeId,
                        userId: Number(localStorage.getItem("activeUser"))
                    };

                    ApiManager.post(hairstyle)
                        .then(() => this.props.history.push("/animals"));
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
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="animalName"
                                placeholder="Animal name"
                            />
                            <label htmlFor="animalName">Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="breed"
                                placeholder="Breed"
                            />
                            <label htmlFor="breed">Breed</label>
                            <label htmlFor="image">Image</label>

                            {/* This image tag will contain the uploaded image because we are using the imageUrl property in state which we change when the image is uploaded*/}
                            <img className="uploadImage" src={this.state.imageUrl} alt="" />
                            <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                                Add Image
                </button>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewAnimal}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>

        );
    }
}

export default HairStyleForm;