import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseconfig from './firebaseDB';
//import './SignIn.css';

const firebaseApp = firebase.initializeApp(firebaseconfig);

class SignIn extends Component{
    render() {
        const {
            user,
            signOut,
            signInWithMailPass,
        } = this.props;
        return(
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
                }
            </div>

        )
    }
}
export default SignIn;