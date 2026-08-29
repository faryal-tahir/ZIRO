import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import BuilderPage from './pages/BuilderPage'
import PreviewPage from './pages/PreviewPage'
import {AuthLayout, GuestLayout} from './pages/Layout'
import { AlarmClockOffIcon } from 'lucide-react'
const App = () => {
  return (
    <Routes>
      {/* Login Route */}
      <Route element={<GuestLayout/>}>
      <Route path='/login' element= {<AuthPage mode="login" /> } />
      <Route path='/register' element={<AuthPage mode="register" />}/>
      </Route>
    
      {/* Protected Route */}
      <Route element={<AuthLayout/>}>
      <Route path='/' element= {<HomePage /> } />
     <Route path='/builder/:id' element= { <BuilderPage /> } />   
     <Route path='/preview/:id' element= {<PreviewPage />} />
      </Route>
       // Catch All
    <Route path='*' element= {<Navigate to="/"  replace />}/>
    </Routes>

   
  )
}

export default App