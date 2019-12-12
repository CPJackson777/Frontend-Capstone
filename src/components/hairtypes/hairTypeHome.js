import React, { Component } from 'react'
import { Link } from "react-router-dom";

class HairTypeHome extends Component {
    render() {
        return (
            <>
            <div id="homeBackground" >
            </div>
            <div>
                <h1 id="welcomeHomePageHeader">Choose Your Daughter's Hair Type</h1>
            </div>
            <div>
                <button>Straight</button>
                <button>Wavy</button>
                <button>Curly</button>
                <button>Coily</button>
            {/* <img id="Img" src="img.jpg" onclick="myFunction()" />
            <img id="Img" src="img.jpg" onclick="myFunction()" />
            <img id="Img" src="img.jpg" onclick="myFunction()" />
            <img id="Img" src="img.jpg" onclick="myFunction()" /> */}
            </div>
            </>
        )
    }
}

export default HairTypeHome