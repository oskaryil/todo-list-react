import React from "react";

const LoginForm = props => {
  return (
    <form onSubmit={event => event.preventDefault()}>
      <input
        type="email"
        placeholder="Email*"
        value={props.email}
        onChange={props.onEmailChange}
      />
      <input
        type="password"
        placeholder="Password*"
        value={props.password}
        onChange={props.onPasswordChange}
      />
      <button type="submit" onClick={props.onButtonClick}>
        {props.buttonTitle}
      </button>
    </form>
  );
};

export default LoginForm;
