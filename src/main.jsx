import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './loaders/cartProductsLoader';
import Checkout from './components/Checkout/Checkout';
import LogOut from './components/LogOut/LogOut';
import AuthProvider from './provider/AuthProvider';
import PrivatesRoutes from './routes/PrivatesRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <PrivatesRoutes>
          <Inventory></Inventory>
        </PrivatesRoutes>
      },
      {
        path:'checkout',
        element: <PrivatesRoutes>
          <Checkout></Checkout>
        </PrivatesRoutes>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'logout',
        element:<LogOut></LogOut>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
