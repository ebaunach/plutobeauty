import * as firebase from 'firebase';

/**
 * Made this because Firebase had a critical error due the config was being called multiple times
 * check array length of Firebase apps length.
 * -> If there are no apps, the length will be zero & can initialise  app,
 *  -> otherwise export Firebase app instance.
 *
 */

const firebaseConfig = {
    apiKey: "AIzaSyDp61_EFLlrABIxTtdAYODk5jqWYkCt9Qw",
    authDomain: "pluto-beauty.firebaseapp.com",
    databaseURL: "https://pluto-beauty.firebaseio.com",
    projectId: "pluto-beauty",
    storageBucket: "pluto-beauty.appspot.com",
    messagingSenderId: "718258830394",
    appId: "1:718258830394:web:9e0084cc5e2aa557b4c903",
    measurementId: "G-XCT0LY3WS8"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();