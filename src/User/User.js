import React from 'react';
import UsersContext from '../usersContext'

export default class User extends React.Component{
    static contextType = UsersContext;

  handleFriendRequest = (e) => {
    e.preventDefault();
    const friend  = {
      friend_name: this.props.name,
      date_created: new Date(),
    }
    this.setState({error:null})
    fetch(`http://localhost:8000/api/friends`, {
    method: 'POST',
    body: JSON.stringify(friend),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => {
    if (!res.ok){
      return res.json().then(error => {
        throw error
      })
    }
    return res.json()
  })
  .then (data => {
    console.log(data)
    console.log(friend.friend_name)
    this.context.addFriend(data)
    this.props.history.push('/friends')
  })
  .catch(error=>{
    this.setState({ error })
  })
}


    render(){
        return(
            <li className='user' >
                <h3>{this.props.name}</h3>
                <h3>{this.props.bio}</h3>
                <button onClick={e => this.handleFriendRequest(e)}>
                    {this.props.text}
                </button>
            </li>
        )
    }
}