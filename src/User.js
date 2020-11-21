import React from 'react';
import UsersContext from './usersContext'

export default class User extends React.Component{
    static contextType = UsersContext;

    render(){
        return(
            <li className='user'>
                <h3>{this.props.user_name}</h3>
            </li>
        )
    }
}