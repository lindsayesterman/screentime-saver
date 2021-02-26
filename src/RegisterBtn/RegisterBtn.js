import React from "react";
import UsersContext from "../usersContext.js";
import { Link } from "react-router-dom";
import TokenService from "../services/token-service";
import AuthApiService from "../services/auth-api-service";

class Register extends React.Component {
  static contextType = UsersContext;

  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };

  handleUserSubmit = (e) => {
    e.preventDefault();
    // const user = {
    //   user_name: e.target["name"].value,
    //   user_password: e.target["password"].value,
    //   user_bio: e.target["bio"].value,
    //   date_created: new Date(),
    // };
    const { user_name, user_password, user_bio } = e.target;
    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      user_password: user_password.value,
      user_bio: user_bio.value,
    })
      // fetch(`${config.API_ENDPOINT}/users`, {
      //   method: "POST",
      //   body: JSON.stringify(user),
      //   headers: {
      //     "content-type": "application/json",
      //     // "Authorization": "bearer "+localStorage.getItem("authToken"),
      //   },
      // })
      // .then((res) => {
      //   if (!res.ok) {
      //     return res.json().then((error) => {
      //       throw error;
      //     });
      //   }
      //   return res.json();
      // })
      .then((data) => {
        this.context.addUser(data);
        TokenService.saveAuthToken(data.authToken);
        this.props.onRegistrationSuccess();
        this.context.addLoggedIn(data);
        this.setState({ logged_in: data });
         this.props.history.push("/login");
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  updateName(user_name) {
    this.setState({ user_name });
  }

  updatePassword(user_password) {
    this.setState({ user_password });
  }

  updateBio(user_bio) {
    this.setState({ user_bio });
  }

  render() {
    return (
      <div className="regist-form">
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
        <form className="registration" onSubmit={(e) => this.handleUserSubmit(e)}>
        <div className="container-login">
          <input
            type="text"
            className="name"
            name="user_name"
            id="user_name"
            placeholder="Name..."
            onChange={(e) => this.updateName(e.target.value)}
          />
          <input
            type="password"
            className="password"
            name="user_password"
            id="user_password"
            placeholder="Password..."
            onChange={(e) => this.updatePassword(e.target.value)}
          />
          <textarea
            type="text"
            className="bio"
            name="user_bio"
            id="user_bio"
            placeholder="Tell us about yourself!"
            onChange={(e) => this.updateBio(e.target.value)}
          />
          <button type="reset" className="registration__button">
            Cancel
          </button>
          <button type="submit" className="registration__button">
            Register
          </button>
        </div>
      </form>
      </div>
    );
  }
}

export default Register;
