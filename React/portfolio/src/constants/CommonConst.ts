/**
 * リストオブジェクト
 */
export type MenuObj = {
  id: number;
  label: string;
  url: string;
};

/**
 * ページメニュー
 */
type HeaderMenu = {
  top: MenuObj;
  about: MenuObj;
  works: MenuObj;
  contact: MenuObj;
};
export const headerMenu: HeaderMenu = {
  top: {
    id: 1,
    label: 'Top',
    url: '/',
  },
  about: {
    id: 2,
    label: 'About',
    url: 'about',
  },
  works: {
    id: 3,
    label: 'Works',
    url: 'works',
  },
  contact: {
    id: 4,
    label: 'Contact',
    url: 'contact',
  },
} as const;

/**
 * WORK種別
 */
export const workType = {
  website: 'Website',
  logo: 'Logo',
  flyer: 'Flyer',
  other: 'Other',
};

/**
 * インプット項目
 */
export type FormInput = {
  company: string;
  name: string;
  kana: string;
  mailAdress: string;
  phone: string;
  memo: string;
};

/**
 * インプット項目（name）
 */
export const formInputName = {
  company: 'company',
  name: 'name',
  kana: 'kana',
  mailAdress: 'mailAdress',
  phone: 'phone',
  memo: 'memo',
} as const;
export type FormInputName = typeof formInputName;

/**
 * インプット項目（title）
 */
export const formInputTitle = {
  company: '貴社名',
  name: 'お名前',
  kana: 'ふりがな',
  mailAdress: 'メールアドレス',
  phone: '電話番号',
  memo: 'お問い合わせ内容',
} as const;
