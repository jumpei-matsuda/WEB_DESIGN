/* eslint-disable react/jsx-props-no-spreading */
import { Controller, Control } from 'react-hook-form';
import {
  makeStyles,
  Box,
  Input,
  InputLabel,
} from '@material-ui/core';
import { InputForm, inputType } from 'constants/commonConstant';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles(() => ({
  textLabel: {
    marginBottom: '.5rem',
    fontWeight: 'bold',
    width: 'fit-content'
  },
  textRequired: {
    margin: '0 0 .5rem 2rem',
    fontWeight: 'bold',
    color: 'red',
    width: 'fit-content',
  },
  textField: {
    display: 'block',
    margin: '0 0 2rem',
    border: 'solid .5px',
    borderRadius: '5px',
    padding: '.75rem 1rem',
  },
}));

export type InputTextProps = {
  name: keyof InputForm;
  title: string;
  control: Control<InputForm>;
  type?: keyof typeof inputType | 'text',
  required?: boolean;
};

const InputText: React.FC<InputTextProps> = ({
  name,
  title,
  control,
  type,
  required,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <>
      {(type === 'text' || type === 'mail' || type === 'password') && (
        <>
          <Box display='flex'>
            <InputLabel className={classes.textLabel} htmlFor='name'>{title}</InputLabel>
            {required && (
              <InputLabel className={classes.textRequired} >※必須</InputLabel>
            )}
          </Box>
          <Controller
            control={control}
            name={name}
            render={({ field }) => (
              <Input
                id='name'
                type={type}
                className={classes.textField}
                disableUnderline
                fullWidth
                required={required}
                {...field}
              />
            )}
            {...rest}
          />
        </>
      )}
      {type === 'date' && (
        <>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
              control={control}
              name={name}
              render={({ field }) => (
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  margin="normal"
                  id="date-picker-inline"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                  {...field}
                />
              )}
              {...rest}
            />
          </MuiPickersUtilsProvider>
        </>
      )}
    </>
  );
};

export default InputText;
