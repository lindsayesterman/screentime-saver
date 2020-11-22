import React from 'react'

const UsersContext = React.createContext({
  users: [],
  scrtimes: [],
  user: {},
  friends: [],
  addUser: () => {},
  addFriend: () => {},
  addScrtime: () => {},
  deleteScrtime: () => {},
})

export default UsersContext;