import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';
import topArrow from 'img/topArrow.svg';

/** ******************
 * Style
 ******************* */
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: '5rem 0',
  },
  button: {
    border: 'none',
    background: 'none',
  },
}));

/** ******************
 * Type
 ******************* */
type ToTopButtonProps = {
  scrollToTop: () => void;
};

const ToTopButton: React.FC<ToTopButtonProps> = ({ scrollToTop }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Button type="button" onClick={() => scrollToTop()}>
        <img src={topArrow} alt="topArrow" />
      </Button>
    </Box>
  );
};

export default ToTopButton;
