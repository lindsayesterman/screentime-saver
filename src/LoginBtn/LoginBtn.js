import React from 'react'
import './LoginBtn.css'
import NavBar from '../NavBar/NavBar.js'
import './LoginBtn.css'

class Login extends React.Component{
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, password }  = this.state
    this.props.history.push('/profile')
  }
  
  updateName(name){
    this.setState({name:name})
  }
  
  updatePassword(password){
    this.setState({password:password})
  }
  
  render(){
    return(
      <>
      <NavBar />
      <form className="registration" onSubmit={e => this.handleSubmit(e)}>
      <div className="container-login">
      <input 
      type="text" 
      className="registration__control"
      name="name" 
      id="name" 
      placeholder="Name..." 
      onChange={e => this.updateName(e.target.value)}/>
      <input 
      type="password" 
      className="registration__control"
      name="password" 
      placeholder="Password..." 
      id="password" 
      onChange={e => this.updatePassword(e.target.value)}/>     
      <button 
      type="submit"
      >
      Login
      </button>
      </div>
      </form>
      </>
      )
    }
  }
  
  export default Login;