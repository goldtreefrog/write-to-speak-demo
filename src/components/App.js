import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "normalize.css";
import "./styles/App.css";
import Header from "./header";
import Footer from "./footer";
import Write from "./write";
import Home from "./home";
import Talk from "./talk";
import Edit from "./edit";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import NotFound from "./not-found";

const routes = (
  <Router>
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/write" component={Write} exact />
          <Route path="/talk" component={Talk} exact />
          <Route path="/edit" component={Edit} exact />
          <Route path="/login" component={LoginForm} exact />
          <Route path="/register" component={RegisterForm} exact />
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

const mapStateToProps = state => {
  return {
    snippets: state.snippets,
    writingArea: state.writingArea,
    spellingArea: state.spellingArea
  };
};

export default connect(mapStateToProps)(App);
