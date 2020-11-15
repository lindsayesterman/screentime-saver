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
        <br/><br/>
        <h2>Register</h2>
        <div className="registration__hint">* required field</div>  
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input type="text" className="registration__control"
            name="name" id="name" onChange={e => this.updateName(e.target.value)} />
        </div>
        <div className="form-group">
           <label htmlFor="password">Password *</label>
           <input type="password" className="registration__control"
            name="password" id="password" onChange={e => this.updatePassword(e.target.value)}/>
        </div>      
        <div className="registration__button__group">
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