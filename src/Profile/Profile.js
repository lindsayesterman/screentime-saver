import React from 'react';
import { Route, Link } from 'react-router-dom'
import FindFriends from '../FindFriends/FindFriends'
import './Profile.css'
import NavBar from '../NavBar/NavBar.js'

export default class Profile extends React.Component{
  render(){
    return (
      <Route path="/profile">
        <NavBar />
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <div className="profile-info">
            <h3>Name: {this.props.name} </h3>
            <h3>Lowest Screentime Day:</h3>
            <h3>Lowest Screentime Week:</h3>
        </div>
      </Route>
      );
    }
  }