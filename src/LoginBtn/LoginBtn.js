import React from "react";
import "./LoginBtn.css";
import NavBar from "../NavBar/NavBar.js";
import "./LoginBtn.css";
import TokenService from "../services/token-service";
import AuthApiService from "../services/auth-api-service";
import UsersContext from "../usersContext";
import { Link } from "react-router-dom";
import { fetchAppData } from "../AppData.js";

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
      .then((data) => {
        TokenService.saveAuthToken(data.authToken);
        this.props.onLoginSuccess();
        this.context.addLoggedIn(data);
        this.setState({ logged_in: data });
        fetchAppData().then((data) => {
          this.context.setAppData(data)
          this.props.history.push(`/profile/${data.userId}`);
        });
      })
      .catch((data) => {
        this.setState({ error: data.error });
        console.error(data);
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
        {/* <NavBar logged_in={this.context.logged_in} /> */}
        <ul className="navbar">
          <li>
            <Link to="/">
              <h3>Screentime Saver</h3>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <h3 className="front-sign-up">Register</h3>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <h3 className="front-sign-up">Login</h3>
            </Link>
          </li>
        </ul>
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
