import { useState } from 'react';

type TodoType = {
  id: number,
  label: string,
};

const Register: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [todoType, setTodoType] = useState<number>(0);
  const [memo, setMemo] = useState<string>("");

  const todoTypeList: TodoType[] = [
    { id: 1, label: "仕事" },
    { id: 2, label: "プライベート" },
    { id: 3, label: "その他" },
  ]

  const registerOnClick = () => {
    const dataJson = {
      title,
      todoType,
      memo
    };
    console.log({ dataJson })
  }

  return (
    <div className="root">
      <h1>登録ページ</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <span>タイトル：</span>
            </td>
            <td>
              <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>
              <span>種別：</span>
            </td>
            <td>
              <select name="title" value={todoType} onChange={(e) => setTodoType(parseInt(e.currentTarget.value, 10))} >
                <option value={0}> </option>
                {todoTypeList.map((item) => (
                  <option key={item.id} value={item.id}>{item.label}</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <span>備考：</span>
            </td>
            <td>
              <textarea rows={3} name="memo" value={memo} onChange={(e) => setMemo(e.target.value)} />
            </td>
          </tr>
          <tr className="submit">
            <td />
            <td >
              <button type="button" onClick={registerOnClick}>登録</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Register;