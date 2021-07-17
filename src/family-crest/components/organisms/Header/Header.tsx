import React, { useState } from 'react';
import { makeStyles, Box, TextField, Button } from '@material-ui/core';
import { Theme } from 'constants/themeConst';

import logo from 'images/logo.png';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'static',
    background: theme.color.black,
  },
  img: {
    minWidth: '300px',
    width: '20rem',
    backgroundSize: 'cover',
  },
  searchField: {
    display: 'flex',
    height: '100%',
  },
  textField: {
    background: theme.color.white,
    height: '100%',
    minWidth: '200px',
    width: '20rem',
  },
  searchIcon: {
    background: theme.color.gray,
    color: theme.color.white,
    fontSize: '1.675rem',
    height: '2rem',
    width: '2rem',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  conditionList: {
    display: 'flex',
    justifyContent: 'start',
  },
  conditionItem: {
    border: 'none',
    margin: '0 1rem',
    color: theme.color.white,
    fontSize: '1.125rem',
    fontWeight: 900,
    fontFamily: 'Hiragino Kaku Gothic ProN',
  },
  naviList: {
    display: 'flex',
    justifyContent: 'end',
  },
  menuButton: {
    border: `1px solid ${theme.color.white}`,
    margin: '0 1rem',
    color: theme.color.white,
    fontSize: '1.125rem',
    fontFamily: 'Hiragino Kaku Gothic ProN',
  },
}));

export type HeaderProps = {
  isResponsible: boolean;
};

const Header: React.FC<HeaderProps> = (props) => {
  const classes = useStyles();
  const { isResponsible } = props;

  const [keyword, setKeyword] = useState<string>('');

  console.log(isResponsible);

  return (
    <div className={classes.root}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="1rem 2rem"
      >
        <img className={classes.img} src={logo} alt="logo" />
        <Box className={classes.searchField}>
          <TextField
            placeholder="キーワードから検索"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className={classes.textField}
          />
          <i className={`fas fa-search ${classes.searchIcon}`} />
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="1rem 2rem"
      >
        <Box className={classes.conditionList}>
          <Button className={classes.conditionItem}>家紋で絞る</Button>
          <Button className={classes.conditionItem}>名前で絞る</Button>
          <Button className={classes.conditionItem}>出身地で絞る</Button>
        </Box>
        <Box className={classes.naviList}>
          <Button className={classes.menuButton}>ログイン</Button>
          <Button className={classes.menuButton}>新規登録</Button>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
