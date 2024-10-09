import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Home} from './pages'

const App = () => {
    const router = createBrowserRouter([
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/about',
        element: <Home/>
      },
      {
        path:'/projects',
        element: <Home/>
      },
      {
        path:'/events',
        element: <Home/>
      },
      {
        path:'/blog',
        element: <Home/>
      },
      {
        path:'/contact',
        element: <Home/>
      },
    ])

  return (
    <RouterProvider router={router} />
  )
}

export default App