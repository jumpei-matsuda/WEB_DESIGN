/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  textField: {
    display: 'block',
    maxWidth: '20rem',
    margin: '1rem',
    border: 'solid 1px',
  },
  textArea: {
    display: 'block',
    width: '100%',
    margin: '1rem',
  },
}));

export type SampleInput = {
  company: string;
  name: string;
  kana: string;
  mailAdress: string;
  phone: string;
  memo: string;
};

type SampleFormProps = {
  title: string;
  name: keyof SampleInput;
  type?: 'textArea';
};

export const SampleForm: React.FC<SampleFormProps> = (props) => {
  const { title, name, type } = props;
  const classes = useStyles();

  const { register } = useForm<SampleInput>();

  return (
    <>
      <label htmlFor={name}>{title}</label>
      <input
        className={type === 'textArea' ? classes.textArea : classes.textField}
        type="text"
        {...register(name)}
      />
    </>
  );
};
