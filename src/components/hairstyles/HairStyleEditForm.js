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
        // console.log(this.state)
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

                        <div className="field">
                            <label className="label">Hair Style Name:</label>
                            <div className="control">
                                <input
                                    className="input is-link"
                                    type="text"
                                    required
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    id="styleName"
                                    value={this.state.styleName}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Picture of Finished Style:</label>
                            <div className="control">
                                <input
                                    className="input is-link"
                                    type="text"
                                    required
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    id="imgUrl"
                                    value={this.state.imgUrl}
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
                                    onChange={this.handleFieldChange}
                                    cols="40"
                                    rows="5"
                                    placeholder="Guyd other dads on how to create this style."
                                    value={this.state.instructions}
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
                                    onChange={this.handleFieldChange}
                                    placeholder="Place video link here"
                                    value={this.state.videoUrl}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Hair Type:</label>
                            <div className="control">
                                <div className="select is-link">
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
                            </div>


                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingHairStyle}
                                className="button is-link"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default HairStyleEditForm