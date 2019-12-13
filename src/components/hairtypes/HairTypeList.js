//  PURPOSE: Initiate the AnimalManager getAll() call, hold on to the returned data, and then render the <AnimalCard /> component for each animal. When the data is returned, we can hold on to it by placing it in the component's state.


import React, { Component } from 'react'
//import the components we will need
import HairTypeCard from './HairTypeCard'
import ApiManager from '../../modules/ApiManager'

class HairTypeList extends Component {
  //define what this component needs to render
  state = {
    hairtypes: [],
  }

  componentDidMount() {
    console.log("HAIRTYPE LIST: ComponentDidMount");
    //getAll from ApiManager and hang on to that data; put it in state
    ApiManager.getAll('hairtypes')  //If using this with generic fetch call, plug in parameter like this = ApiManager.getAll('animals')
      .then((hairtypesArray) => {
        this.setState({
          hairtypes: hairtypesArray
        })
      })
  }

  render() {
    console.log("HairTypesList: Render");

    return (
      <React.Fragment>
        <div className="container-cards">
          {this.state.hairtypes.map(hairtype =>
            <HairTypeCard
              key={hairtype.id}
              hairtype={hairtype}
              {...this.props}
            />
          )}
        </div>
      </React.Fragment>
    )
  }
}

export default HairTypeList