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
            hairtypeId: Number(this.state.hairtypeId),
            userId: Number(localStorage.getItem("activeUser"))            

        };

        ApiManager.update(editedHairStyle)
            .then(() => this.props.history.push(`/hairstyles/${(this.state.hairtypeId)}`))
    }

    componentDidMount() {
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

        ApiManager.getAll("hairstyles")
            .then(hairstyles => this.setState({ hairstyles: hairstyles }))
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
                            />

                            {/* <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="breed"
                                value={this.state.breed}
                            />
                            <label htmlFor="breed">Breed</label>

                            <select
                                className="form-control"
                                id="hairtypeId"
                                value={this.state.hairtypeId}
                                onChange={this.handleFieldChange}
                            >
                                {this.state.hairtypes.map(hairtype =>
                                    <option key={hairtype.id} value={hairtype.id}>
                                        {hairtype.title}
                                    </option>
                                )}
                            </select> */}
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