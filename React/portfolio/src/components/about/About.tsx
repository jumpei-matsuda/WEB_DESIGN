import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PageWrapper from 'components/commons/templates/PageWrapper';
import GridImage from 'components/commons/atoms/GridImage';

import { headerMenu } from 'constants/CommonConst';
import { ImgData, imgList } from 'constants/ImageConst';

/** ******************
 * Style
 ******************* */
const useStyles = makeStyles(() => ({
  containerDesktop: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    fontSize: '100%',
    fontFamily: 'Helvetica, Light',
    position: 'relative',
    padding: '2rem',
    maxWidth: '500px',
  },
}));

export type AboutProps = {
  isResponsible: boolean;
};

const About: React.FC<AboutProps> = ({ isResponsible }) => {
  const classes = useStyles();

  /**
   * Aboutページ画像リスト
   */
  const aboutImgList: ImgData[] = [
    { id: 1, ...imgList.mei },
    { id: 2, ...imgList.jumpei },
  ];

  return (
    <PageWrapper title={headerMenu.about.label} isResponsible={isResponsible}>
      <Box className={!isResponsible ? classes.containerDesktop : ''}>
        {aboutImgList.map((img) => (
          <Box className={classes.image} key={img.id}>
            <GridImage image={img} />
          </Box>
        ))}
      </Box>
    </PageWrapper>
  );
};

export default About;
