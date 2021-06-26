import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';

/** ******************
 * Style
 ******************* */
const useStyles = makeStyles(() => ({
  button: {
    fontSize: '1.25rem',
    fontFamily: 'Helvetica, Light',
    textTransform: 'none',
    '&:hover': {
      background: 'none',
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      borderTop: 'solid 1px',
      borderLeft: 'solid 1px',
      height: '1rem',
      width: '2rem',
      top: '.3rem',
      left: 0,
      transition: '.3s',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      borderBottom: 'solid 1px',
      borderRight: 'solid 1px',
      height: '1rem',
      width: '2rem',
      bottom: '.3rem',
      right: 0,
      transition: '.3s',
    },
    '&:hover::before': {
      position: 'absolute',
      marginBottom: '1rem',
      top: '.3rem',
      left: 0,
      width: '0',
      height: '0',
      border: '0px solid',
    },
    '&:hover::after': {
      position: 'absolute',
      marginTop: '1rem',
      bottom: '.3rem',
      right: 0,
      width: '0',
      height: '0',
      border: '0px solid',
    },
  },
}));

/** ******************
 * Type
 ******************* */
type MoreButtonProps = {
  nextPage: string;
};

const MoreButton: React.FC<MoreButtonProps> = ({ nextPage }) => {
  const classes = useStyles();
  const history = useHistory();

  /**
   * 画面遷移実施処理
   * @param path
   */
  const movePage = (path: string) => {
    history.push(path);
  };

  return (
    <Box textAlign="right" padding="1rem 0">
      <Button className={classes.button} onClick={() => movePage(nextPage)}>
        More
      </Button>
    </Box>
  );
};

export default MoreButton;
