import Home from './component/Home'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Checkout from './component/Checkout'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/checkout',
    element: <Checkout/>,
  },
])

function App() {
  return (
    <div  className='screen'>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
