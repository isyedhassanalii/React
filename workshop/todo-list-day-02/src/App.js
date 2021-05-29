import { useState } from "react";
import "./App.css";
import AllTodos from "./components/AllTodos";
import TodoForm from "./components/TodoForm";

function App() {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = allTodos.find((t) => t.id === editId);
      const updateTodos = allTodos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setAllTodos(updateTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setAllTodos([{ id: `${todo}-${Date.now()}`, todo }, ...allTodos]);
      setTodo("");
    }
  };
  const handleDelete = (id) => {
    console.log(id);
    const delTodo = allTodos.filter((to) => to.id !== id);
    setAllTodos([...delTodo]);
  };
  const handleEdit = (id) => {
    const editTodo = allTodos.find((t) => t.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };
  return (
    <div className="App">
      <div className="conatiner">
        <h1>Todo List App</h1>
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          setTodo={setTodo}
          editId={editId}
        />

        <AllTodos
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          allTodos={allTodos}
        />
      </div>
    </div>
  );
}

export default App;
