import React from 'react';
import { Route, Link } from 'react-router-dom'
import FindFriends from '../FindFriends/FindFriends'
import './Profile.css'

export default class Profile extends React.Component{
    render(){
      return (
        <Route path="/profile">
          <div className="profile-top">
          <h1 className="profile">Profile</h1>
          <Link to='/friends'>
            <h3 className="connect">Connect with friends</h3>
          </Link>
          </div>
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <div className="profile-info">
      <h3>Name: </h3>
          <h3>Lowest Screentime Day:</h3>
          <h3>Lowest Screentime Week:</h3>
          </div>
        </Route>
        );
      }
    }