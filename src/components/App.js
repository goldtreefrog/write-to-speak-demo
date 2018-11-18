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
import LoginPage from "./login-page";
import RegisterForm from "./register-form";
import { refreshAuthToken } from "./../store/actions/auth.js";
import NotFound from "./not-found";

// Use named export for unconnected component (for tests)
export class App extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="App">
            <Header />
            <main>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route
                  exact
                  path="/write"
                  render={() =>
                    this.props.writing.isEditing &&
                    !this.props.writing.editingPage === "/write" ? (
                      <Redirect to={this.props.writing.editingPage} />
                    ) : (
                      <Write />
                    )
                  }
                />
                <Route path="/talk" component={Talk} exact />
                <Route
                  exact
                  path="/edit"
                  render={() =>
                    this.props.writing.isEditing &&
                    !this.props.writing.editingPage === "/edit" ? (
                      <Redirect to={this.props.writing.editingPage} />
                    ) : (
                      <Edit />
                    )
                  }
                />
                <Route path="/login" component={LoginPage} exact />
                <Route path="/register" component={RegisterForm} exact />
                <Route path="/logout" component={Home} exact />
                <Route component={NotFound} />
              </Switch>
            </main>
          </div>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    snippets: state.snippets,
    writing: state.writing,
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
  };
};

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(App);
