import { makeStyles } from '@material-ui/core/styles';
import { Button, AppBar, Toolbar } from '@material-ui/core';
import { MenuObj } from 'constants/CommonConst';
import logo from 'img/sample_logo.jpg';
import { useScroll } from '../../../../hooks/useScroll';

/** ******************
 * Style
 ******************* */
export const useStyles = makeStyles(() => ({
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
  },
  large: {
    width: '6rem',
    height: '6rem',
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
  backgroundWhite: {
    background: 'white',
    opacity: 0.7,
    minHeight: '10rem',
  },
  white: {
    color: 'white',
  },
  black: {
    color: 'black',
  },
  margin: {
    margin: '1rem',
  },
}));

type HeaderDesktopProps = {
  headerMenuList: MenuObj[];
  movePage: (path: string) => void;
};

const HeaderDesktop: React.FC<HeaderDesktopProps> = (props) => {
  const { headerMenuList, movePage } = props;

  const classes = useStyles();
  const isTop = useScroll();

  return (
    <AppBar
      position="fixed"
      className={classes.root + (!isTop ? ` ${classes.backgroundWhite}` : '')}
    >
      <Toolbar className={classes.toolbar}>
        <img
          src={logo}
          alt="logo"
          className={classes.logo + (!isTop ? ` ${classes.large}` : '')}
        />
        <div>
          {headerMenuList.map((menu) => (
            <Button
              key={menu.id}
              size="large"
              onClick={() => movePage(menu.url)}
              className={
                classes.button +
                (!isTop ? ` ${classes.black}` : ` ${classes.white}`)
              }
            >
              {menu.label}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderDesktop;
