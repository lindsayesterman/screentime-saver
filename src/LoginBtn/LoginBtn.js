import React from 'react'
import './LoginBtn.css'
import { Link } from 'react-router-dom'

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
        name: '', 
        password: ''
    };
}

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, password }  = this.state
        console.log(name)
        console.log(password)
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
        <form className="registration" onSubmit={e => this.handleSubmit(e)}>
        <h2>Login</h2>
        <div className="form-group-login">
          <label htmlFor="name">Name</label>
          <input type="text" className="registration__control"
            name="name" id="name" onChange={e => this.updateName(e.target.value)}/>
        </div>
        <div className="form-group">
           <label htmlFor="password">Password</label>
           <input type="password" className="registration__control"
            name="password" id="password" onChange={e => this.updatePassword(e.target.value)}/>     
         <button 
          type="submit"
          >
             Login
         </button>
        </div>
      </form>
        )
    }
}

export default Login;