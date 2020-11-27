import React from "react";
import UsersContext from "../usersContext";
import NavBar from "../NavBar/NavBar";
import User from "../User/User";
import { Link } from 'react-router-dom'

export default class FriendsList extends React.Component {
  static contextType = UsersContext;

  handleFriendDeletion = (e) => {
    e.preventDefault();
    const friend = {
      friend_name: this.props.name,
      date_created: new Date(),
    };
    this.setState({ error: null });
    fetch(`http://localhost:8000/api/friends`, {
      method: "DELETE",
      body: JSON.stringify(friend),
      headers: {
        "content-type": "application/json",
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
        this.context.deleteFriend(data);
        this.props.history.push("/users");
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    return (
      <>
        <NavBar />
        <ul className="findfriends">
        {this.context.friends.map(friend =>
            <Link to={`/compare/${friend.id}`} key={friend.id}>
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
