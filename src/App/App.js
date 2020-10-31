import React from 'react';
import Register from '../RegisterBtn/RegisterBtn'
import { Route, Link } from 'react-router-dom'
import Profile from '../Profile/Profile'
import FindFriends from '../FindFriends/FindFriends'

class App extends React.Component{
  render(){
    return (
      <div className="App">
      <Route exact path="/">
        <h1>Screentime Saver</h1>
          <Link to="/register">
            Register
          </Link>
        </Route>
        <Route path="/register" component={Register}>
        </Route>
        <Route
            path='/profile'
            component={Profile}
            />
            <Route
            path='/friends'
            component={FindFriends}
            />
      </div>
      );
    }
  }
  
  export default App