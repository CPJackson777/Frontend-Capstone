import React, { Component } from 'react'
//import the components we will need
import HairStyleCard from './HairStyleCard'
import ApiManager from '../../modules/ApiManager'

class HairStyleList extends Component {
  //define what this component needs to render
  state = {
    hairstyles: [],
    hairtypeId: ""
  }

  componentDidMount() {
    console.log("cdm running")
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
     console.log("different hairstyle)")
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
        ApiManager.getAll()
          .then((newHairStyles) => {
            this.setState({
              hairstyles: newHairStyles
            })
          })
      })
  }

  render() {
      console.log(this.state)
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
                    {this.state.hairstyles.length === 0
                        ?
                        null
                        :
                        <>
                        <div>render correct please</div>
                            {this.state.hairstyles.map(hairstyle => 
                                <HairStyleCard
                                    key={hairstyle.id}
                                    hairstyle={hairstyle.hairstyle}
                                    deleteHairStyle={this.deleteHairStyle}
                                    {...this.props}
                                />
                             )}
                        </>
}
        </div>
      </React.Fragment>
    )
  }
}

export default HairStyleList