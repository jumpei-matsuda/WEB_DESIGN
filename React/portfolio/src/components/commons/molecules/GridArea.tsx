import { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, GridSize } from '@material-ui/core';
import { ImgData } from 'constants/ImageConst';

/** ******************
 * Style
 ******************* */
const useStyles = makeStyles(() => ({
  root: {
    fontSize: '100%',
    color: '#333',
    padding: '5rem 0',
  },
  gridItemCol1: {
    textAlign: 'center',
    maxHeight: '450px',
    maxWidth: '450px',
    position: 'relative',
    padding: '3rem',
  },
  gridItemCol2: {
    textAlign: 'center',
    maxHeight: '500px',
    maxWidth: '500px',
    position: 'relative',
    padding: '3rem',
  },
  gridItemCol3: {
    textAlign: 'center',
    maxHeight: '400px',
    maxWidth: '400px',
    position: 'relative',
    padding: '2rem',
  },
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

export type Cols = 2 | 3;

export type GridAreaProps = {
  cols: Cols;
  imgList: ImgData[];
  isResponsible: boolean;
};

const GridArea: React.FC<GridAreaProps> = (props) => {
  const { cols, imgList, isResponsible } = props;
  const classes = useStyles();
  /**
   * グリッド数
   */
  const xs = useRef<GridSize>(1);
  if (Number.isInteger(12 / cols)) {
    xs.current = (12 / cols) as GridSize;
  }

  return (
    <Grid justify="center" container>
      {imgList.map((img: ImgData) => (
        <Grid
          key={img.id}
          item
          xs={isResponsible ? xs.current : 12}
          className={classes[`gridItemCol${cols}` as keyof typeof classes]}
        >
          {img.title && <span className={classes.imgTitle}>{img.title}</span>}
          <img src={img.img} alt={img.alt} className={classes.img} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridArea;
