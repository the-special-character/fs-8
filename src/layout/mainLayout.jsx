import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/authContext'

function MainLayout() {
   const { user , logout} =  useAuth();

   if(!user) {
    return <Navigate to="/auth" />
   }

  return (
    <div>
        <h1>Dashboard</h1>
        <Outlet />
        <button type='button' onClick={logout}>Logout</button>
    </div>
  )
}

export default MainLayout