import { TODOS_ACTIONS } from "./todoActions";

/**
 * Toma un estado y una acción, y devuelve un nuevo estado basado en el tipo de acción
 * @param state - El estado actual del reductor.
 * @param action - Este es el objeto de acción que se envió.
 * @returns El estado se devuelve con la matriz todos.
 */
export const todosReducer = (state, action) => {
  switch (action.type) {
    case TODOS_ACTIONS.FETCH_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case TODOS_ACTIONS.SAVE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TODOS_ACTIONS.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
