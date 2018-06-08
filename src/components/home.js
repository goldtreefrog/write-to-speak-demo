import React from "react";
import "./styles/home.css";

class Home extends React.Component {
  render() {
    return (
      <section id="landing">
        <h2>Home</h2>
        <form action="">
          <h3>Write and hear it read back to you.</h3>
          <p>Anyone can do it - even if you are just learning to spell!</p>
          <p>
            Not writing yet? You can still click words and phrases to make them talk, but you will need someone to help put your words on the screen
            in the first place.
          </p>
          <p>
            If you are registered, you can save your text for reading aloud later. (But note that this is a demo and all data will be erased from
            time to time.)
          </p>
          <button type="submit" name="signin" id="signin">
            Sign In/Register
          </button>
          <button type="submit" name="guest" id="guest">
            Sign In as Anonymous Guest
          </button>
        </form>
      </section>
    );
  }
}
export default Home;
