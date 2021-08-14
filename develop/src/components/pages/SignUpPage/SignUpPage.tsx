import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { SubmitHandler } from 'react-hook-form';
import { Theme } from 'constants/themeConst';
import { auth } from 'configure/firebase';
import { InputForm, inputItemList } from 'constants/commonConstant';

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

export type SignUpPageProps = {
  isResponsible: boolean;
};

const SignUpPage: React.FC<SignUpPageProps> = (props) => {
  const { isResponsible } = props;

  const classes = useStyles();

  const onSubmit: SubmitHandler<InputForm> = (data) => {
    if ((!data.password || !data.passwordConf) || (data.password !== data.passwordConf)) {
      console.log('パスワードが正しく入力されていません。')

      return;
    }

    auth.createUserWithEmailAndPassword(data.mail, data.password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const onSubmit: SubmitHandler<InputForm> = (data) => {
  //   if ((!data.password || !data.passwordConf) || (data.password !== data.passwordConf)) {
  //     console.log('パスワードが正しく入力されていません。')

  //     return;
  //   }
  //   console.log(data);
  // }

  return (
    <PageTempale isResponsible={isResponsible} background='black'>
      <Box className={classes.root}>
        <h1 className={classes.title}>会員情報入力</h1>
        <Box className={classes.formArea}>
          <p>（新規登録）</p>
          <Form onSubmit={onSubmit} inputItemList={inputItemList} button='会員登録' />
        </Box>
      </Box>
    </PageTempale>
  );
};

export default SignUpPage;
