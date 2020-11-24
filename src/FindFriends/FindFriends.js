import React from "react";
import "./FindFriends.css";
import NavBar from "../NavBar/NavBar.js";
import { Link, Route } from "react-router-dom";
import UsersContext from "../usersContext";
import User from "../User/User";
import Profile from "../Profile/Profile";

export default class FindFriends extends React.Component {
  static contextType = UsersContext;

  render() {
    const { users = [] } = this.props;
    return (
      <div className="App">
        <NavBar />
        <input
          type="search"
          className="search-bar"
          placeholder="Search.."
        ></input>
        <button type="submit">Search</button>
        <ul>
          {users.map((user) => (
            <User
              name={user.user_name}
              bio={user.user_bio}
              text="Add Friend"
              key={user.id}
              {...user}
            />
          ))}
        </ul>
      </div>
    );
  }
}
