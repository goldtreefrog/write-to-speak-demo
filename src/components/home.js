import React from "react";
import { Link } from "react-router-dom";
import Feedback from "./feedback";
import "./styles/home.css";

class Home extends React.Component {
  render() {
    return (
      <section id="landing">
        <h2>Home</h2>
        <Feedback />
        <form action="">
          <h3>Write and hear it read back to you.</h3>
          <p>Anyone can do it - even if you are just learning to spell!</p>
          <p>Not writing yet? You can still click words and phrases to make them talk, but only after someone helps you enter your words.</p>
          <p>
            If you register, you can (theoretically) save your text to be read aloud next time you sign in. <strong>However</strong>, this is only a
            demo and all data will be erased periodically.
          </p>
          <Link to="/register" className="button-link" role="button">
            Sign In/Register
          </Link>
          <Link to="/write" className="button-link" role="button">
            Enter as Guest
          </Link>
        </form>
      </section>
    );
  }
}
export default Home;
