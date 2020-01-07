//  PURPOSE: Initiate the AnimalManager getAll() call, hold on to the returned data, and then render the <AnimalCard /> component for each animal. When the data is returned, we can hold on to it by placing it in the component's state.

import React, { Component } from 'react'
//import the components we will need
import HairTypeCard from './HairTypeCard'
import ApiManager from '../../modules/ApiManager'
import "./HairTypes.css"


class HairTypeList extends Component {
  //define what this component needs to render
  state = {
    hairtypes: [],
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

  render() {
    return (
      <React.Fragment>
           <div id="homeBackground" >
            </div>
            <section className="section">
                <h1 id="welcomeHomePageHeader">Choose Your Daughter's Hair Type</h1>
            </section>
            
            <div className="container">
        <div className="container-cards">
          {this.state.hairtypes.map(hairtype =>
            <HairTypeCard
              key={hairtype.id}
              hairtype={hairtype}
              {...this.props}
            />
          )}
        </div>
        </div>
      </React.Fragment>
    )
  }
}

export default HairTypeList