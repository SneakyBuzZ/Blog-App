import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "./store/store.js"
import { Provider } from 'react-redux'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import Account from "./pages/Account.jsx"
import Post from "./pages/Post.jsx"
import { ProtectedLayout } from './components/index.js'
import { RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/login',
        element: (
          <ProtectedLayout authentication={false}>
            <Login />
          </ProtectedLayout>
        )
      },
      {
        path: '/signup',
        element: (
          <ProtectedLayout authentication={false}>
            <Signup />
          </ProtectedLayout>
        )
      },
      {
        path: '/account',
        element: (
          <ProtectedLayout authentication={true}>
            <Account />
          </ProtectedLayout>
        )
      },
      {
        path: '/post/:slug',
        element: <Post />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
