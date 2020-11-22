import React from 'react'

const UsersContext = React.createContext({
  users: [],
  scrtimes: [],
  user: {},
  friends: [],
  friends: {},
  addUser: () => {},
  addFriend: () => {},
  addScrtime: () => {},
  deleteScrtime: () => {},
})

export default UsersContext;