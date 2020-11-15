import React from 'react';
import Register from '../RegisterBtn/RegisterBtn'
import Login from '../LoginBtn/LoginBtn'
import { Route, Link } from 'react-router-dom'
import Profile from '../Profile/Profile'
import FindFriends from '../FindFriends/FindFriends'
import './App.css'
import phone from '../phone.png'

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
      <Link to="/">
        <h1>Screentime Saver</h1>
        </Link>
          <Link to="/register">
            <h3 className="front-sign-up">Register</h3>
          </Link>
          <Link to='/login'>
          <h3 className="front-sign-up">Login</h3>
          </Link>
          <h2 className="front-quote">Are you a digital minimalist? Compete with your friends to find out!</h2>
          <img src="https://mockuphone.com/static/images/devices/apple-iphone7plus-silver-landscape.png"></img>
        </Route>
        <Route path="/register" component={Register}/>
        <Route path="/login"  component={Login} />
            <Route
              path='/profile'
              render={routeProps => {
                  return(
                    <Profile
                      name={this.props.name}
                      {...routeProps}
                      /> 
                  )
              }}
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