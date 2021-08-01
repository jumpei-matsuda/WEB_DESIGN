/* eslint-disable react/jsx-props-no-spreading */
import { Controller, Control } from 'react-hook-form';
import { TextField, makeStyles } from '@material-ui/core';
import { InputForm } from 'constants/commonConstant';

const useStyles = makeStyles(() => ({
  textField: {
    display: 'block',
    margin: '0 0 2rem',
  },
}));

export type InputTextProps = {
  name: keyof InputForm;
  title: string;
  control: Control<InputForm>;
  required?: boolean;
};

const InputText: React.FC<InputTextProps> = ({
  name,
  title,
  control,
  required,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          className={classes.textField}
          label={title}
          fullWidth
          variant="outlined"
          required={required}
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
