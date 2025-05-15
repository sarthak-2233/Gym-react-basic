import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from './HeroBanner'
import SearchExcercise from './SearchExcercise'
import Excercises from './Excercises'
const Home = () => {
  const[exercises,setExercises]=useState('all')
  const[bodyPart,setbodyPart]=useState([])

  return (
    <Box>
      <HeroBanner/>
      <SearchExcercise 
      setExercises={setExercises}
      bodyPart={bodyPart}
      setbodyPart={setbodyPart}
      />
      <Excercises
      exercises={exercises}
        setExercises={setExercises}
      bodyPart={bodyPart}

      />
    </Box>
  )
}

export default Home