import React, { Component } from 'react';
import ApiManager from '../../modules/ApiManager'

class Login extends Component {

    //***********************************
    // Set initial state to empty strings
    //***********************************
    state = {
        email: "",
        password: "",
    }

    //***********************************************
    // Update state whenever an input field is edited
    //***********************************************
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    handleLoginSubmit = e => {
        e.preventDefault()
        ApiManager.checkUser(this.state.email, this.state.password)
            .then(results => {
                if (results.length > 0) {
                    this.props.setUser(results)
                    this.props.history.push("/hairtypes");
                } else {
                    alert("Hey man...looks like you need to correct your email or password")
                }
            })
    }

    //*************************************************************************************************** 
    //  JSX for Login Form and instructs computer to take user to hairtypes when submit button is clicked
    //***************************************************************************************************
    render() {
        return (
            <div className="login-form">
                <form>
                    <div>
                        <fieldset>
                            <h3>User Login</h3>
                            <div className="formgrid">
                                <label htmlFor="emailInput">Email: </label>
                                <input onChange={this.handleFieldChange} type="email"
                                    id="email"
                                    placeholder="Email address"
                                    required="" autoFocus="" />

                                <label htmlFor="passwordInput">Password: </label>
                                <input onChange={this.handleFieldChange} type="password"
                                    id="password"
                                    placeholder="Password"
                                    required="" />
                            </div>
                            <button onClick={this.handleLoginSubmit} type="submit">
                                Enter
                            </button>
                        </fieldset>
                    </div>
                </form>
            </div>
        )
    }


}

export default Login;