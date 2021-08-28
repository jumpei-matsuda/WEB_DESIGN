import { makeStyles, Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { headerSourceList } from 'constants/pageSourceConst';
import logo from 'images/logo.svg';
import { theme } from 'constants/themeConst';

import NaviButton from 'components/atoms/NaviButton';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '5rem',
    background: 'white',
    zIndex: 2,
    display: 'flex',
    position: 'fixed',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 5%',
    transition: '0.5s',
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 0.8,
    },
  },
  navi: {
    display: 'flex',
    flexDirection: 'row',
    height: 'fit-content',
  },
  logo: {
    width: '15rem',
    height: 'fit-content',
    padding: '5px',
    transition: '.5s',
    '&:hover': {
      cursor: 'pointer',
      background: theme.color.gray,
      color: 'white',
      borderRadius: '4px',
    },
  },
  button: {
    backgroundColor: '#061b94',
    color: '#fff',
    border: 'solid #061b94',
    borderRadius: '30px',
    padding: '.5rem',
    fontFamily: 'serif',
    '&:hover': {
      color: '#061b94',
      background: '#f3f3f3',
    },
  },
}));

const Header: React.VFC = () => {
  const classes = useStyles();
  const history = useHistory();

  const movePage = (url: string) => () => {
    history.push(url);
  };

  return (
    <Box className={classes.root}>
      <Box display="flex" justifyContent="start" alignItems="center">
        <img
          className={classes.logo}
          src={logo}
          alt="logo"
          role="presentation"
          onClick={movePage('/')}
        />
        <ul className={classes.navi}>
          {headerSourceList.map((source) => (
            <NaviButton
              key={source.id}
              content={source.content}
              type='button'
              color='navy'
              onClick={movePage(source.url)}
          />
          ))}
        </ul>
      </Box>
      <Button className={classes.button}>無料体験レッスン</Button>
    </Box>
  );
};

export default Header;
