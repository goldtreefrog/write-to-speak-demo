import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { reduxForm, Field, focus } from "redux-form";
import { loginUser } from "./../store/actions";
import Feedback from "./feedback";
import "./styles/login-form.css";

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(loginUser(values.email, values.password));
  }
  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          this.props.error
        </div>
      );
    }
    return (
      <form
        className="login"
        onSubmit={this.props.handleSubmit(values => {
          this.onSubmit(values);
        })}
      >
        {error}
        <h2>Login</h2>
        <Feedback />
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
        <button type="submit">Submit</button>
        <p>
          No account? <Link to="/register">Register</Link>
        </p>
      </form>
    );
  }
}

LoginForm = reduxForm({
  // a unique name for the form
  form: "login"
})(LoginForm);

export default LoginForm;
