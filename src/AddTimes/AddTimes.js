import React from "react";
import NavBar from "../NavBar/NavBar";
import UsersContext from '../usersContext'

export default class AddTimes extends React.Component {
  state = {
    error: null,
  };

  static contextType = UsersContext;

  handleScrSubmit = (e) => {
    e.preventDefault();
    const week = {
      day_1: e.target["sun"].value,
      day_2: e.target["mon"].value,
      day_3: e.target["tues"].value,
      day_4: e.target["wed"].value,
      day_5: e.target["thurs"].value,
      day_6: e.target["fri"].value,
      day_7: e.target["sat"].value,
      user_id: 1,
      date_created: new Date(),
    };
    this.setState({ error: null });
    fetch(`http://localhost:8000/api/scrtimes`, {
      method: "POST",
      body: JSON.stringify(week),
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
        this.props.history.push("/profile");
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    return (
      <>
        <NavBar />
        <form onSubmit={(e) => this.handleScrSubmit(e)}>
          <input placeholder="Sunday Screentime" name="sun" id="sun"></input>
          <input placeholder="Monday Screentime" name="mon" id="mon"></input>
          <input placeholder="Tuesday Screentime" name="tues" id="tues"></input>
          <input placeholder="Wednesday Screentime" name="wed" id="wed"></input>
          <input
            placeholder="Thursday Screentime"
            name="thurs"
            id="thurs"
          ></input>
          <input placeholder="Friday Screentime" name="fri" id="fri"></input>
          <input placeholder="Saturday Screentime" name="sat" id="sat"></input>
          <button type="submit">Submit this weeks screentimes!</button>
        </form>
      </>
    );
  }
}
