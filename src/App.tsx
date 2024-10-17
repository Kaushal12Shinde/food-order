import Home from './component/Home'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Checkout from './component/Checkout'
import Navbar from './component/Navbar'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/checkout',
    element: <Checkout/>,
  },
  {
    path:'/newpage',
    element:<Navbar/>,
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
