import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from './HeroBanner'
import SearchExcercise from './SearchExcercise'
import Excercises from './Excercises'
const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExcercise/>
      <Excercises/>
    </Box>
  )
}

export default Home