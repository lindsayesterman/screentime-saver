import React from 'react'
import UsersContext from '../usersContext'
import NavBar from '../NavBar/NavBar'
import User from '../User/User'

export default class FriendsList extends React.Component{
    
    static contextType = UsersContext;

    render(){
        const { friends = [] } = this.props
        return (
            <>
            <NavBar/>
            <ul>
            {this.context.friends.map(friend =>
                <User 
                name = {friend.friend_name}
                key={friend.id}
                {...friend}
                /> 
                )}
                </ul>
                </>
                )
            }
        }