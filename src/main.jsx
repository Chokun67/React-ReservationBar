import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Signin from './pages/login.jsx'
import User from './pages/User.jsx'
import Reserve from './pages/Reserve.jsx'
import Music from './pages/music.jsx'  

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "login",
    element: <Signin/>
  },
  {
    path: "user",
    element: <User/>
  },
  {
    path: "reserve",
    element: <Reserve/>
  },
  {
    path: "music",
    element: <Music/>
  }
]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
