import React, { Component } from 'react';
import ApiManager from '../../modules/ApiManager'

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
                        .then(() => this.props.history.push("/hairstyles"));
                }
            }
        }
    



    render() {
        console.log(this.state)
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
                            <select id="hairtypeId"
                                className="form-control"
                                    value={this.state.hairtypeId}
                                onChange={this.inputFieldChange}
                                >
                                {this.state.hairtypes.map(hairtype =>
                                    <option id={hairtype.id} key={hairtype.id} value={hairtype.id}>
                                        {hairtype.title}
                                    </option>
                                )}
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