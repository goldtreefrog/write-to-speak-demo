import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field, focus } from "redux-form";
import { loginUser } from "./../store/actions";
import Input from "./input";
import { required, nonEmpty } from "../validators";
import Feedback from "./feedback";
import SayIt from "./say-it";
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
        <Field
          id="email"
          name="email"
          component={Input}
          type="email"
          validate={[required, nonEmpty]}
          ref="email"
          label="Email "
        />
        <Field
          id="password"
          name="password"
          component={Input}
          type="password"
          validate={[required, nonEmpty]}
          label="Password "
        />
        <button type="submit" className="submit">
          Submit
        </button>
        <p>
          No account? <Link to="/register">Register</Link>
        </p>
        <SayIt />
      </form>
    );
  }
}

LoginForm = reduxForm({
  // a unique name for the form
  form: "login",
  onSubmitFail: (errors, dispatch) => {
    dispatch(focus("login", "Object.keys(errors)[0]"));
  }
})(LoginForm);

export default LoginForm;
