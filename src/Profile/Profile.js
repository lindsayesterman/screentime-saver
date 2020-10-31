import React from 'react';
import { Route, Link } from 'react-router-dom'
import FindFriends from '../FindFriends/FindFriends'

export default class Profile extends React.Component{
    render(){
      return (
        <div className="App">
        <Route path="/profile">
          <h1>Profile</h1>
          <Link to='/findFriends'><h3>Connect with friends</h3></Link>
        </Route>
        </div>
        );
      }
    }