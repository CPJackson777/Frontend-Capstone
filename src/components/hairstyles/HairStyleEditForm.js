import React, { Component } from "react"
import ApiManager from "../../modules/ApiManager"
// import "./HairEditForm.css"


class HairStyleEditForm extends Component {
    //set the initial state
    state = {
        styleName: "",
        imgUrl: "",
        instructions: "",
        videoUrl: "",
        hairtypeId: "",
        hairtypes: [],
        loadingStatus: true
    };

    handleFieldChange = event => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    updateExistingHairStyle = event => {
        event.preventDefault()
        this.setState({ loadingStatus: true });
        const editedHairStyle = {
            id: this.props.match.params.hairstyleId,
            styleName: this.state.styleName,
            imgUrl: this.state.imgUrl,
            instructions: this.state.instructions,
            videoUrl: this.state.videoUrl,
            hairtypeId: parseInt(this.state.hairtypeId),
            userId: Number(localStorage.getItem("activeUser"))

        };

        ApiManager.update(editedHairStyle)
            .then(() => this.props.history.push(`/hairstyles/${parseInt(this.state.hairtypeId)}`))
    }

    componentDidMount() {
        console.log(this.state)
        ApiManager.get("hairstyles", this.props.match.params.hairstyleId)
            .then(hairstyle => {
                // debugger
                this.setState({
                    styleName: hairstyle.styleName,
                    imgUrl: hairstyle.imgUrl,
                    instructions: hairstyle.instructions,
                    videoUrl: hairstyle.videoUrl,
                    hairtypeId: hairstyle.hairtypeId,
                    loadingStatus: false,
                });
            });

    //     ApiManager.getAll("hairstyles")
    //         .then(hairtypes => {
    //             console.log('hairtypes', hairtypes)
    //             this.setState({ hairtypes: hairtypes })})
    // }
    // componentDidMount() {
        //getAll from ApiManager and hang on to that data; put it in state
        ApiManager.getAll('hairtypes')
            .then((hairtypesArray) => {
                this.setState({
                    hairtypes: hairtypesArray
                })
            })
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
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="styleName"
                                value={this.state.styleName}
                            /> <br></br><br></br>

                            <label htmlFor="image">Picture of Finished Style: </label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="imgUrl"
                                value={this.state.imgUrl}
                            /> <br></br><br></br>

                            <label htmlFor="instructions">Instructions: </label>
                            <textarea
                                
                                id="instructions"
                                required
                                onChange={this.handleFieldChange}
                                cols="40"
                                rows="5"
                                placeholder="Guyd other dads on how to create this style."
                                value={this.state.instructions}
                            >
                            </textarea> <br></br><br></br>

                            <label htmlFor="videoUrl">Video Guyd: </label>
                            <input
                                type="text"
                                id="videoUrl"
                                required
                                onChange={this.handleFieldChange}
                                placeholder="Place video link here"
                                value={this.state.videoUrl}
                            /> 
                            <br></br><br></br>

                            <label htmlFor="hairtype-dropdown">Hair Type: </label>
                            <select
                                id="hairtypeId"
                                className="form-control"
                                value={this.state.hairtypeId}
                                onChange={this.handleFieldChange}
                            >
                                <option>Select an Option</option>
                                {this.state.hairtypes.map(hairtype =>
                                    <option id={hairtype.id} key={hairtype.id} value={hairtype.id}>
                                        {hairtype.title}
                                    </option>
                                )}
                            </select>

                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingHairStyle}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default HairStyleEditForm