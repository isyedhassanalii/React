import React from "react";

const TodoForm = ({ handleSubmit, todo, setTodo, editId }) => {
  return (
    <form action="" className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button>{editId ? "Edit" : "Go"}</button>
    </form>
  );
};

export default TodoForm;
