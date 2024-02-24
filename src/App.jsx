import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"

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
    <div className=" w-full my-10 text-3xl text-center bg-stone-900">MEGA BLOG APP</div>
  ) : null
}

export default App
