import React from "react";
import UsersContext from "../usersContext";
import config from "../config.js";
import TokenService from "../services/token-service";

export default class User extends React.Component {
  static contextType = UsersContext;

  handleFriendRequest = (e) => {
    e.preventDefault();
    const friend = {
      friend_name: this.props.name,
      friend_user_id: this.props.id,
      date_created: new Date(),
    };
    this.setState({ error: null });
    fetch(`${config.API_ENDPOINT}/friends`, {
      method: "POST",
      body: JSON.stringify(friend),
      headers: {
        "content-type": "application/json",
        Authorization: "bearer " + TokenService.getAuthToken(),
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
        this.context.addFriend(data);
        this.props.history.push("/friends");
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    const x = window.matchMedia("(max-width:449px)");
    return (
      <li className="user">
        <h3 className="usersName">
          {!x.matches
            ? this.props.name
            : this.props.name.length > 17
            ? this.props.name.slice(0, 17) + "..."
            : this.props.name}
        </h3>
        <h3 className="usersBio">{this.props.bio}</h3>
        <button onClick={(e) => this.handleFriendRequest(e)}>
          {this.props.text}
        </button>
      </li>
    );
  }
}
