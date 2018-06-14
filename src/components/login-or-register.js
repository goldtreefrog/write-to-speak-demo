import React from "react";
import { reduxForm } from "redux-form";
// import { reduxForm, Field, SubmissionError, focus } from "redux-form";
// import Input from "./input";
// import { required, nonEmpty, email } from "../validators";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import "./styles/login-or-register.css";

let LoginOrRegister = props => {
  // const { handleSubmit } = props;
  // const something = props.handleSubmit;
  if (props.hasUserName) {
    return <LoginForm />;
  } else {
    return <RegisterForm />;
  }
};

LoginOrRegister = reduxForm({
  // a unique name for the form
  form: "loginOrRegister"
})(LoginOrRegister);

export default LoginOrRegister;

// NOTE: If the ()() syntax seems confusing, you can always break it down into two steps:
// // create new, "configured" function
// createReduxForm = reduxForm({ form: 'contact' })
//
// // evaluate it for ContactForm component
// ContactForm = createReduxForm(ContactForm)
//
// export default ContactForm

// export class LoginForm extends React.Component {
//   onSubmit(values) {
//     console.log(values);
// return fetch("/api/messages", {
//   method: "POST",
//   body: JSON.stringify(values),
//   headers: {
//     "Content-Type": "application/json"
//   }
// })
// .then(res => {
//   if (!res.ok) {
//     if (res.headers.has("content-type") && res.headers.get("content-type").startsWith("application/json")) {
//       // It's a nice JSON error returned by us, so decode it
//       return res.json().then(err => Promise.reject(err));
//     }
//     // It's a less informative error returned by express
//     return Promise.reject({
//       code: res.status,
//       message: res.statusText
//     });
//   }
//   return;
// })
// .then(() => console.log("Submitted with values", values))
// .catch(err => {
//   const { reason, message, location } = err;
//   if (reason === "ValidationError") {
//     // Convert ValidationErrors into SubmissionErrors for Redux Form
//     return Promise.reject(
//       new SubmissionError({
//         [location]: message
//       })
//     );
//   }
//   return Promise.reject(
//     new SubmissionError({
//       _error: "Error submitting message"
//     })
//   );
// });
// }

// render() {
// let successMessage;
// if (this.props.submitSucceeded) {
//   successMessage = <div className="message message-success">Message submitted successfully</div>;
// }
//
// let errorMessage;
// if (this.props.error) {
//   errorMessage = <div className="message message-error">{this.props.error}</div>;
// }

//     return (
//       <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
//         {/* {successMessage} */}
//         {/* {errorMessage} */}
//         <Field name="name" type="text" component={Input} label="Name" validate={[required, nonEmpty]} />
//         <Field name="email" type="email" component={Input} label="Email address" validate={[required, nonEmpty, email]} />
//         <Field name="message" element="textarea" component={Input} label="Message" validate={[required, nonEmpty]} />
//         <Field name="magicWord" type="text" component={Input} label="What's the magic word?" validate={[required, nonEmpty]} />
//         <button type="submit" disabled={this.props.pristine || this.props.submitting}>
//           Send message
//         </button>
//       </form>
//     );
//   }
// }

// export default reduxForm({
//   form: "login",
//   onSubmitFail: (errors, dispatch) => dispatch(focus("login", Object.keys(errors)[0]))
// })(LoginForm);
