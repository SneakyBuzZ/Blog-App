import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header, Home } from './components';

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
      <Header />
      <Home />
      <Footer />
    </>
  ) : null
}

export default App
