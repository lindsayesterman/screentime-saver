import React from "react";
import Register from "../RegisterBtn/RegisterBtn";
import Login from "../LoginBtn/LoginBtn";
import { Route, Link } from "react-router-dom";
import Profile from "../Profile/Profile";
import FindFriends from "../FindFriends/FindFriends";
import "./App.css";
import UsersContext from "../usersContext";
import FriendsList from "../FriendsList/FriendsList";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import AddTimes from "../AddTimes/AddTimes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eusers: [],
      user: {},
      friends: [],
      friend: {},
      scrtimes: [],
      scrtime: {},
      error: null,
    };
  }

  componentDidMount() {
    Promise.all([
      fetch(`http://localhost:8000/api/users`),
      fetch(`http://localhost:8000/api/scrtimes`),
    ])
      .then(([usersRes, scrtimesRes]) => {
        if (!usersRes.ok) return usersRes.json().then((e) => Promise.reject(e));
        if (!scrtimesRes.ok)
          return scrtimesRes.json().then((e) => Promise.reject(e));

        return Promise.all([usersRes.json(), scrtimesRes.json()]);
      })
      .then(([users, scrtimes]) => {
        this.setState({
          users,
          scrtimes,
        });
      })
      .catch((error) => {
        this.setState({ error });
        console.error({ error });
      });
  }

  setUsers = (users) => {
    this.setState({
      users,
    });
  };

  setScrtimes = (scrtimes) => {
    this.setState({
      scrtimes,
    });
  };

  addUser = (user) => {
    this.setState({
      users: [...this.state.users, user],
    });
  };

  addFriend = (friend) => {
    console.log(`new friend -- ${JSON.stringify(friend)}`);
    this.setState({
      friends: [...this.state.friends, friend],
    });
  };

  addScrtime = (scrtime) => {
    this.setState({
      scrtime: [...this.state.scrtimes, scrtime],
    });
  };

  render() {
    const context = {
      users: this.state.users,
      user: this.state.user,
      scrtimes: this.state.scrtimes,
      scrtime: this.state.scrtime,
      friends: this.state.friends,
      addUser: (user) => {
        this.setState({
          user,
        });
      },
      addFriend: (friend) => {
        this.addFriend(friend);
      },
      addScrtime: () => {},
      deleteScrtime: () => {},
    };
    return (
      <UsersContext.Provider value={context}>
        <div className="App">
          <Route exact path="/">
            <Link to="/">
              <h1>Screentime Saver</h1>
            </Link>
            <Link to="/register">
              <h3 className="front-sign-up">Register</h3>
            </Link>
            <Link to="/login">
              <h3 className="front-sign-up">Login</h3>
            </Link>
            <h2 className="front-quote">
              Are you a digital minimalist? Compete with your friends to find
              out!
            </h2>
            <img
              src="https://mockuphone.com/static/images/devices/apple-iphone7plus-silver-landscape.png"
              alt="iphone"
            ></img>
            <div className="about">
              <h4>How Screentime-Saver works: </h4>
              <p>
                Screentime-saver is an app that allows users to input phone
                screentimes every day and compete with friends for the lowest
                weekly average. Create groups of friends and each week the group
                member with the lowest average weekly screentime is announced!{" "}
              </p>
            </div>
          </Route>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route
            path="/profile"
            render={(routeProps) => {
              return (
                <Profile
                  name={this.state.user_name}
                  day_1={this.state.day_1}
                  {...routeProps}
                />
              );
            }}
          />
          <Route
            path="/findfriends"
            render={(routeProps) => {
              return <FindFriends users={context.users} {...routeProps} />;
            }}
          />
          <Route
            path="/friends"
            render={(routeProps) => {
              return <FriendsList friends={context.friends} {...routeProps} />;
            }}
          />
          <Route
            path="/addtimes"
            render={(routeProps) => {
              return <AddTimes {...routeProps} />;
            }}
          />
        </div>
      </UsersContext.Provider>
    );
  }
}

export default App;
