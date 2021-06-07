import top from 'img/top.jpg';
import mei from 'img/mei.jpg';
import jumpei from 'img/jumpei.jpg';
import logo from 'img/sample_logo.jpg';
import works01 from 'img/work_01.jpg';
import works02 from 'img/work_02.jpg';
import works03 from 'img/work_03.jpg';

export type ImgData = {
  id?: number;
  img?: string;
  alt?: string;
  title?: string;
};
export type ImgDataList = {
  top: ImgData;
  logo: ImgData;
  mei: ImgData;
  jumpei: ImgData;
  works: ImgData[];
};

/**
 * 共通画像
 */
export const imgList: ImgDataList = {
  top: {
    img: top,
    alt: 'Top',
  },
  logo: {
    img: logo,
    alt: 'Logo',
  },
  mei: {
    img: mei,
    alt: 'mei',
    title: '秋本 芽衣　　Mei Akimoto',
  },
  jumpei: {
    img: jumpei,
    alt: 'Jumpei',
    title: '松田 惇平　　Jumpei Matsuda',
  },
  works: [
    {
      img: works01,
      alt: 'works_01',
    },
    {
      img: works02,
      alt: 'works_02',
    },
    {
      img: works03,
      alt: 'works_03',
    },
  ],
};
