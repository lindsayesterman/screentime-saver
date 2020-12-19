import React from "react";
import "./Profile.css";
import NavBar from "../NavBar/NavBar.js";
import UsersContext from "../usersContext";
import { findUser, findScrtime } from "../helper.js";

export default class Profile extends React.Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  static contextType = UsersContext;

  render() {
    const { users = [], scrtimes = [] } = this.context;
    const { userId } = this.props.match.params;
    const user = findUser(users, parseFloat(userId)) || { user_name: "" };
    const scrtime = findScrtime(scrtimes, parseFloat(userId)) || { day_1: "" }
    const totalScrTime =
      parseFloat(scrtime.day_1) +
      parseFloat(scrtime.day_2) +
      parseFloat(scrtime.day_3) +
      parseFloat(scrtime.day_4) +
      parseFloat(scrtime.day_5) +
      parseFloat(scrtime.day_6) + 
      parseFloat(scrtime.day_7);
    return (
      <>
        <NavBar  logged_in={this.context.logged_in} />
        <div className="profile-info">
          <h3>Name: {user.user_name || this.props.logged_in.user_name } </h3>
          <h3>About: {user.user_bio || this.props.logged_in.user_bio }  </h3>
          <h3>Weekly screentime: {totalScrTime || "You haven't entered screentimes for this week yet! "}</h3>
        </div>
        <button type="submit">Log out</button>
      </>
    );
  }
}
