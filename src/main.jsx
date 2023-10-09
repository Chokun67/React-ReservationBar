import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Signin from './pages/login.jsx'
import Signup from './pages/Register.jsx'
import Reserve from './pages/Reserve.jsx' 

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
    path: "register",
    element: <Signup/>
  },
  {
    path: "reserve",
    element: <Reserve/>
  }
]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
