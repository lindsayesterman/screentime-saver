import React from 'react'
import Friends from '../Friends/Friends'
import UsersContext from '../usersContext'
import NavBar from '../NavBar/NavBar'

export default class FriendsList extends React.Component{
    
    static contextType = UsersContext;

    render(){
        const { friends = [] } = this.props
        return (
            <>
            <NavBar/>
            <ul>
            {this.context.friends.map(friend =>
                <Friends
                friend_name = {friend.friend_name}
                key={friend.id}
                {...friend}
                /> 
                )}
                </ul>
                </>
                )
            }
        }