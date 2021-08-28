import { makeStyles, Button } from '@material-ui/core';
import { Theme } from 'constants/themeConst';

const useStyle = makeStyles((theme: Theme) => ({
  white: {
    margin: '0 2rem',
    color: 'white',
    fontWeight: 900,
    fontFamily: 'Sawarabi Mincho, sans-serif',
    '&:hover': {
      background: 'white',
      color: theme.color.navy,
    }
  },
  navy: {
    margin: '0 2rem',
    color: theme.color.navy,
    fontWeight: 900,
    fontFamily: 'Sawarabi Mincho, sans-serif',
    '&:hover': {
      background: theme.color.navy,
      color: 'white',
    }
  },
}))

type NaviButtonProps = {
  content: string,
  color: 'navy' | 'white',
  type: 'button'  | 'submit',
  onClick?: () => void,
}
const NaviButton: React.FC<NaviButtonProps> = ({content, color, type, onClick}) => {
  const classes = useStyle();
  const buttonOnclick = () => {
    if (type === 'button' && onClick) {
      onClick();
    }
  }

  return (
    <Button
      className={classes[color]}
      type={type}
      onClick={buttonOnclick}
    >
      {content}
    </Button>
  )
}
export default NaviButton;
