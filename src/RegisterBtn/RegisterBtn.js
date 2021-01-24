import React from "react";
import NavBar from "../NavBar/NavBar.js";
import UsersContext from "../usersContext.js";
import config from "../config.js";
import { Link } from "react-router-dom";

class Register extends React.Component {
  state = {
    error: null,
  };

  static contextType = UsersContext;

  handleUserSubmit = (e) => {
    e.preventDefault();
    const user = {
      user_name: e.target["name"].value,
      user_password: e.target["password"].value,
      user_bio: e.target["bio"].value,
      date_created: new Date(),
    };
    this.setState({ error: null });
    fetch(`${config.API_ENDPOINT}/users`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
        // "Authorization": "bearer "+localStorage.getItem("authToken"),
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.context.addUser(data);
        this.context.addLoggedIn(data);
        this.setState({ logged_in: data });
        this.props.history.push(`/profile/${data.id}`);
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    return (
      <form className="registration" onSubmit={(e) => this.handleUserSubmit(e)}>
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
        <div className="container-login">
          <input
            type="text"
            className="name"
            name="name"
            id="name"
            placeholder="Name..."
          />
          <input
            type="password"
            className="password"
            name="password"
            id="password"
            placeholder="Password..."
          />
          <textarea
            type="text"
            className="bio"
            name="bio"
            id="bio"
            placeholder="Tell us about yourself!"
          />
          <button type="reset" className="registration__button">
            Cancel
          </button>
          <button type="submit" className="registration__button">
            Register
          </button>
        </div>
      </form>
    );
  }
}

export default Register;
