import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading[false])
  }, [dispatch])

  return loading ? (
    <>
      <Outlet />
    </>
  ) : <h1>Loading please wait....</h1>
}

export default App
