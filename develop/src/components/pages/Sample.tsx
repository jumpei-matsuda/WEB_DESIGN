import { useState } from 'react';
import {
  Box,
  Input,
  InputLabel,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    padding: '5rem',
    border: 'solid .5px',
    borderRadius: '5px',
  },
  area: {
    padding: '3rem',
    border: 'solid .5px',
    borderRadius: '5px',
  },
  textLabel: {
    marginBottom: '.5rem',
    fontWeight: 'bold',
    width: 'fit-content'
  },
  textRequired: {
    margin: '0 0 .5rem 2rem',
    fontWeight: 'bold',
    color: 'red',
    width: 'fit-content',
  },
  textField: {
    display: 'block',
    margin: '0 0 2rem',
    border: 'solid .5px',
    borderRadius: '5px',
    padding: '.75rem 1rem',
  },
}));

const Sample: React.VFC = () => {
  const [text, setText] = useState('');
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.area} width='50%' >
        <Box display='flex'>
          <InputLabel className={classes.textLabel} htmlFor='name'>Input Demo</InputLabel>
          <InputLabel className={classes.textRequired} >※必須</InputLabel>
        </Box>
        <Input
          id='name'
          className={classes.textField}
          disableUnderline
          fullWidth
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default Sample;
