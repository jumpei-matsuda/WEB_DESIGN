/* eslint-disable react/jsx-props-no-spreading */
import { Controller, Control } from 'react-hook-form';
import { TextField, makeStyles } from '@material-ui/core';
import { InputForm, inputType } from 'constants/commonConstant';

const useStyles = makeStyles(() => ({
  text: {
    display: 'block',
    maxWidth: '20rem',
    margin: '1.5rem 1rem',
  },
  textarea: {
    display: 'block',
    maxWidth: '30rem',
    margin: '1rem',
  }
}));

export type InputTextProps = {
  name: keyof InputForm;
  title: string;
  type: keyof typeof inputType;
  control: Control<InputForm>;
};

const InputText: React.FC<InputTextProps> = ({
  name,
  title,
  type,
  control,
  ...rest
}) => {
  const classes = useStyles();

  const inputClass = type === 'textarea' ? 'textarea' : 'text'

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          className={classes[inputClass]}
          type={type}
          label={title}
          variant="outlined"
          fullWidth
          multiline={type === 'textarea'}
          rows={type === 'textarea' ? 5 : 1}
          InputLabelProps={{
            shrink: true,
          }}
          {...field}
        />
      )}
      {...rest}
    />
  );
};

export default InputText;
