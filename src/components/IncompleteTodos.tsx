const IncompleteTodos = ({
  todos,
  onClickComplete,
  onClickDelete,
}: {
  todos: string[];
  onClickComplete: (index: number) => void;
  onClickDelete: (index: number) => void;
}) => {
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul id="incomplete-list">
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncompleteTodos;