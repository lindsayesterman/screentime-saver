import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import UsersContext from "../usersContext";

export default class NavBar extends React.Component {
  static contextType = UsersContext;

  render() {
    const { logged_in = {} } = this.context;
    return (
      <div className="nav-bar">
        <Link to="/">
          <h1 className="title">Screentime Saver</h1>
        </Link>
        <Link to={`/profile/${logged_in.id}`}>
          <h4 className="profile">Account</h4>
        </Link>
        <Link to="/users">
          <h4 className="connect">Connect</h4>
        </Link>
        <Link to="/friends">
          <h4 className="friends">Friends</h4>
        </Link>
        <Link to="/addtimes">
          <h4 className="times">Add Times</h4>
        </Link>
      </div>
    );
  }
}
