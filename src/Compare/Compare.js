import React from "react";
import NavBar from "../NavBar/NavBar.js";
import UsersContext from "../usersContext";
import { findMyScrtime, findScrtime } from "../helper.js";
import "./Compare.css";

export default class Compare extends React.Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  static contextType = UsersContext;

  render() {
    const { friends = [], scrtimes = [], logged_in = [] } = this.context;
    const { friendUserId } = this.props.match.params;
    const friend = friends.find((x) => x.id === parseFloat(friendUserId));
    const scrtime = findScrtime(
      scrtimes,
      parseFloat(friend.friend_user_id)
    ) || {
      day_1: "",
    };
    const myScrtime = findMyScrtime(scrtimes, logged_in.userId) || {
      day_1: "",
    };
    const totalScrTime =
      parseFloat(scrtime.day_1) +
      parseFloat(scrtime.day_2) +
      parseFloat(scrtime.day_3) +
      parseFloat(scrtime.day_4) +
      parseFloat(scrtime.day_5) +
      parseFloat(scrtime.day_6) +
      parseFloat(scrtime.day_7);
    const myTotalScrTime =
      parseFloat(myScrtime.day_1) +
      parseFloat(myScrtime.day_2) +
      parseFloat(myScrtime.day_3) +
      parseFloat(myScrtime.day_4) +
      parseFloat(myScrtime.day_5) +
      parseFloat(myScrtime.day_6) +
      parseFloat(myScrtime.day_7);
    const friendNoValues =
      friend.friend_name + " hasn't filled in this week's values yet!";
    const userNoValues = "fill in this weeks values!";
    return (
      <>
        <NavBar logged_in={this.context.logged_in} />
        <div className="compare">
          <h3>
            {" "}
            {friend.friend_name < logged_in.user_name
              ? friend.friend_name
              : logged_in.user_name}{" "}
            wins this week's competition by{" "}
            {Math.abs(myTotalScrTime - totalScrTime) ||
              "One of you needs to fill out your weekly screentime before you compare"}
           {" "}hours!
          </h3>
          <table>
            <tbody>
              <tr>
                <th>{friend.friend_name}</th>
                <th>{logged_in.user_name}</th>
              </tr>
              <tr>
                <td>{scrtime.day_1 || friendNoValues} hours</td>
                <td>{myScrtime.day_1 || userNoValues} hours</td>
              </tr>
              <tr>
                <td>{scrtime.day_2 || friendNoValues} hours</td>
                <td>{myScrtime.day_2 || userNoValues} hours</td>
              </tr>
              <tr>
                <td>{scrtime.day_3 || friendNoValues} hours</td>
                <td>{myScrtime.day_3 || userNoValues} hours</td>
              </tr>
              <tr>
                <td>{scrtime.day_4 || friendNoValues} hours</td>
                <td>{myScrtime.day_4 || userNoValues} hours</td>
              </tr>
              <tr>
                <td>{scrtime.day_5 || friendNoValues} hours</td>
                <td>{myScrtime.day_5 || userNoValues} hours</td>
              </tr>
              <tr>
                <td>{scrtime.day_6 || friendNoValues} hours</td>
                <td>{myScrtime.day_6 || userNoValues} hours</td>
              </tr>
              <tr>
                <td>{scrtime.day_7 || friendNoValues} hours</td>
                <td>{myScrtime.day_7 || userNoValues} hours</td>
              </tr>
              <tr>
                <td>{totalScrTime || friendNoValues} </td>
                <td>{myTotalScrTime || userNoValues}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
