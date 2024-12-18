import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Careers from './pages/Careers.jsx'
import Service from './pages/Service.jsx'
import Contact from './pages/Contact.jsx'
import { ABOUT_LINK, CAREERS_LINK, CONTACT_LINK, SERVICES_LINK } from './utils/constants.js'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: ABOUT_LINK,
        element: <About />,
      },
      {
        path: CAREERS_LINK,
        element: <Careers />,
      },
      {
        path: SERVICES_LINK,
        element: <Service />,
      },
      {
        path: CONTACT_LINK,
        element: <Contact />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
