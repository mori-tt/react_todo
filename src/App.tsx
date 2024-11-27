import "./App.css";

function App() {
  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="TODOを入力" id="add-text" />
        <button id="add-button">追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul id="incomplete-list">
          <li>
            <div className="list-row">
              <p className="todo-item">TODO</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
          <li>
            <div className="list-row">
              <p className="todo-item">TODO</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul id="complete-list">
          <li>
            <div className="list-row">
              <p className="todo-item">TODO</p>
              <button>戻す</button>
            </div>
          </li>
          <li>
            <div className="list-row">
              <p className="todo-item">TODO</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
