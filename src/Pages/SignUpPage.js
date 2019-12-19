import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUp />
  </div>
);
class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  onSubmit = event => {
  }
  onChange = event => {
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
      </form>
    );
  }
}
//const SignUpLink = () => (
  //<p>
    //Don't have an account? link will be used on the sign in page (login page) later if a user has no account. redirect to the sign up page, but not used on the sign up page itself 
  <///p>
);
export default SignUpPage;
export { SignUp, SignUpLink };
