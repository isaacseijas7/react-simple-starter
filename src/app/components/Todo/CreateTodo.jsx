import React, { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import { uuidv4 } from "../../utils";

function CreateTodo() {
  const { saveTodo } = useContext(TodoContext);
  const [title, setTitle] = useState("");

  function handleSubmit() {
    if (!title) {
      return false;
    }
    saveTodo({
      title,
      completed: false,
      id: uuidv4(),
    });
    setTitle("");
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Ingresa tu tarea"
          aria-label="todo"
          aria-describedby="tosdo"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
}
export default CreateTodo;
