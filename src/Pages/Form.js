import React, { Component } from 'react';
import { FormErrors } from '../Components/FormErrors';
import '../Components/Form.css';

//This is the SignIn form available @ the homescreen
class Form extends Component {

    //constructor to hold initial states
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    //handle user Inpput
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    //Validation - make sure the appropriate fields are valid (email, password)
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            default:
                break;
        }
        //set the states with the validation
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    //Have errors pop up if validation fails
    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    //Render the sign up form - with placeholders for before the user types anything
    //Add a button to confirm the user's actions (signup)
    render () {
        return (
            <form className="theForm">
                <h1>Welcome to your one stop shop for make up reviews!</h1>
                <br />
                <h2>If you're new here why not SIGN UP</h2>
                <br />
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                    <label htmlFor="email">Email address</label>
                    <input type="email" required className="form-control" name="email"
                           placeholder="Email"
                           value={this.state.email}
                           onChange={this.handleUserInput}  />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password"
                           placeholder="Password"
                           value={this.state.password}
                           onChange={this.handleUserInput}  />
                </div>
                <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>
            </form>
        )
    }
}

export default Form;