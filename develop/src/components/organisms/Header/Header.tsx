import React, { useState } from 'react';
import { makeStyles, Box, TextField, Button } from '@material-ui/core';
import { Theme } from 'constants/themeConst';
import { useHistory } from 'react-router';
import { conditionList, naviList } from 'constants/pageSourceConst';

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
  headerLine: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
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
  onlyDisp: {
    width: '100%',
    backgroundSize: 'cover',
  },
}));

export type HeaderProps = {
  isResponsible: boolean;
  header?: boolean;
};

const Header: React.FC<HeaderProps> = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { isResponsible, header } = props;

  const [keyword, setKeyword] = useState<string>('');

  const movePage = (url = '/') => {
    console.log(url);
    history.push(url);
  };

  console.log(isResponsible);

  return (
    <>
      {header ? (
        <div className={classes.root}>
          <Box className={classes.headerLine}>
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
          <Box className={classes.headerLine}>
            <Box className={classes.conditionList}>
              {conditionList.map((condition) => (
                <Button
                  key={condition.id}
                  className={classes.conditionItem}
                  onClick={() => movePage(condition.url)}
                >
                  {condition.content}
                </Button>
              ))}
            </Box>
            <Box className={classes.naviList}>
              {naviList.map((navi) => (
                <Button
                  key={navi.id}
                  className={classes.menuButton}
                  onClick={() => movePage(navi.url)}
                >
                  {navi.content}
                </Button>
              ))}
            </Box>
          </Box>
        </div>
      ) : (
        <img className={classes.onlyDisp} src={logo} alt="logo" />
      )}
    </>
  );
};

export default Header;
