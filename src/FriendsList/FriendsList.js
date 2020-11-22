import React from 'react'
import Friends from '../Friends/Friends'

export default class FriendsList extends React.Component{
    
    render(){
        const { friends = [] } = this.props
        return (
            <ul>
            {friends.map(friend =>
                <Friends
                friend_name = {friend.friend_name}
                key={friend.id}
                {...friend}
                /> 
                )}
                </ul>
                )
            }
        }