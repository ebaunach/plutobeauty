import app from 'firebase/app';
import 'firebase/auth';

const firebaseconfig =
    {
        apiKey: "AIzaSyDp61_EFLlrABIxTtdAYODk5jqWYkCt9Qw",
        authDomain: "pluto-beauty.firebaseapp.com",
        databaseURL: "https://pluto-beauty.firebaseio.com",
        projectId: "pluto-beauty",
        storageBucket: "pluto-beauty.appspot.com",
        messagingSenderId: "718258830394",
        appId: "1:718258830394:web:9e0084cc5e2aa557b4c903",
        measurementId: "G-XCT0LY3WS8"
    };

class FirebaseDB {
    constructor() {
        app.initializeApp(firebaseconfig);
        this.auth = app.auth();
    }
    // *** Auth API ***
    createUserWithMailPass = (email, password) =>
        this.auth.createUserWithMailPass(email, password);
    signInWithMailPass = (email, password) =>
        this.auth.signInWithMailPass(email, password);
    signOut = () => this.auth.signOut();
    passwordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}
export default FirebaseDB;