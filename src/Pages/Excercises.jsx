import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log(exercises);

  return (
    <Box
      sx={{ mt: { lg: '110px', xs: '30px' }, p: '20px' }}
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>

      {/* <Stack
        direction="row"
        sx={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.map((exercise, index) => (
          <p key={index}>{exercise.name}</p>
        ))}
      </Stack> */}
    </Box>
  );
};

export default Exercises;
