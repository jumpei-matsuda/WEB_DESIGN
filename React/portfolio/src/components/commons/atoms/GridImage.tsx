import { makeStyles } from '@material-ui/core/styles';
import { ImgData } from 'constants/ImageConst';

/** ******************
 * Style
 ******************* */
const useStyles = makeStyles(() => ({
  img: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover',
    height: '100%',
    width: '100%',
  },
  imgTitle: {
    position: 'absolute',
    background: 'white',
    right: '3rem',
    bottom: '3rem',
    padding: '1rem',
  },
}));

export type GridImageProps = {
  image: ImgData;
};

const GridImage: React.FC<GridImageProps> = ({ image }) => {
  const classes = useStyles();

  return (
    <>
      {image.title && <span className={classes.imgTitle}>{image.title}</span>}
      <img src={image.img} alt={image.alt} className={classes.img} />
    </>
  );
};

export default GridImage;
