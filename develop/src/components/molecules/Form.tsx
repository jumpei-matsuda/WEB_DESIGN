/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { makeStyles, Button } from '@material-ui/core';
import { InputForm, defaultValues } from 'constants/commonConstant';

import InputText from 'components/atoms/InputText';
import { theme } from 'constants/themeConst';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    padding: '2rem 1rem',
  },
  text: {
    border: 'solid',
  },
  button: {
    color: 'white',
    background: theme.color.navy,
    margin: '1rem',
    border: `2px solid ${theme.color.navy}`,
    fontFamily: 'serif',
    '&:hover': {
      color: theme.color.navy,
    }
  }
}));

const Form: React.FC = () => {
  const classes = useStyles();

  const { handleSubmit, control } = useForm<InputForm>({ defaultValues });
  const onSubmit: SubmitHandler<InputForm> = (data) => {
    console.log(data);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <InputText name="name" title="お名前" control={control} type='text' />
      <InputText name="kana" title="かな" control={control} type='text' />
      <InputText name="mail" title="メールアドレス" control={control} type='mail' />
      <InputText name="tel" title="電話番号" control={control} type='text' />
      <InputText name="content" title="お問い合わせ内容" control={control} type='textarea' />
      <Button className={classes.button} type="submit">送信</Button>
    </form>
  );
};

export default Form;
