import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './Layout'; // or './components/Layout'
import Home from './components/Home/Home.jsx';      // Adjust path if it's in a different folder
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';  
import User from './components/User/User.jsx';
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Github from './components/Github/Github.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children: [
  { 
    path:"",
    element:<Home/>

  },
  {
    path:"about",
    element:<About/>
  },
   {
    path:"contact",
    element:<Contact/>
  },
  {
    path:"user/:userid",
    element:<User/>
  },
  {
    path:"github",
    element:<Github/>
  }
]
}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
