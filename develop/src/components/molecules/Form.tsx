/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { makeStyles, Button } from '@material-ui/core';
import { InputForm, defaultValues } from 'constants/commonConstant';
import { Theme } from 'constants/themeConst';

import InputText from 'components/atoms/InputText';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '2rem 1rem',
    width: '75%',
  },
  text: {
    border: 'solid',
  },
  submit: {
    fontSize: '1.5rem',
    color: theme.color.white,
    padding: '.5rem 3rem',
    background: theme.color.rightRed,
    border: `solid ${theme.color.rightRed}`,
    borderRadius: 0,
    '&:hover': {
      color: theme.color.rightRed,
    },
  },
}));

const Form: React.FC = () => {
  const classes = useStyles();

  const { handleSubmit, control } = useForm<InputForm>({ defaultValues });
  const onSubmit: SubmitHandler<InputForm> = (data) => {
    console.log(data);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <InputText name="name" title="ニックネーム" control={control} required />
      <InputText
        name="mail"
        title="メールアドレス"
        control={control}
        required
      />
      <InputText
        name="password"
        title="パスワード"
        control={control}
        required
      />
      <InputText
        name="passwordConf"
        title="パスワード(確認)"
        control={control}
        required
      />
      <Button className={classes.submit} type="submit">
        会員登録
      </Button>
    </form>
  );
};

export default Form;
