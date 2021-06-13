import { ImgData } from 'constants/ImageConst';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Title from 'components/commons/atoms/Title';
import GridArea from 'components/commons/molecules/GridArea';
import MoreButton from 'components/commons/atoms/MoreButton';

/** ******************
 * Style
 ******************* */
const useStyles = makeStyles(() => ({
  root: {
    fontSize: '100%',
    color: '#333',
    padding: '5rem 0',
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

  return (
    <Box className={classes.root}>
      <Title title={title} />
      <GridArea imgList={imgList} cols={cols} isResponsible={isResponsible} />
      <MoreButton nextPage={nextPage} />
    </Box>
  );
};

export default SubMenuArea;
