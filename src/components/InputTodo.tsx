const style = {
  backgroundColor: "beige",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

const InputTodo = ({
  todoText,
  onChange,
  onClick,
  disabled,
}: {
  todoText: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  disabled: boolean;
}) => {
  return (
    <div style={style}>
      <input
        disabled={disabled}
        type="text"
        placeholder="TODOを入力"
        id="add-text"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} id="add-button" onClick={onClick}>
        追加
      </button>
    </div>
  );
};

export default InputTodo;
