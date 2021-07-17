import React, { useRef } from 'react';
import { ImgData } from 'constants/ImageConst';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, GridSize } from '@material-ui/core';
import Title from 'components/commons/Title';
import MoreButton from 'components/commons/MoreButton';

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

/** ******************
 * type
 ******************* */
export type Cols = 2 | 3;
type SubMenuAreaProp = {
  title: string;
  cols: Cols;
  imgList: ImgData[];
  nextPage: string | '#';
  isResponsible: boolean;
};

/**
 * トップページ サブエリア
 * @param props
 * @returns
 */
const SubMenuArea: React.FC<SubMenuAreaProp> = (props) => {
  const classes = useStyles();
  const { title, cols, imgList, nextPage, isResponsible } = props;

  /**
   * グリッド数
   */
  const xs = useRef<GridSize>(1);
  if (Number.isInteger(12 / cols)) {
    xs.current = (12 / cols) as GridSize;
  }

  return (
    <Box className={classes.root}>
      <Title title={title} />
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
      <MoreButton nextPage={nextPage} />
    </Box>
  );
};

export default SubMenuArea;
