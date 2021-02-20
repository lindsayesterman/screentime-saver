import React from "react";
import "./FindFriends.css";
import NavBar from "../NavBar/NavBar.js";
import { Link } from "react-router-dom";
import UsersContext from "../usersContext";
import User from "../User/User";

export default class FindFriends extends React.Component {
  static contextType = UsersContext;

  render() {
    const { users = [] } = this.props;
    return (
      <div className="App">
        <NavBar logged_in={this.context.logged_in} />
        <h2 className="purpTitle">Find friends to Compete with here:</h2>
        <ul className="findfriends">
          {users.map((user) => (
            <Link to={`/profile/${user.id}`} key={user.id} style={{textDecoration:"none"}}>
              <User
                name={user.user_name}
                bio={user.user_bio}
                text="Add Friend"
                id={user.id}
                key={user.id}
                {...user}
              />
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}
