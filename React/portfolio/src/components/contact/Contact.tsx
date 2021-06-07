/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Header from 'components/commons/Header';
import Footer from 'components/commons/Footer';
import Title from 'components/commons/Title';
import {
  FormInput,
  formInputName,
  formInputTitle,
} from 'constants/CommonConst';
import InputText from 'components/commons/InputText';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';

/** ******************
 * Style
 ******************* */
const useStyles = makeStyles(() => ({
  root: {
    fontSize: '100%',
    fontFamily: 'Helvetica, Light',
    position: 'relative',
    top: '6rem',
  },
  background: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
  },
  container: {
    margin: '5rem auto',
    width: '60%',
  },
  textField: {
    display: 'block',
    maxWidth: '20rem',
    margin: '1rem',
  },
  textArea: {
    display: 'block',
    width: '100%',
    margin: '1rem',
  },
  submit: {
    margin: '1rem',
  },
}));

type ContactProps = {
  title: string;
  isResponsible: boolean;
};

const Contact: React.FC<ContactProps> = (props) => {
  const { title, isResponsible } = props;
  const classes = useStyles();

  // form
  const { register, handleSubmit } = useForm<FormInput>();
  const onSubmit = (data: FormInput) => console.log(data);

  /**
   * 画面遷移時スクロール位置をトップに戻す
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className={classes.root}>
      <Header isResponsible={isResponsible} />
      <Box className={classes.container}>
        <Title title={title} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputText
            title={formInputTitle.company}
            name={formInputName.company}
            register={register(formInputName.company, {
              required: { value: true, message: '必須項目です' },
            })}
          />
          <InputText
            title={formInputTitle.name}
            name={formInputName.name}
            register={register(formInputName.name)}
          />
          <InputText
            title={formInputTitle.kana}
            name={formInputName.kana}
            register={register(formInputName.kana)}
          />
          <InputText
            title={formInputTitle.mailAdress}
            name={formInputName.mailAdress}
            register={register(formInputName.mailAdress)}
          />
          <InputText
            title={formInputTitle.phone}
            name={formInputName.phone}
            register={register(formInputName.phone)}
          />
          <InputText
            title={formInputTitle.memo}
            name={formInputName.memo}
            type="textArea"
            register={register(formInputName.memo)}
          />
          <Button className={classes.submit} variant="contained" type="submit">
            送信
          </Button>
        </form>
      </Box>
      <Footer />
    </Box>
  );
};

export default Contact;
