import React, { createContext, useReducer } from "react";
import { todosReducer } from "../reducers/todoRecuer";
import {
  fetchTodosDispatch,
  saveTodoDispatch,
  updateTodoDispatch,
} from "../reducers/todoDispatchers";

/* Establecer el estado inicial de la matriz de todos en una matriz vacía. */
const initialState = {
  todos: [],
};

/* Crear un objeto de contexto que se usará para pasar datos al árbol de componentes sin tener que
pasar accesorios manualmente en cada nivel. */
export const TodoContext = createContext(initialState);

/**
 * Es una función que toma una propiedad children y devuelve un componente TodoContext.Provider que
 * tiene una propiedad de valor que contiene el estado de todos, la función fetchTodos y la función
 * saveTodo.
 * @returns Se devuelve TodoContextProvider.
 */
export function TodoContextProvider({ children }) {
  /* Usar el hook useReducer para crear una función de estado y despacho. */
  const [state, dispatch] = useReducer(todosReducer, initialState);

  /**
   * FetchTodos es una función que toma un argumento de todos y devuelve una función de despacho que
   * toma una función fetchTodosDispatch que toma un argumento de todos.
   */
  const fetchTodos = (todos) => {
    dispatch(fetchTodosDispatch(todos));
  };

  /**
   * SaveTodo es una función que toma una tarea pendiente como argumento y envía la acción
   * saveTodoDispatch con la tarea pendiente como argumento.
   */
  const saveTodo = (todo) => {
    dispatch(saveTodoDispatch(todo));
  };

  /**
   * UpdateTodo es una función que toma una tarea pendiente como argumento y envía una acción para
   * actualizar la tarea pendiente.
   */
  const updateTodo = (todo) => {
    dispatch(updateTodoDispatch(todo));
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        fetchTodos,
        saveTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
