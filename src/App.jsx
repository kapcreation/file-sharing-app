import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Container } from '@mui/material'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

export default function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Container maxWidth='lg' sx={{ py: 2 }}>
          <Outlet />
        </Container>
      </>
    )
  }

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route 
              index
              element={<Home />}
            />
            <Route
              path='rooms/:roomId'
              element={<Dashboard />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
