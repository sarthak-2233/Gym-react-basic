import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  const isSelected = bodyPart === item;

  return (
    <Stack
      onClick={() => setBodyPart(item)}
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: '#fff',
        borderRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '24px',
        border: isSelected ? '4px solid transparent' : '4px solid transparent',
        borderTop: isSelected ? '4px solid #ff2625' : '4px solid transparent',
        boxShadow: isSelected ? '0px 4px 20px rgba(0, 0, 0, 0.1)' : '',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          backgroundColor: '#ffe5e5',
          borderTop: '4px solid #ff2625',
          transform: 'scale(1.1)',
          boxShadow: '0px 6px 30px rgba(255, 38, 37, 0.3)',
        },
      }}
    >
      <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
      <Typography
        textTransform="capitalize"
        fontWeight="bold"
        color="#3A1212"
        fontSize="24px"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
