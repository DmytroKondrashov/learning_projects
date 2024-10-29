import React from 'react';
import { useAuth } from './context_provider';

const UserStatus = () => {
  const { isAuthenticated, login, logout } = useAuth()

  return(
    <div>
      <h2>User Status</h2>
      <p>{isAuthenticated ? 'Logged in' : 'Logged out'}</p>
      {isAuthenticated ? (
        <button onClick={logout}>Log out</button>
      ) : (
        <button onClick={login}>Log in</button>
      )}
    </div>
  )
}

export default UserStatus
