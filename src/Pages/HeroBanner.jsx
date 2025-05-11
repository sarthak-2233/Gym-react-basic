import { Box, Button, Typography } from '@mui/material';
import Banner from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <>
      <Box
        sx={{
          mt: { lg: '212px', xs: '70px' },
          ml: { sm: '50px' },
          position: 'relative',
          p: '20px',
        }}
      >
        <Typography color="#ff2625" fontSize="26px" fontWeight="600">
          Fitness Club
        </Typography>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }}>
          Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px">
          Check out the most effective exercises
        </Typography>
        <Button sx={{ mt: '4px' }} variant="contained" color="error">
          Explore Exercises
        </Button>
        <Typography
          fontWeight="600"
          color="#000"
          sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }}
        >
          Exercise
        </Typography>

        {/* MOBILE image (shown on <1580px screens) */}
        <img
          src={Banner}
          alt="banner"
          className="block lg:hidden w-full mt-6"
        />
      </Box>

      {/* DESKTOP image (shown only on ≥1580px screens) */}
      <img
        src={Banner}
        alt="banner"
        className="hidden lg:block absolute top-0 right-40 object-fill h-full max-w-[500px]"
      />
    </>
  );
};

export default HeroBanner;
