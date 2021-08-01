import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { Theme } from 'constants/themeConst';

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
  const classes = useStyles();
  const { isResponsible } = props;

  return (
    <PageTempale isResponsible={isResponsible}>
      <Box className={classes.root}>
        <h1 className={classes.title}>会員情報入力</h1>
        <Box className={classes.formArea}>
          <p>（新規登録）</p>
          <Form />
        </Box>
      </Box>
    </PageTempale>
  );
};

export default SignUpPage;
