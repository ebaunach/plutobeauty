import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseconfig from './firebaseDB';
import './SignInUp.css';

const firebaseApp = firebase.initializeApp(firebaseconfig);

class SignInUp extends Component{
    render() {
    const {
      user,
      signOut,
      signInWithMailPass,
    } = this.props;

        return(
            <div className="welcome">
                <h1>Welcome to Pluto Beauty </h1>
                <h2>Your one stop shop for reviewing makeup products!</h2>
                <h3>Sign in or sign up below to start reviewing!</h3>

                /**TO DO - use firebase **/
                <div className="signIn">
                  {
                    user 
                    ? <p>Hello, {user.displayName}</p>
                    : <p>Please sign in.</p>
                  }
                  {
                    user
                    ? <button onClick={signOut}>Sign out</button>
                    : <button onClick={signInWithMailPass}>Sign in with Your Email</button>
                  </div>

                /**TO DO - link to sign up page if they dont have account **/
                <div className="signUp">
                    <p>TO DO</p>
                </div>
            </div>
        )
    }
}
export default SignIn;
