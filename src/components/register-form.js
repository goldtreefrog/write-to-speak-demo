import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
// import { required, email } from "redux-form-validators";
import "./styles/register-form.css";

let RegisterForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="login" onSubmit={handleSubmit}>
      <h2>Register</h2>
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
        <Field name="email" component="input" type="email" />
        {/* <Field name="email" type="email" component="input" validate={[required(), email()]} /> */}
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
};

RegisterForm = reduxForm({
  // a unique name for the form
  form: "register"
})(RegisterForm);

export default RegisterForm;
