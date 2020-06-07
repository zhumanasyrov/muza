import React from "react";
import Navbar from "./components/header/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./screens/dashboard/Dashboard";
import Portfolio from "./screens/portfolio/Portfolio.js";
import Contact from "./screens/contact/Contact";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
