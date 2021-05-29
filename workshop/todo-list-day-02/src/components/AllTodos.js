import React from "react";

const AllTodos = ({ handleEdit, handleDelete, allTodos }) => {
  return (
    <ul className="allTodos">
      {allTodos.map((todoItem) => (
        <li className="singleTodo" key={todoItem.id}>
          <span className="todoText">{todoItem.todo}</span>
          <button onClick={() => handleEdit(todoItem.id)}>Edit</button>
          <button onClick={() => handleDelete(todoItem.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default AllTodos;
