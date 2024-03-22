import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "./store/store.js"
import { Provider } from 'react-redux'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from "./pages/Home.jsx"
import Account from "./pages/Account.jsx"
import { ProtectedLayout } from './components/index.js'
import { RouterProvider } from 'react-router-dom'
import EditPost from "./pages/EditPost.jsx"
import AllPosts from './pages/AllPosts.jsx'
import { createRoutesFromElements, Route } from 'react-router-dom'
import AddPost from './pages/AddPost.jsx'
import Profile from './pages/Profile.jsx'
import Post from './pages/Post.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: '/',
//         element: <HomePage />
//       },
//       {
//         path: '/account',
//         element: (
//           <ProtectedLayout authentication={true}>
//             <Account />
//           </ProtectedLayout>
//         ),
//         children: [
//           {
//             path: "/account/editpost",
//             element: <EditPost />
//           },
//           {
//             path: "/account/allposts",
//             element: <AllPosts />
//           },
//           {
//             path: "/account/dummy",
//             element: <Dummy />
//           }
//         ]
//       },
//       {
//         path: '/post/:slug',
//         element: <Post />
//       },
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path="/">
      <Route element={<HomePage />} path="/" />
      <Route element={(
        <ProtectedLayout authentication={true}>
          <Account />
        </ProtectedLayout>
      )} path="/account">
        <Route element={<Profile />} path="/account" />
        <Route element={<AllPosts />} path="/account/allposts" />
        <Route element={<EditPost />} path="/account/editpost" />
        <Route element={< AddPost />} path="/account/addpost" />
        <Route element={<Post />} path='/account/:slug' />
      </Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
