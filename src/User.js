import React from 'react';

export default class User extends React.Component{
    render(){
        return(
            <li className='user'>
                <h3>{this.props.user_name}</h3>
                </li>
        )
    }
}