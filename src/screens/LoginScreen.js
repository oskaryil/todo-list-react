import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import { connect } from "react-redux";
import { signup, emailChanged, passwordChanged } from "../actions/AuthActions";

class LoginScreen extends Component {
  handleEmailChange(e) {
    this.props.emailChanged(e.target.value);
  }

  handlePasswordChange(e) {
    this.props.passwordChanged(e.target.value);
  }

  signup() {
    const { email, password } = this.props.auth;
    this.props.signup(email, password);
  }

  render() {
    return (
      <div className="login">
        <LoginForm
          buttonTitle="Login"
          onEmailChange={this.handleEmailChange.bind(this)}
          onPasswordChange={this.handlePasswordChange.bind(this)}
          onButtonClick={this.signup.bind(this)}
          email={this.props.auth.email}
          password={this.props.auth.password}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  signup,
  emailChanged,
  passwordChanged
})(LoginScreen);
