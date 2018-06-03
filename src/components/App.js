import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import Header from "./header";
import Footer from "./footer";
import Write from "./write";
import Home from "./home";
import NotFound from "./not-found";

const routes = (
  <Router>
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/write" component={Write} exact />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  </Router>
);

class App extends Component {
  render() {
    return routes;
  }
}

export default App;
