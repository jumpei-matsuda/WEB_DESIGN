export type InputForm = {
  name: string;
  kana: string;
  mail: string;
  tel: string;
  type: number;
  content: string;
};

export const inputType = {
  text: 'text',
  mail: 'mail',
  textarea: 'textarea',
  select: 'select',
  password: 'password',
  date: 'date',
} as const;

export const defaultValues = {
  name: '',
  kana: '',
  mail: '',
  tel: '',
  content: '',
};
