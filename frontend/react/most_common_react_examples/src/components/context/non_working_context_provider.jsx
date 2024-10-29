import React, { useState, createContext, useContext } from 'react';

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const logIn = () => {
    setIsAuthenticated(true)
  }

  const logOut = () => setIsAuthenticated(false)

  return(
    <AuthContext.Provider value={{isAuthenticated, logIn, logOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
