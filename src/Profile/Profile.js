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
    const { users = [], scrtimes = [], logged_in = {} } = this.context;
    const { userId } = this.props.match.params;
    const { scrtimeUserId } = this.props.match.params;
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
        <NavBar />
        <div className="profile-info">
          {/*<h3>Name: {this.context.user.user_name} </h3>
          <h3>About: {this.context.user.user_bio} </h3>
          <h3>Total week's screentime: {totalScrTime || ""} </h3>*/}
          <h3>Name: {user.user_name || logged_in.user_name } </h3>
          <h3>About: {user.user_bio} </h3>
          <h3>Weekly screentime: {totalScrTime}</h3>
        </div>
      </>
    );
  }
}
