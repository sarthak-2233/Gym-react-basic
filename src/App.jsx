import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import ExcerciseDeatil from './Pages/ExcerciseDeatil'

const App = () => {
  return (
    <Box width='400px' sx={{width:{xl :'1448px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/excercise/:id' element={<ExcerciseDeatil/>}/> 
        <Route path='/' element={<Home/>}/> 
      </Routes>
    </Box>
  )
}

export default App