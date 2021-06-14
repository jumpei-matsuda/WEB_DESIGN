/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import PageWrapper from 'components/commons/templates/PageWrapper';
import {
  headerMenu,
  FormInput,
  formInputName,
  formInputTitle,
} from 'constants/CommonConst';
import InputText from 'components/commons/atoms/InputText';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

/** ******************
 * Style
 ******************* */
const useStyles = makeStyles(() => ({
  container: {
    margin: '5rem auto',
    width: '60%',
  },
  submit: {
    margin: '1rem',
  },
}));

export type ContactProps = {
  isResponsible: boolean;
};

const Contact: React.FC<ContactProps> = (props) => {
  const { isResponsible } = props;
  const classes = useStyles();

  // form
  const { register, handleSubmit } = useForm<FormInput>();
  const onSubmit = (data: FormInput) => console.log(data);

  return (
    <PageWrapper title={headerMenu.contact.label} isResponsible={isResponsible}>
      <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
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
    </PageWrapper>
  );
};

export default Contact;
