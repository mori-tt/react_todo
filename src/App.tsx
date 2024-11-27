import { useState } from "react";
import "./App.css";

function App() {
  const [incompleteTodos, setIncompleteTodos] = useState<string[]>([
    "TODO1",
    "TODO2",
  ]);
  const [completeTodos, setCompleteTodos] = useState<string[]>([
    "TODO1 完了",
    "TODO2 完了",
  ]);
  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="TODOを入力" id="add-text" />
        <button id="add-button">追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul id="incomplete-list">
          {incompleteTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul id="complete-list">
          {completeTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
