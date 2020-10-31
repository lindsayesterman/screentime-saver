import React from 'react'
import { Route, Link } from 'react-router-dom'

export default class FindFriends extends React.Component{
    render(){
        return (
            <div className="App">
            <Route path="/friends">
            <h1>Connect here!</h1>
            <div className="searchBar">Search</div>
            </Route>
            </div>
            );
        }
    }