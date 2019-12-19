import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// NAVIGATION
import Nav from "./Components/Nav";
// PAGES
import SignIn from "./Pages/SignIn";
import Foundation from "./Pages/Foundation";
import Eyes from "./Pages/Eyes";
import Lips from "./Pages/Lips";
import Blush from "./Pages/Blush";
import Bronzer from "./Pages/Bronzer";
import Brows from "./Pages/Brows";

import "./index.css";

const App = () => (
    <div>
        <Nav />
        <div className="container">
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/Foundation" component={Foundation} />
            <Route exact path="/Eyes" component={Eyes} />
            <Route exaxt path="/Lips" component={Lips} />
            <Route exact path="/Blush" component={Blush} />
            <Route exact path="/Bronzer" component={Bronzer} />
            <Route exact path="/Brows" component={Brows} />
        </div>
    </div>
);

render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
