import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import LoginPage from './pages/LoginPage';
import SignupPage from './features/auth/components/Signup';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ProductDetail from './features/product/components/ProductDetail';
import ProductDetailPage from './pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <CheckoutPage></CheckoutPage>,
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage></ProductDetailPage>,
  },
]);



function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
