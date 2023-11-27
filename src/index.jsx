import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import AuthLayout from './layout/authLayout';

const container = document.getElementById('app');
const root = createRoot(container);

const router = createBrowserRouter([
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
            index: true,
            element: <Login />
        },
        {
            path: 'register',
            element: <Register />
        }
      ]
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);
  


root.render( <RouterProvider router={router} />);
