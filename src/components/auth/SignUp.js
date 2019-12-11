import React, { Component } from 'react';

class SignUp extends Component {
    // Set initial state to empty strings. The object keys must match the user keys in the json file
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    //*********************************************************
    // Update state whenever an input field is edited
    //******************************************************** 
    handleSignUpInputChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)

    //**********************************************************
    //  Sign Up Form JSX
    //********************************************************** 
        render() {
            return (
                <>
                    <form>
                        <fieldset>
                            <h3>Sign Up</h3>
                            <div className="signUpForm">

                                <label htmlFor="firstNameInput">First Name: </label>
                                <input onChange={this.handleSignUpInputChange} type="name"
                                    id="firstname"
                                    placeholder="First Name"
                                    required="" />

                                <label htmlFor="lastNameInput">Last Name: </label>
                                <input onChange={this.handleSignUpInputChange} type="name"
                                    id="lastname"
                                    placeholder="Last Name"
                                    required="" />

                                <label htmlFor="emailInput">Email address: </label>
                                <input onChange={this.handleSignUpInputChange} type="email"
                                    id="email"
                                    placeholder="Email address"
                                    required="" />

                                <label htmlFor="inputPassword">Password: </label>
                                <input onChange={this.handleSignUpInputChange} type="password"
                                    id="password"
                                    placeholder="Password"
                                    required="" />

                                <label htmlFor="inputPassword">Confirm Password</label>
                                <input onChange={this.handleSignUpInputChange} type="password"
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                    required="" />

                            </div>
                            <button onClick={this.createNewUser} type="submit">
                                Submit
                        </button>
                        </fieldset>
                    </form>
                </>

            );
        }
    }

    export default SignUp;