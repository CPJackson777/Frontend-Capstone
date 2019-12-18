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
                if (this.state.hairtypeId === "") {
                    window.alert("What hair type is this style for?")
                } else {
                    this.setState({ loadingStatus: true })
                    const hairstyle = {
                        styleName: this.state.styleName,
                        instructions: this.state.instructions,
                        imgUrl: this.state.imgUrl,
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

// Uploading images to Cloudinary: https://cloudinary.com/blog/how_to_build_an_image_library_with_react_cloudinary#uploading_images

//I wrote this as a fat arrow function because I wanted to use this.state()
uploadWidget = () => {
    window.cloudinary.openUploadWidget({ cloud_name: 'chollyp7', upload_preset: 'YOUR_UPLOAD_PRESET_NAME', tags:['atag']},
        (error, result) => {
            // See what cloudinary returns
            console.log(result);
  
            // Building the entire URL for the uploaded image using the data cloudinary returns
            console.log("https://res.cloudinary.com/dveixyqzy/image/upload/v1576090193/" + result[0].public_id)
  
            // Just like other input forms, changing state so that the imageUrl property will contain the URL of the uploaded image
            this.setState({imageUrl: `https://res.cloudinary.com/dveixyqzy/image/upload/v1576090193/${result[0].public_id}`})
        });
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

                            <label htmlFor="image">Picture of Finished Style:</label>
                            <img className="uploadImage" src={this.state.imageUrl} alt="showing hair style" />
                            <button onClick={this.uploadWidget.bind(this)} className="upload-button">
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