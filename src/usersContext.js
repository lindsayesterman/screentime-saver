import React from "react";

const UsersContext = React.createContext({
  users: [],
  scrtime: {},
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
