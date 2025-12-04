import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import Dashboard from './P-Dashboard/Dashboard.jsx'
import Login from './P-Login/Login.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Login />} />
      <Route path='/dashboard' element = {<Dashboard />} />
    </Routes>
  </BrowserRouter>
)
