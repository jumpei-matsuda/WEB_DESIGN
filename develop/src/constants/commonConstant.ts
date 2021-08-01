export type InputForm = {
  name: string;
  mail: string;
  password: string;
  passwordConf: string;
};

export const defaultValues = {
  name: '',
  mail: '',
  password: '',
  passwordConf: '',
};
