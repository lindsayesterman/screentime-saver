import React from "react";

const UsersContext = React.createContext({
  users: [],
  scrtimes: [],
  user: {},
  friends: [],
  friend: {},
  addUser: () => {},
  addFriend: () => {},
  addScrtime: () => {},
  deleteScrtime: () => {},
});

export default UsersContext;
