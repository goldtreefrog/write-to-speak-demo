import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import "./styles/login-form.css";

let LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="login" onSubmit={handleSubmit}>
      <h2>Login</h2>
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
};

LoginForm = reduxForm({
  // a unique name for the form
  form: "login"
})(LoginForm);

export default LoginForm;
