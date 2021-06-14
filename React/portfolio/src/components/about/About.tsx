import PageWrapper from 'components/commons/templates/PageWrapper';
import GridArea from 'components/commons/molecules/GridArea';

import { headerMenu } from 'constants/CommonConst';
import { ImgData, imgList } from 'constants/ImageConst';

export type AboutProps = {
  isResponsible: boolean;
};

const About: React.FC<AboutProps> = (props) => {
  const { isResponsible } = props;

  /**
   * Aboutページ画像リスト
   */
  const aboutImgList: ImgData[] = [
    { id: 1, ...imgList.mei },
    { id: 2, ...imgList.jumpei },
  ];

  return (
    <PageWrapper title={headerMenu.about.label} isResponsible={isResponsible}>
      <GridArea imgList={aboutImgList} cols={2} isResponsible={isResponsible} />
    </PageWrapper>
  );
};

export default About;
