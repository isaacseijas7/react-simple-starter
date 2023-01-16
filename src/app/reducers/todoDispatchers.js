import { TODOS_ACTIONS } from "./todoActions";

/**
 * Devuelve un objeto con una propiedad de tipo y una propiedad de carga útil
 * @param todos - Esta es la matriz de todos que vamos a obtener de la API.
 * @returns Un objeto con un tipo y una carga útil.
 */
export const fetchTodosDispatch = (todos) => {
  return {
    type: TODOS_ACTIONS.FETCH_TODOS,
    payload: todos,
  };
};

/**
 * Esta función devuelve un objeto con una propiedad de tipo y una propiedad de carga útil.
 * @param todo - El objeto todo que queremos guardar.
 * @returns Un objeto con un tipo y una carga útil.
 */
export const saveTodoDispatch = (todo) => {
  return {
    type: TODOS_ACTIONS.SAVE_TODO,
    payload: todo,
  };
};

/**
 * Devuelve un objeto con una propiedad de tipo y una propiedad de carga útil
 * @param todo - El objeto todo que queremos actualizar.
 * @returns Un objeto con un tipo y una carga útil.
 */
export const updateTodoDispatch = (todo) => {
  return {
    type: TODOS_ACTIONS.UPDATE_TODO,
    payload: todo,
  };
};
