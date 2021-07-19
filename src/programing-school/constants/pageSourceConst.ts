export type ListItemType = {
  id: number;
  content: string;
  url?: string;
  name?: string;
};
export const conditionList: ListItemType[] = [
  { id: 1, content: '家紋で絞る', url: '/#crest', name: 'crest' },
  { id: 2, content: '名前で絞る', url: '/#name', name: 'name' },
  { id: 3, content: '出身地で絞る', url: '/#place', name: 'place' },
];
export const naviList: ListItemType[] = [
  { id: 1, content: 'ログイン', url: '/login' },
  { id: 2, content: '新規登録', url: '/insert' },
];
export const headerIdList = {
  crest: 'crest',
  name: 'name',
  place: 'place',
  login: 'login',
  insert: 'insert',
};

export const kanaList: ListItemType[] = [
  { id: 1, content: 'あ行' },
  { id: 2, content: 'か行' },
  { id: 3, content: 'さ行' },
  { id: 4, content: 'た行' },
  { id: 5, content: 'な行' },
  { id: 6, content: 'は行' },
  { id: 7, content: 'ま行' },
  { id: 8, content: 'や行' },
  { id: 9, content: 'ら行' },
  { id: 10, content: 'わ行' },
];
export const shapeList: ListItemType[] = [
  { id: 1, content: '自然紋' },
  { id: 2, content: '植物紋' },
  { id: 3, content: '動物紋' },
  { id: 4, content: '建築紋' },
  { id: 5, content: '器物紋' },
  { id: 6, content: '幾何紋' },
  { id: 7, content: '文字紋' },
];
