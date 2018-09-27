import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import Feedback from "./feedback";
import { required, nonEmpty } from "../validators";
import { registerUser } from "./../store/actions/users.js";
import { loginUser } from "./../store/actions/auth.js";
import "./styles/register-form.css";

export class RegisterForm extends React.Component {
  onSubmit(values) {
    const { email, password, firstName, lastName } = values;
    const user = { email, password, firstName, lastName };
    return this.props
      .dispatch(registerUser(user))
      .then(alert("Registration sucessful!!"))
      .then(() => this.props.dispatch(loginUser(email, password)));
  }
  render() {
    return (
      <form
        className="login"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <h2>Register</h2>
        <Feedback />
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          {/* <Field name="email" component="input" type="email" /> */}
          <Field
            name="email"
            type="email"
            component="input"
            validate={[required, nonEmpty]}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
        <div>
          <label htmlFor="repeatPassword">Repeat Password</label>
          <Field name="repeatPassword" component="input" type="password" />
        </div>
        <button type="submit">Submit</button>
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

export default RegisterForm;
