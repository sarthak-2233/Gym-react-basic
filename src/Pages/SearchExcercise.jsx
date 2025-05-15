import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchData,exerciseOption } from '../assets/Utils/fetchData';
import HorizontalScrollbar from '../Components/HorizontalScrollbar'
const SearchExcercise = () => {
  const[search,setSearch]=useState('')
  const[exercises,setExercises]=useState([])
  const[bodyParts,setBodyParts]=useState([])
    useEffect(()=>{
      const fetchExercisedata =async()=>{
        const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOption);


        setBodyParts(['all',...bodyPartsData])
      }

      fetchExercisedata()
    },[])


  const handlesearch= async()=>{
      if(search)
      {
        const exerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOption);
        //console.log(exerciseData)
        const searchedExercise =exerciseData.filter((excercise)=> 
          excercise.name.toLocaleLowerCase().includes(search)||
        excercise.target.toLocaleLowerCase().includes(search)||
        excercise.bodyPart.toLocaleLowerCase().includes(search)||
        excercise.equipment.toLocaleLowerCase().includes(search));

        setSearch('')
        setExercises(searchedExercise)
      }
  }
  return (
    <Stack
      alignItems="center"
      textAlign="center"
      justifyContent="center"
      mt="36px"
      p="20px"
    >
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="50px"
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>

      <Box
        mb="72px"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: '900px',
        }}
      >
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px',
            },
            width: { lg: '700px', xs: '200px' },
            background: '#fff',
            borderRadius: '40px',
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder="Search Exercise"
          type='text'
        />

        <Button
          variant="contained"
          sx={{
            height: '56px',
            bgcolor: '#ff2625',
            color: '#fff',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
          }}
          onClick={handlesearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{position:'relative', width:'100%',p:'20px'}}>
          <HorizontalScrollbar data={bodyParts}/>
      </Box>
    </Stack>
  );
};

export default SearchExcercise;
