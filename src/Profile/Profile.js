import React from "react";
import "./Profile.css";
import NavBar from "../NavBar/NavBar.js";
import UsersContext from "../usersContext";

export default class Profile extends React.Component {
  static contextType = UsersContext;

  render() {
    const totalScrTime = parseFloat(this.context.scrtime.day_1) + parseFloat(this.context.scrtime.day_2) +parseFloat(this.context.scrtime.day_3) + parseFloat(this.context.scrtime.day_4) + parseFloat(this.context.scrtime.day_5) + parseFloat(this.context.scrtime.day_6) +parseFloat(this.context.scrtime.day_7) 
    return (
      <>
        <NavBar />
        <div className="profile-info">
          <h3>Name: {this.context.user.user_name} </h3>
          <h3>About: {this.context.user.user_bio} </h3>
          <h3>Total weeks screentime: {totalScrTime} </h3>
        </div>
      </>
    );
  }
}
