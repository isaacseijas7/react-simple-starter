import * as React from "react";
import ListTodos from "../components/Todo/ListTodos";
import CreateTodo from "../components/Todo/CreateTodo";

function TodoPage() {
  return (
    <div className="container">
      <h1>TodoPage</h1>
      <CreateTodo />
      <ListTodos />
    </div>
  );
}

export default TodoPage;
