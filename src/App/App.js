import React from 'react';
import Register from '../RegisterBtn/RegisterBtn'
import Login from '../LoginBtn/LoginBtn'
import { Route, Link } from 'react-router-dom'
import Profile from '../Profile/Profile'
import FindFriends from '../FindFriends/FindFriends'
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
        name: '', 
        password: ''
    };
}

updateName(name){
  this.setState({name:name})
}

updatePassword(password){
  this.setState({password:password})
}

  render(){
    return (
      <div className="App">
      <Route exact path="/">
        <h1>Screentime Saver</h1>
          <Link to="/register">
            <h3 className="front-sign-up">Register</h3>
          </Link>
          <Link to='/login'>
          <h3 className="front-sign-up">Login</h3>
          </Link>
          <h2 className="front-quote">Are you a digital minimalist? Compete with your friends to find out!</h2>
        </Route>
        <Route path="/register" component={Register}/>
        <Route path="/login"  component={Login} />
        <Route
            path='/profile'
            component={props => <Profile name={this.props.name}/>}
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