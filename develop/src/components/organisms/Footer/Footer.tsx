import { makeStyles, Box } from '@material-ui/core';
import { useHistory } from 'react-router';
import { headerSourceList } from 'constants/pageSourceConst';
import { Theme } from 'constants/themeConst';

import NaviButton from 'components/atoms/NaviButton';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100v%',
    height: '10rem',
    background: '#061b94',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  navi: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  },
  naviItem: {
    margin: '0 2rem',
    color: 'white',
    fontWeight: 900,
    fontFamily: 'Sawarabi Mincho, sans-serif',
    '&:hover': {
      background: 'white',
      color: theme.color.navy,
    }
  },
}));

const Footer: React.VFC = () => {
  const classes = useStyles();
  const history = useHistory();

  const movePage = (url: string) => () => {
    history.push(url);
  };

  return (
    <Box className={classes.root}>
      <ul className={classes.navi}>
        {headerSourceList.map((souce) => (
          <NaviButton
            key={souce.id}
            content={souce.content}
            type='button'
            color='white'
            onClick={movePage(souce.url)}
          />
        ))}
      </ul>
      <small>&copy; As Engineer All right reserve</small>
    </Box>
  );
};

export default Footer;
