import React from 'react';
import UsersContext from '../usersContext'

export default class Friends extends React.Component{
    static contextType = UsersContext;

    render(){
        return(
            <li className='friends'>
                <h3>{this.props.friend_name}</h3>
                <h1>Friends</h1>
            </li>
        )
    }
}