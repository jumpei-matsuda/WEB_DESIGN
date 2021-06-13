import PageWrapper from 'components/commons/PageWrapper';
import GridArea from 'components/commons/molecules/GridArea';

import { headerMenu } from 'constants/CommonConst';
import { ImgData, imgList } from 'constants/ImageConst';

export type WorksProps = {
  isResponsible: boolean;
};

const Works: React.FC<WorksProps> = (props) => {
  const { isResponsible } = props;

  /**
   * Worksページ画像リスト
   */
  const worksImgList: ImgData[] = imgList.works.map((work, idx) => ({
    id: idx,
    ...work,
  }));

  return (
    <PageWrapper title={headerMenu.works.label} isResponsible={isResponsible}>
      <GridArea imgList={worksImgList} cols={3} isResponsible={isResponsible} />
    </PageWrapper>
  );
};

export default Works;
