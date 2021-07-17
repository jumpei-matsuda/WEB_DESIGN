import { makeStyles } from '@material-ui/core/styles';
import { Button, AppBar, Toolbar, Grid, Paper } from '@material-ui/core';
import { MenuObj, headerMenu } from 'constants/CommonConst';

import logo from 'img/sample_logo.jpg';

/** ******************
 * Style
 ******************* */
const useStyles = makeStyles(() => ({
  root: {
    fontSize: '100%',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: 'none',
    transition: '.7s',
    background: 'black',
    color: 'white',
    minHeight: '6rem',
  },
  toolbar: {
    justifyContent: 'space-between',
    boxShadow: 'none',
    padding: '0 10%',
  },
  logo: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '4rem',
    height: '4rem',
    borderRadius: '50%',
    transition: '.7s',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  grid: {
    boxShadow: 'none',
  },
  button: {
    margin: '0 .75rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'none',
    '&:hover': {
      textDecoration: 'line-through',
    },
  },
  paper: {
    padding: '1rem',
    textAlign: 'center',
    borderRadius: 0,
    border: '1px solid',
  },
}));

type HeaderMobileProps = {
  headerMenuList: MenuObj[];
  movePage: (path: string) => void;
};

const HeaderMobile: React.FC<HeaderMobileProps> = (props) => {
  const { headerMenuList, movePage } = props;
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <img
          src={logo}
          alt="logo"
          className={classes.logo}
          role="presentation"
          onClick={() => movePage(headerMenu.top.url)}
        />
      </Toolbar>
      <Grid container className={classes.grid}>
        {headerMenuList.map((menu) => (
          <Grid key={menu.id} item xs={6}>
            <Paper className={classes.paper}>
              <Button
                key={menu.id}
                size="large"
                onClick={() => movePage(menu.url)}
                className={classes.button}
              >
                {menu.label}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </AppBar>
  );
};

export default HeaderMobile;
