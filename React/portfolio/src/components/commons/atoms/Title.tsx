import { makeStyles } from '@material-ui/core/styles';
import underline from 'img/underline.svg';

const useStyles = makeStyles(() => ({
  title: {
    position: 'static',
    textAlign: 'center',
    padding: '2rem 0',
    '& h1': {
      fontSize: '3rem',
    },
    '& img': {
      marginTop: '-50px',
    },
  },
}));

type TitleProps = {
  title: string;
};

const Title: React.FC<TitleProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.title}>
      <h1>{title}</h1>
      <img src={underline} alt="underline" />
    </div>
  );
};

export default Title;
