import { METRICAS_ACTIONS } from "./metricasActions";

export const getMetricasTranslatorDispatch = (metricas) => {
  return {
    type: METRICAS_ACTIONS.GET_TRANSLATOR,
    payload: metricas,
  };
};

export const getMetricasProfileTranslatorDispatch = (metricas) => {
  return {
    type: METRICAS_ACTIONS.GET_PROFILE_TRANSLATOR,
    payload: metricas,
  };
};

export const getMetricasDiarioDispatch = (metricas) => {
  return {
    type: METRICAS_ACTIONS.GET_DIARIO,
    payload: metricas,
  };
};

export const getMetricasSemanalDispatch = (metricas) => {
  return {
    type: METRICAS_ACTIONS.GET_SEMANAL,
    payload: metricas,
  };
};

export const getMetricasMensualDispatch = (metricas) => {
  return {
    type: METRICAS_ACTIONS.GET_MENSUAL,
    payload: metricas,
  };
};

export const getMetricasAnualDispatch = (metricas) => {
  return {
    type: METRICAS_ACTIONS.GET_ANUAL,
    payload: metricas,
  };
};

