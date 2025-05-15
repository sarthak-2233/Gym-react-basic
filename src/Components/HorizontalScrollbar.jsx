import React from 'react';
import { Box } from '@mui/material';
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import '../App.css';

const LeftArrow = () => {
  const { scrollPrev } = React.useContext(VisibilityContext);
  return (
    <Box onClick={() => scrollPrev()} sx={{ cursor: 'pointer', mr: 2 }}>
      <img src={LeftArrowIcon} alt="left-arrow" style={{ width: 30 }} />
    </Box>
  );
};

const RightArrow = () => {
  const { scrollNext } = React.useContext(VisibilityContext);
  return (
    <Box onClick={() => scrollNext()} sx={{ cursor: 'pointer', ml: 2 }}>
      <img src={RightArrowIcon} alt="right-arrow" style={{ width: 30 }} />
    </Box>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <Box
      className="hide-scrollbar"
      sx={{
        width: '100%',
        overflowX: 'auto',
        overflowY: 'hidden',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      <ScrollMenu LeftArrow={<LeftArrow />} RightArrow={<RightArrow />}>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}  // <-- important: camelCase "itemId"
            title={item.id || item}
            m="0 20px"
            sx={{ display: 'inline-block', whiteSpace: 'nowrap' }}
          >
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
};

export default HorizontalScrollbar;
