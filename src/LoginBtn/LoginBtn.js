import React from 'react'
import './LoginBtn.css'

class Login extends React.Component{
    render(){
        return(
        <form className="registration">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="registration__control"
            name="name" id="name" />
        </div>
        <div className="form-group">
           <label htmlFor="password">Password</label>
           <input type="password" className="registration__control"
            name="password" id="password" />     
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