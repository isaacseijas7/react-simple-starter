import React, { createContext, useReducer } from "react";
import { dataMetrica } from "./metricaData";
import { metricasReducer } from "../reducers/metricas/metricasRecuer";
import { getMetricasTranslatorDispatch } from "../reducers/metricas/metricasDispatchers";

const initialState = {
  metricas: dataMetrica,
};

export const MetricaContext = createContext(initialState);

export function MetricaContextProvider({ children }) {
  const [state, dispatch] = useReducer(metricasReducer, initialState);

  const getMetricasTranslator = (metricas) => {
    getMetricasTranslatorDispatch(metricas);
  };

  return (
    <MetricaContext.Provider
      value={{
        metricas: state.metricas,
        getMetricasTranslator,
      }}
    >
      {children}
    </MetricaContext.Provider>
  );
}
