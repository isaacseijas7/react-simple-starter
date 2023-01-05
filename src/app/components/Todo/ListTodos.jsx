import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import RowTodo from "./RowTodo";

export default function ListTodos() {
  const { todos } = useContext(TodoContext);
  return (
    <div className="col-12">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Completed</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <RowTodo key={index} todo={todo} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
