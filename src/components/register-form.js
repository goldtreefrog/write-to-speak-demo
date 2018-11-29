import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Input from "./input";
import { giveFeedback, setWhatToSay } from "./../store/actions";
import { required, nonEmpty, matches, length } from "../validators";
import { registerUser } from "./../store/actions/users.js";
import { loginUser } from "./../store/actions/auth.js";
import "./styles/register-form.css";

const passwordLength = length({ min: 6, max: 72 });
const matchesPassword = matches("password");

export class RegisterForm extends React.Component {
  componentDidMount = () => {
    document.title = "Register | Write to Speak Demo";
    window.scrollTo(0, 0);
  };
  onSubmit(values) {
    const { email, password, firstName, lastName } = values;
    const user = { email, password, firstName, lastName };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(loginUser(email, password)))
      .then(() => {
        localStorage.setItem("showFeedbackFlag", "t");
        let whatSay =
          "You have registered. Write in the box below, then click a button.";
        this.props.dispatch(giveFeedback({ feedback: whatSay }));
        this.props.dispatch(
          setWhatToSay({ whatToSay: whatSay, useVoice: "UK English Female" })
        );
      });
  }
  // If or once user is logged in, redirect to the "Write" page.
  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/write" />;
    }

    return (
      <form
        className="login"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <h2>Register</h2>

        <Field
          name="firstName"
          component={Input}
          type="text"
          label="First Name "
        />

        <Field
          name="lastName"
          component={Input}
          type="text"
          label="Last Name "
        />

        <Field
          name="email"
          type="email"
          component={Input}
          validate={[required, nonEmpty]}
          label="Email "
        />

        <Field
          name="password"
          component={Input}
          type="password"
          validate={[required, nonEmpty, passwordLength]}
          label="Password "
        />

        <Field
          name="repeatPassword"
          component={Input}
          type="password"
          validate={[required, nonEmpty, matchesPassword]}
          label="Repeat Password "
        />

        <button type="submit" className="submit">
          Submit
        </button>
        <p>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </form>
    );
  }
}

RegisterForm = reduxForm({
  // a unique name for the form
  form: "register"
})(RegisterForm);

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegisterForm);
