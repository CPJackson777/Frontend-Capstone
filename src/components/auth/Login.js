import React, { Component } from 'react';
import ApiManager from '../../modules/ApiManager'
import './login.css'

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
            <div className="container">
                <form>
                    <div>
                        <fieldset>
                            <h3>User Login</h3>

                            <div>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input is-dark" onChange={this.handleFieldChange} type="email"
                                            id="email"
                                            placeholder="Email address"
                                            required="" autoFocus="" />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                        {/* <span className="icon is-small is-right">
                                            <i className="fas fa-exclamation-triangle"></i>
                                        </span> */}
                                    </div>
                                    <br></br>
                                    <div className="field">
                                        <p className="control has-icons-left">
                                            <input className="input is-dark" onChange={this.handleFieldChange} type="password"
                                                id="password"
                                                placeholder="Password"
                                                required="" />
                                            <span className="icon is-small is-left">
                                                <i className="fas fa-lock"></i>
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <button className="button is-info" onClick={this.handleLoginSubmit} type="submit">
                                    Enter
                            </button>
                            </div>
                        </fieldset>
                                </div>
                </form >
            
            </div>
                )
            }
        
        
        }
        
export default Login;