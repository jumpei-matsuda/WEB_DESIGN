import React from 'react';
// import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

/** ******************
 * Style
 ******************* */
const useStyles = makeStyles(() => ({
  root: {
    height: '10rem',
    background: '#D5D5D5',
    width: '100%',
  },
  copyright: {
    fontSize: '1.25rem',
    fontFamily: 'Helvetica, Light',
    textAlign: 'center',
    paddingTop: '4rem',
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <p className={classes.copyright}>
        <small>&copy; xxxxxxxxx All right reserve</small>
      </p>
    </Box>
  );
};

export default Footer;
