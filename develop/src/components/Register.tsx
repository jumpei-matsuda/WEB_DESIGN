/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from 'react';
import { TextField, InputLabel, Select, MenuItem, Box, Button, makeStyles } from '@material-ui/core';

/**
 * コンポーネント内のスタイルを定義するオブジェクトを生成する関数
 */
const useStyles = makeStyles(() => ({
  root: {
    margin: "2rem"
  },
  inputLabel: {
    padding: "1rem 0 .25rem",
  },
  submitButton: {
    margin: "1rem 0"
  }
}))

/**
 * セレクトボックスに表示するリストとtypeの定義
 */
type TodoType = {
  id: number,
  label: string,
};
const todoTypeList: TodoType[] = [
  { id: 1, label: "仕事" },
  { id: 2, label: "プライベート" },
  { id: 3, label: "その他" },
]

/**
 * 登録ページ コンポーネント
 * @returns 
 */
const Register: React.FC = () => {
  // コンポーネント内で使用するstateを定義
  const [title, setTitle] = useState<string>("");
  const [todoType, setTodoType] = useState<number>(0);
  const [memo, setMemo] = useState<string>("");

  // コンポーネント内のスタイルを定義するオブジェクトを生成
  const classes = useStyles();

  // 登録ボタン onCleck処理
  const registerOnClick = () => {
    const dataJson = {
      title,
      todoType,
      memo
    };
    console.log({ dataJson })
  }

  return (
    <div className={classes.root}>
      <h1>登録ページ</h1>
      <Box display="flex" flexDirection="column" width="fit-content">
        <InputLabel className={classes.inputLabel} variant="standard">タイトル</InputLabel>
        <TextField
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
        />
        <InputLabel className={classes.inputLabel} variant="standard">種別</InputLabel>
        <Select
          type="select"
          name="title"
          value={todoType}
          onChange={(e) => setTodoType(e.target.value as number)}
          variant="outlined"
        >
          <MenuItem key={0} value={0} />
          {todoTypeList.map((item) => (
            <MenuItem key={item.id} value={item.id}>{item.label}</MenuItem>
          ))}
        </Select >
        <InputLabel className={classes.inputLabel} variant="standard">内容</InputLabel>
        <TextField
          type='textare'
          multiline
          minRows="3"
          name="memo"
          value={memo} onChange={(e) => setMemo(e.target.value)}
          variant="outlined"
        />
      </Box>
      <Button type="button" onClick={registerOnClick} className={classes.submitButton} variant="outlined">
        登録
      </Button>
    </div>
  )
}

export default Register;

type Props = {
  name: string,
  times: number | undefined,
}
const Greets: React.FC<Props> = (props) => {
  const { name, times = 1, children } = props;

  return (
    <>
      {[...Array(times)].map((_) => (
        <>
          <p>Hello, {name}!</p>
          {children}
        </>
      ))}
    </>
  )
}

export const Apps: React.FC = () => (
  <div className="App">
    <Greets name="Patty" times={4}>
      <p aria-label="rabbit">
        ---------------
      </p>
    </Greets>
  </div>
)
