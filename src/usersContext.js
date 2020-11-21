import React from 'react'

const UsersContext = React.createContext({
  users: [],
  scrtimes: [],
  user: {},
  addUser: () => {},
  addScrtime: () => {},
  deleteScrtime: () => {},
})

export default UsersContext;