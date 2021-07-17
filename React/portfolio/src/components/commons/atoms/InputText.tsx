/* eslint-disable react/jsx-props-no-spreading */
import { useForm, Controller, UseFormRegisterReturn } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { FormInputName } from 'constants/CommonConst';

const useStyles = makeStyles(() => ({
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
}));

type InputTextProps = {
  title: string;
  name: keyof FormInputName;
  type?: 'textArea';
  require?: boolean;
  register: UseFormRegisterReturn;
};

const InputText: React.FC<InputTextProps> = (props) => {
  const { title, name, type, register } = props;
  const classes = useStyles();

  // form
  const { control } = useForm<FormInputName>();

  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <TextField
          className={type === 'textArea' ? classes.textArea : classes.textField}
          multiline={type === 'textArea'}
          rows={type === 'textArea' ? 10 : 1}
          variant="outlined"
          label={title}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          {...register}
        />
      )}
    />
  );
};

export default InputText;
