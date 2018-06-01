import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/App.css";
import Header from "./header";
import Footer from "./footer";
import Write from "./write";
import Home from "./home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Route path="/" component={Home} exact />
            <Route path="/write" component={Write} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
