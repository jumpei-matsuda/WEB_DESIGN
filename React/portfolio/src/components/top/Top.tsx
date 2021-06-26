import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Header from 'components/commons/organisms/Header/Header';
import Footer from 'components/commons/organisms/Footer';
import SubMenuArea, { Cols } from 'components/Top/SubMenuArea';
import ToTopButton from 'components/commons/atoms/ToTopButton';
import { useScrollTop } from 'hooks/useScrollTop';

import { headerMenu } from 'constants/CommonConst';
import { ImgData, imgList } from 'constants/ImageConst';

/** ******************
 * Style
 ******************* */
const useStyles = makeStyles(() => ({
  root: {
    fontSize: '100%',
    fontFamily: 'Helvetica, Light',
    position: 'relative',
  },
  background: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    animationName: '$fadeIn',
    animationDuration: '2s',
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  concept: {
    fontSize: '1.375rem',
    lineHeight: '2',
    textAlign: 'center',
    width: '75%',
    margin: '10rem auto',
  },
}));

export type TopProps = {
  isResponsible: boolean;
};

const Home: React.FC<TopProps> = ({ isResponsible }) => {
  const classes = useStyles();
  const { topRef, scrollToTop } = useScrollTop();

  /**
   * Aboutページ画像リスト
   */
  const aboutImgList: ImgData[] = [
    { id: 1, ...imgList.mei },
    { id: 2, ...imgList.jumpei },
  ];

  /**
   * Worksページ画像リスト
   */
  const worksImgList: ImgData[] = imgList.works.map((work, idx) => ({
    id: idx,
    ...work,
  }));

  return (
    <div className={classes.root} ref={topRef}>
      <Header isResponsible={isResponsible} />
      <img
        className={classes.background}
        src={imgList.top?.img}
        alt={imgList.top?.alt}
      />
      <div className="wrapper">
        <Box display="flex" alignContent="center" className={classes.concept}>
          <span>
            ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。
            ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。
            ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。
            ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。
            ここにテキストが表示されます。ここにテキストが表示されます。ここにテキストが表示されます。
          </span>
        </Box>
        <SubMenuArea
          title={headerMenu.about.label}
          cols={aboutImgList.length as Cols}
          imgList={aboutImgList}
          nextPage={headerMenu.about.url}
          isResponsible={isResponsible}
        />
        <SubMenuArea
          title={headerMenu.works.label}
          cols={worksImgList.length as Cols}
          imgList={worksImgList}
          nextPage={headerMenu.works.url}
          isResponsible={isResponsible}
        />
        <ToTopButton scrollToTop={scrollToTop} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
