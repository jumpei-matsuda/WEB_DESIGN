import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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

/**
 * スクロール位置取得
 * @returns
 */
const scrollTop = (): number =>
  Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop,
  );

type HeaderProps = {
  isResponsible: boolean;
};
const Header: React.FC<HeaderProps> = (props) => {
  const { isResponsible } = props;
  const classes = useStyles();
  const history = useHistory();

  const [isTop, setIsTop] = useState<boolean>(false);

  const onScroll = (): void => {
    const position = scrollTop();
    if (position >= 100 && isResponsible) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };
  /**
   * スクロール位置により、ヘッダのスタイルを変更する
   */
  useEffect(() => {
    document.addEventListener('scroll', onScroll);

    return (): void => document.removeEventListener('scroll', onScroll);
  });

  /**
   * メニューリスト
   */
  const headerMenuList: MenuObj[] = [
    { id: 1, label: headerMenu.top.label, url: headerMenu.top.url },
    { id: 2, label: headerMenu.about.label, url: headerMenu.about.url },
    { id: 3, label: headerMenu.works.label, url: headerMenu.works.url },
    { id: 4, label: headerMenu.contact.label, url: headerMenu.contact.url },
  ];

  /**
   * 画面遷移実施処理
   * @param path
   */
  const movePage = (path: string) => {
    history.push(path);
  };

  return (
    <AppBar
      position={isResponsible ? 'fixed' : 'static'}
      className={classes.root + (!isTop ? ` ${classes.backgroundWhite}` : '')}
    >
      <Toolbar className={classes.toolbar}>
        <img
          src={logo}
          alt="logo"
          className={classes.logo + (!isTop ? ` ${classes.large}` : '')}
        />
        {isResponsible && (
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
        )}
      </Toolbar>
      {!isResponsible && (
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
                  {' '}
                  {menu.label}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </AppBar>
  );
};

export default Header;
