import React from "react";
import UsersContext from "../usersContext";
import NavBar from "../NavBar/NavBar";
import User from "../User/User";
import { Link } from 'react-router-dom'

export default class FriendsList extends React.Component {
  static contextType = UsersContext;

  render() {
    return (
      <>
        <NavBar  logged_in={this.context.logged_in} />
        <ul className="findfriends">
        {this.context.friends.map(friend =>
            <Link to={`/compare/${friend.friend_user_id}`} key={friend.id}>
              <User
                name={friend.friend_name}
                text="Remove Friend"
                key={friend.id}
                {...friend}
              />
            </Link>
          )}
        </ul>
      </>
    );
  }
}
