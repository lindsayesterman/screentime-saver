import React from 'react';
import ValidationError from './ValidationError'
import Profile from '../Profile/Profile'
import NavBar from '../NavBar/NavBar.js'

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            password: ''
        }
    }

handleSubmit(event){
    event.preventDefault();
    const { name, password }  = this.state;
    console.log('Name: ', name);
    console.log('Password: ', password);
    this.props.history.push('/profile');
}

updateName(name){
    this.setState({name: name})
}

updatePassword(password){
    this.setState({password: password })
}

render () {
    return (
      <form className="registration" onSubmit={e => this.handleSubmit(e)}>
        <NavBar />
        <div className="container-login">
          <input type="text" className="registration__control"
            name="name" id="name" placeholder="Name..." onChange={e => this.updateName(e.target.value)} />
           <input type="password" className="registration__control"
            name="password" id="password" placeholder="Password..." onChange={e => this.updatePassword(e.target.value)}/>
         <button type="reset" className="registration__button">
             Cancel
         </button>
         <button 
          type="submit"
          className="registration__button"
          >
             Register
         </button>
        </div>
      </form>
    )
  }
}

export default Register;