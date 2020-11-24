import React from "react";
import "./Profile.css";
import NavBar from "../NavBar/NavBar.js";
import UsersContext from "../usersContext";

export default class Profile extends React.Component {
  static contextType = UsersContext;

  render() {
    //const totalScrTime = (this.context.scrtime.day_1) + (this.context.scrtime.day_2) +(this.context.scrtime.day_3) + (this.context.scrtime.day_4) + (this.context.scrtime.day_5) + (this.context.scrtime.day_6) +(this.context.scrtime.day_7) 
    console.log(this.context.scrtime.day_1);
    return (
      <>
        <NavBar />
        <div className="profile-info">
          <h3>Name: {this.context.user.user_name} </h3>
          <h3>About: {this.context.user.user_bio} </h3>
          <h3>Total weeks screentime: </h3>
        </div>
      </>
    );
  }
}
