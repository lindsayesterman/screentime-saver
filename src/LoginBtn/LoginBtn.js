import React from "react";
import "./LoginBtn.css";
import NavBar from "../NavBar/NavBar.js";
import "./LoginBtn.css";
import TokenService from "../services/token-service";
import AuthApiService from "../services/auth-api-service";
import UsersContext from "../usersContext";

class Login extends React.Component {
  static contextType = UsersContext;

  static defaultProps = {
    onLoginSuccess: () => {},
  };

  state = { error: null };

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, user_password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      user_password: user_password.value,
    })
      .then((res) => {
        console.log(res);
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
        this.context.addLoggedIn(res);
        this.setState({ logged_in: res });
        console.log("username" + res.user_name);
        this.props.history.push(`/profile/${res.userId}`);
      })
      .catch((res) => {
        this.setState({ error: res.error });
        console.error(res);
      });
  };

  updateName(user_name) {
    this.setState({ user_name });
  }

  updatePassword(user_password) {
    this.setState({ user_password });
  }

  render() {
    return (
      <>
        <NavBar logged_in={this.context.logged_in} />
        <form
          className="registration"
          onSubmit={(e) => this.handleSubmitJwtAuth(e)}
        >
          <div className="container-login">
            <input
              type="text"
              className="registration__control"
              name="user_name"
              id="user_name"
              placeholder="Name..."
              onChange={(e) => this.updateName(e.target.value)}
            />
            <input
              type="password"
              className="registration__control"
              name="user_password"
              placeholder="Password..."
              id="user_password"
              onChange={(e) => this.updatePassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </div>
        </form>
      </>
    );
  }
}

export default Login;
