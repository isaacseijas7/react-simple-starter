import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

function RowTodo({ todo, index }) { 
  const { updateTodo } = useContext(TodoContext);

  const updateStatus = () => {
    updateTodo({ ...todo, completed: !todo.completed });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{todo.title}</td>
      <td className={todo.completed ? "text-primary" : "text-warning"}>
        {todo.completed ? "completed" : "uncompleted"}
      </td>
      <td>
        <button className="btn" onClick={updateStatus}>
          {todo.completed ? "Pendiente" : "Completar"}
        </button>
      </td>
    </tr>
  );
}

export default RowTodo;
