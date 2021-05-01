import React from "react";
import UsersContext from "../usersContext";
import NavBar from "../NavBar/NavBar";
import User from "../User/User";
import { Link } from "react-router-dom";

export default class FriendsList extends React.Component {
  static contextType = UsersContext;

  render() {
    const currUserId = this.props.logged_in.userId;
    const myFriends = this.context.friends.filter(
      (friends) => friends.user_id === currUserId
    );

    return (
      <>
        <NavBar logged_in={this.context.logged_in} />
        <h2 className="purpTitle" style={{ color: " rgb(82, 214, 82)" }}>
          Click on a friend to compare screentimes
        </h2>
        {myFriends.length > 0 ? (
          <ul className="findfriends">
            {myFriends.map((friend) => (
              <Link
                style={{ textDecoration: "none" }}
                to={`/compare/${friend.id}`}
                key={friend.id}
              >
                <User
                  name={friend.friend_name}
                  text={friend.date_created}
                  key={friend.id}
                  {...friend}
                />
              </Link>
            ))}
          </ul>
        ) : (
          <h3 className="noFriends" style={{textAlign:"center"}}>
            You don't have any friends at the moment. Head over to the {" "}
            <Link to="/users">Connect</Link> page to make some!
          </h3>
        )}
      </>
    );
  }
}
