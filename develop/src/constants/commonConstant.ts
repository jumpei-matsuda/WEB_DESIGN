export type InputForm = {
  account: string;
  mail: string;
  password: string;
  passwordConf: string;
  lastName: string,
  fitstName: string,
  birthDay: Date,
  crest: number,
};

export const defaultValues = {
  account: '',
  mail: '',
  password: '',
  passwordConf: '',
  lastName: '',
  fitstName: '',
  birthDay: '',
  crest: 0,
};

export const inputType = {
  text: 'text',
  mail: 'mail',
  textarea: 'textarea',
  select: 'select',
  password: 'password',
  date: 'date',
} as const;

export type InputItemList = {
  id: number,
  name: keyof InputForm,
  title?: string,
  type: keyof typeof inputType,
  required?: boolean,
}

export const inputItemList: InputItemList[] = [
  { id: 1, name: 'account', title: 'ニックネーム', type: 'text', required: true },
  { id: 2, name: 'mail', title: 'メールアドレス', type: 'mail', required: true },
  { id: 3, name: 'password', title: 'パスワード', type: 'password', required: true },
  { id: 4, name: 'passwordConf', title: 'パスワード(確認用)', type: 'password', required: true },
  { id: 5, name: 'lastName',type: 'text' },
  { id: 6, name: 'fitstName', type: 'text' },
  { id: 7, name: 'birthDay', title: '生年月日',  type: 'date' },
  { id: 8, name: 'crest', title: '家紋', type: 'select' },
];