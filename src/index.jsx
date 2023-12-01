import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import AuthLayout from './layout/authLayout';
import { AuthProvider } from './context/authContext';
import MainLayout from './layout/mainLayout';
import Home from './pages/home';

const container = document.getElementById('app');
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: 'about',
    element: <div>About</div>,
  },
  {
    path: '*',
    element: <div>Page not found</div>,
  },
]);

root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
);
