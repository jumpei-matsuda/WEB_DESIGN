import React, { useEffect, useRef, useCallback } from 'react';
import Header from 'components/commons/Header';
import Footer from 'components/commons/Footer';
import SubMenuArea, { Cols } from 'components/commons/SubMenuArea';
import ToTopButton from 'components/commons/ToTopButton';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

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
  },
  concept: {
    fontSize: '1.375rem',
    lineHeight: '2',
    textAlign: 'center',
    width: '75%',
    margin: '10rem auto',
  },
}));

type TopProps = {
  isResponsible: boolean;
};
const Home: React.FC<TopProps> = (props) => {
  const { isResponsible } = props;
  const classes = useStyles();
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = useCallback(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [topRef]);

  /**
   * 画面遷移時スクロール位置をトップに戻す
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
