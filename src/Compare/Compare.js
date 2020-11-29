import React from "react";
import NavBar from "../NavBar/NavBar.js";
import UsersContext from "../usersContext";
import { findFriend, findScrtime } from "../helper.js";
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
    const friend = findFriend(friends, (friendUserId + "")) || {
      friend_name: "",
    };
    console.log(friendUserId)
    console.log(friends)
    console.log(friend)
    const scrtime = findScrtime(scrtimes, parseFloat(friendUserId)) || {
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
    return (
      <>
        <NavBar />
        <div className="compare">
          <h3>Total week's screentime: {totalScrTime} </h3>
          <table>
            <tbody>
              <tr>
                <th>{friend.friend_name}</th>
                <th>{logged_in.user_name || "still not working"}</th>
              </tr>
              <tr>
                <td>{scrtime.day_1}</td>
                <td>my hours</td>
              </tr>
              <tr>
                <td>{scrtime.day_2}</td>
                <td>my hours</td>
              </tr>
              <tr>
                <td>{scrtime.day_3}</td>
                <td>my hours</td>
              </tr>
              <tr>
                <td>{scrtime.day_4}</td>
                <td>my hours</td>
              </tr>
              <tr>
                <td>{scrtime.day_5}</td>
                <td>my hours</td>
              </tr>
              <tr>
                <td>{scrtime.day_6}</td>
                <td>my hours</td>
              </tr>
              <tr>
                <td>{scrtime.day_7}</td>
                <td> my hours</td>
              </tr>
              <tr>
                <td>{totalScrTime || ""} </td>
                <td>my total</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
