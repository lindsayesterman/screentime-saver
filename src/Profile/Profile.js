import React from 'react';
import './Profile.css'
import NavBar from '../NavBar/NavBar.js'
import UsersContext from '../usersContext';

export default class Profile extends React.Component{

  static contextType = UsersContext;

  render(){
    console.log(this.context.user)
    return (
      <>
        <NavBar />
          <div className="profile-info">
            <h3>Name: {this.context.user.user_name} </h3>
           <h3>Lowest Screentime Day:</h3>
        </div>
        </>
      );
    }
  }