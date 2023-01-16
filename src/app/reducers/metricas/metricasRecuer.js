import { METRICAS_ACTIONS } from "./metricasActions";

export const metricasReducer = (state, action) => {
  switch (action.type) {
    case METRICAS_ACTIONS.GET_TRANSLATOR:
      return {
        ...state,
        todos: action.payload,
      };
    case METRICAS_ACTIONS.GET_PROFILE_TRANSLATOR:
      return {
        ...state,
        todos: action.payload,
      };
    case METRICAS_ACTIONS.GET_DIARIO:
      return {
        ...state,
        todos: action.payload,
      };
    case METRICAS_ACTIONS.GET_SEMANAL:
      return {
        ...state,
        todos: action.payload,
      };
    case METRICAS_ACTIONS.GET_MENSUAL:
      return {
        ...state,
        todos: action.payload,
      };
    case METRICAS_ACTIONS.GET_ANUAL:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};
