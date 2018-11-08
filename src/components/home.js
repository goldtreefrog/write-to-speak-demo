import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Feedback from "./feedback";
import SayIt from "./say-it";
import "./styles/home.css";

class Home extends React.Component {
  render() {
    let loginLinks;
    if (this.props.loggedIn) {
      loginLinks = "[Currently logged in.]";
    } else {
      loginLinks = (
        <div>
          <Link to="/register" className="button-link" role="button">
            Register
          </Link>
          <div>
            Already registered? <Link to="/login">Login</Link>
          </div>
        </div>
      );
    }

    return (
      <section id="landing">
        <h2>Home</h2>
        <Feedback />
        <form action="">
          <h3>Write and hear it read back to you.</h3>
          <p>Anyone can do it - even if you are just learning to spell!</p>
          <p>
            Not writing yet? You can still click words and phrases to make them
            talk, but only after someone helps you enter your words.
          </p>
          <p>
            If you register, you can (theoretically) save your text to be read
            aloud next time you sign in. <strong>However</strong>, this is only
            a demo and all data will be erased periodically.
          </p>
          {loginLinks}
        </form>
        <SayIt />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null
  };
};

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(Home);
