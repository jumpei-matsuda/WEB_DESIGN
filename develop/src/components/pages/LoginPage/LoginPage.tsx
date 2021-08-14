import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { SubmitHandler } from 'react-hook-form';
import { Box, makeStyles } from '@material-ui/core';

import { Theme } from 'constants/themeConst';
import { InputForm, inputItemList } from 'constants/commonConstant';
import { useAuth } from 'contexts/auth';

import PageTempale from 'components/templates/PageTempale';
import Form from 'components/molecules/Form';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '55%',
    margin: 'auto',
    background: theme.color.white,
  },
  title: {
    textAlign: 'center',
    fontSize: '5rem',
    padding: '2.25rem 0',
  },
  formArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 5rem',
    '& p': {
      fontSize: '2.25rem',
      padding: '1rem 0 0',
    },
  },
}));

export type LoginPageProps = {
  isResponsible: boolean;
};

const LoginPage: React.FC<LoginPageProps> = (props) => {
  const { isResponsible } = props;

  const classes = useStyles();
  const auth = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (auth.user) {
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const onSubmit: SubmitHandler<InputForm> = (data) => {
    auth?.signin(data.mail, data.password);
  };

  // ニックネームとパスワードのみ表示する
  const loginItemList = inputItemList.filter((item) => item.name === 'mail' || item.name === 'password')

  return (
    <PageTempale isResponsible={isResponsible} background='black'>
      <Box className={classes.root}>
        <h1 className={classes.title}>会員情報入力</h1>
        <Box className={classes.formArea}>
          <p>（ログイン）</p>
          <Form onSubmit={onSubmit} inputItemList={loginItemList} button='ログイン' />
        </Box>
      </Box>
    </PageTempale>
  );
};

export default LoginPage;
