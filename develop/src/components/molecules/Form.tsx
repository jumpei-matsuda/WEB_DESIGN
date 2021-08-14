/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { makeStyles, Button } from '@material-ui/core';
import { InputForm, defaultValues, InputItemList } from 'constants/commonConstant';
import { Theme } from 'constants/themeConst';

import InputText from 'components/atoms/InputText';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '2rem 1rem',
    width: '75%',
    textAlign: 'center',
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

type FormProps = {
  inputItemList: InputItemList[],
  onSubmit: (data: InputForm) => void;
  button: string;
}

const Form: React.FC<FormProps> = (props) => {
  const { onSubmit, inputItemList, button } = props;

  const classes = useStyles();
  const { handleSubmit, control } = useForm<InputForm>({ defaultValues });

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      {inputItemList.map((item) => (
        (item.type === 'text' || item.type === 'password' || item.type === 'mail' || item.type === 'date') && (
          <InputText
            key={item.id}
            name={item.name}
            title={item.title ?? ''}
            type={item.type}
            control={control}
            required={item.required}
          />
        )
      ))}
      <Button className={classes.submit} type="submit">
        {button}
      </Button>
    </form>
  );
};

export default Form;
