const CompleteTodos = ({
  todos,
  onClickBack,
}: {
  todos: string[];
  onClickBack: (index: number) => void;
}) => {
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul id="complete-list">
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompleteTodos;
