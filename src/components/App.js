import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
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

// Use named export for unconnected component (for tests)
export class App extends Component {
  render() {
    console.log(this.props.writing);
    // return routes;
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route
                exact
                path="/write"
                render={() => (this.props.writing.isEditing ? <Redirect to={this.props.writing.editingPage} /> : <Write />)}
              />
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
  }
}

const mapStateToProps = state => {
  return {
    snippets: state.snippets,
    writing: state.writing,
    spellingArea: state.spellingArea
  };
};

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(App);
