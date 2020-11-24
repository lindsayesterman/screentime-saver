import React from "react";
import "./LoginBtn.css";
import NavBar from "../NavBar/NavBar.js";
import "./LoginBtn.css";
import TokenService from '../services/token-service'
import AuthApiService from '../services/friends-api-service'
import { Button, Input } from '../Utils/Utils'

class Login extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }
  state = { error: null }
  handleSubmitBasicAuth = e => {
    e.preventDefault();
    const { user_name, user_password } = e.target
    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, user_password.value)
    )
    user_name.value = ''
    user_password.value = ''
    this.props.onLoginSuccess()
    this.props.history.push("/profile");
  }

  updateName(user_name) {
    this.setState({ user_name  });
  }

  updatePassword(user_password) {
    this.setState({  user_password });
  }
  
  render() {
    return (
      <>
        <NavBar />
        <form className="registration" onSubmit={e => this.handleSubmitBasicAuth(e)}>
          <div className="container-login">
            <input
              type="text"
              className="registration__control"
              name="user_name"
              id="user_name"
              placeholder="Name..."
              onChange={e => this.updateName(e.target.value)}
            />
            <input
              type="password"
              className="registration__control"
              name="user_password"
              placeholder="Password..."
              id="user_password"
              onChange={e => this.updatePassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </div>
        </form>
      </>
    );
  }
}

export default Login;
