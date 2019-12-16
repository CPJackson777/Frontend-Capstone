import React, { Component } from 'react'
//import the components we will need
import HairStyleCard from './HairStyleCard'
import ApiManager from '../../modules/ApiManager'

class HairStyleList extends Component {
  //define what this component needs to render
  state = {
    hairstyles: [],
  }

  componentDidMount() {
    //getAll from ApiManager and hang on to that data; put it in state
    ApiManager.getAll('hairstyles')
      .then((hairstylesArray) => {
        this.setState({
          hairstyles: hairstylesArray
        })
      })
  }

  deleteHairStyle = id => {
    ApiManager.delete(id)
      .then(() => {
        ApiManager.getAll()
          .then((newHairStyles) => {
            this.setState({
              hairstyles: newHairStyles
            })
          })
      })
  }

  render() {
    console.log("HairStyleList: Render");
    console.log(this.state.hairstyles)

    return (
      <React.Fragment>
        <section className="section-content">
          <button type="button"
            className="btn"
            onClick={() => { this.props.history.push("/hairstyles/new") }}>
            Add Hair Style
          </button>
        </section>
        <div className="container-cards">
          {this.state.hairstyles.map(hairstyle =>
            <HairStyleCard
              key={hairstyle.id}
              hairstyle={hairstyle}
              deleteHairStyle={this.deleteHairStyle}
              {...this.props}
            />
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default HairStyleList