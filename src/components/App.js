import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "normalize.css";
import "./styles/App.css";
import Header from "./header";
import Footer from "./footer";
import Write from "./write";
import Home from "./home";
import Talk from "./talk";
import Edit from "./edit";
import LoginOrRegister from "./login-or-register";
import NotFound from "./not-found";
import store from "./../store.js";

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
          <Provider store={store}>
            <Route path="/login" component={LoginOrRegister} exact />
          </Provider>
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
