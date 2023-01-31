
import './App.css'
import NavBar from './components/NabBar'
import Home from './screens/Home'
import Blog from './screens/blog/Blog'
import Products from './screens/Products'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mls from './screens/Mls'
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/mls",
    element: <Mls />,
  },
  {
    path:"/blog",
    element:<Blog />
  }

]);

function App() {
  return (


    <RouterProvider router={router}>
     
  
      
    </RouterProvider> 

  )
}
 


export default App
