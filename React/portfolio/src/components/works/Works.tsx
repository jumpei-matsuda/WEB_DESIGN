import React, { useEffect } from 'react';
import Header from 'components/commons/Header';
import Footer from 'components/commons/Footer';
import SubMenuArea, { Cols } from 'components/commons/SubMenuArea';
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
    top: '6rem',
  },
  background: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
  },
}));

type AboutProps = {
  isResponsible: boolean;
};
const About: React.FC<AboutProps> = (props) => {
  const { isResponsible } = props;
  const classes = useStyles();

  /**
   * 画面遷移時スクロール位置をトップに戻す
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /**
   * Worksページ画像リスト
   */
  const worksImgList: ImgData[] = imgList.works.map((work, idx) => ({
    id: idx,
    ...work,
  }));

  return (
    <Box className={classes.root}>
      <Header isResponsible={isResponsible} />
      <div className="wrapper">
        <SubMenuArea
          title={headerMenu.works.label}
          cols={worksImgList.length as Cols}
          imgList={worksImgList}
          nextPage={headerMenu.works.url}
          isResponsible={isResponsible}
        />
      </div>
      <Footer />
    </Box>
  );
};

export default About;
