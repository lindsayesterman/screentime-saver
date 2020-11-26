import React from "react";

const UsersContext = React.createContext({
  users: [],
  scrtime: {},
  scrtimes: [],
  user: {},
  friends: [],
  friend: {},
  logged_in: {},
  addUser: () => {},
  addFriend: () => {},
  addScrtime: () => {},
  deleteFriend: () => {},
  deleteScrtime: () => {},
});

export default UsersContext;
