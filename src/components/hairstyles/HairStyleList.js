import React, { Component } from 'react'
import HairStyleCard from './HairStyleCard'
import ApiManager from '../../modules/ApiManager'
import './hairstylelist.css'

class HairStyleList extends Component {
  //define what this component needs to render
  state = {
    hairstyles: [],
  }

  componentDidMount() {
    
    ApiManager.getAllHairStylesForOneHairType(this.props.match.params.hairtypeId)
      .then((hairstylesArray) => {
        this.setState({
          hairstyles: hairstylesArray,
          hairtypeId: this.props.match.params.hairtypeId
        })
      })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.hairtypeId !== this.props.hairtypeId) {
      ApiManager.getAllHairStylesForOneHairType(this.props.match.params.hairtypeId)
        .then((hairstylesArray) => {
          this.setState({
            hairstyles: hairstylesArray,
            hairtypeId: this.props.match.params.hairtypeId
          })
        })
    }
  }

  deleteHairStyle = id => {
    ApiManager.delete(id)
      .then(() => {
        ApiManager.getAllHairStylesForOneHairType(this.props.match.params.hairtypeId)
          .then((newHairStyles) => {
            this.setState({
              hairstyles: newHairStyles
            })
          })
      })
  }

  render() {
    return (
      <React.Fragment>
        <section className="section-content">
          <div className="container">
          <button type="button"
            className="button is-link is-medium is-fullwidth" 
            onClick={() => { this.props.history.push("/hairstyles/new") }}>
            Add Hair Style
          </button>
          </div>
        </section>
        <div className="list-container-cards">
          {this.state.hairstyles.map(hairstyle =>
            <HairStyleCard
              key={hairstyle.id}
              hairstyle={hairstyle}
              deleteHairStyle={this.deleteHairStyle}
              {...this.props}
            />
          )}
        </div>
      </React.Fragment > 
    )
  }
}

export default HairStyleList