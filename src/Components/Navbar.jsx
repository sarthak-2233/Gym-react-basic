import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'
// using material ui for perfect structure 
const Navbar = () => {
  return (
    <Stack 
      direction='row'
      justifyContent='space-around' sx={{gap:{sm:'122px',xs:'40px'},mt:{sm:"32px" ,xs:"20px"},justifyContent:'none'}}
      px='20px'
    >
      <Link to='/'>
      <img src={Logo} className='w-[60px] h-[48px] mx-[20px] my-[0px]' />
      </Link>

      <Stack 
        direction='row'
         gap='40px'
         fontSize='24px'
         alignItems='flex-end'
      >
        <Link to='/' className='decoration-none text-[#3A1212] border-b-2 border-[#FF2625]  '>
        Home
        </Link>
        <a href='#excercises' className='decoration-none text-[#3A1212]'>
          Excercises
        </a>
      </Stack>
    </Stack>
  )
}

export default Navbar