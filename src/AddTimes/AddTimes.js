import React from "react";
import NavBar from "../NavBar/NavBar";
import UsersContext from "../usersContext";
import config from '../config.js'

export default class AddTimes extends React.Component {
  state = {
    error: null,
  };

  static contextType = UsersContext;

  handleScrSubmit = (e) => {
    e.preventDefault();
    const scrtime = {
      day_1: e.target["sun"].value,
      day_2: e.target["mon"].value,
      day_3: e.target["tues"].value,
      day_4: e.target["wed"].value,
      day_5: e.target["thurs"].value,
      day_6: e.target["fri"].value,
      day_7: e.target["sat"].value,
      user_id: this.props.logged_in.id,
      date_created: new Date(),
    };
    this.setState({ error: null });
    fetch(`${config.API_ENDPOINT}/scrtimes`, {
      method: "POST",
      body: JSON.stringify(scrtime),
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
        this.context.addScrTime(data);
        this.setState({ scrtimes: data })
        console.log(data)
        this.props.history.push(`/profile/${data.user_id}`);
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    return (
      <>
        <NavBar  logged_in={this.context.logged_in} />
        <h4>Enter a number of hours (if 0, put 0):</h4>
        <form onSubmit={(e) => this.handleScrSubmit(e)}>
          <input type="number" placeholder="Sunday Screentime" name="sun" id="sun" required></input>
          <input type="number" placeholder="Monday Screentime" name="mon" id="mon" required></input>
          <input type="number" placeholder="Tuesday Screentime" name="tues" id="tues" required></input>
          <input type="number" placeholder="Wednesday Screentime" name="wed" id="wed" required></input>
          <input type="number" placeholder="Thursday Screentime" name="thurs" id="thurs" required></input>
          <input type="number" placeholder="Friday Screentime" name="fri" id="fri" required></input>
          <input type="number" placeholder="Saturday Screentime" name="sat" id="sat" required></input>
          <button type="submit">Submit this weeks screentimes!</button>
        </form>
      </>
    );
  }
}
