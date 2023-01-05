import * as React from "react";
import { Routes, Route } from "react-router-dom";
import LandingLayout from "./Layouts/LandingLayout";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const TodoPage = React.lazy(() => import("./pages/TodoPage"));
const NoMatchPage = React.lazy(() => import("./pages/NoMatchPage"));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout />}>
        <Route
          index
          element={
            <React.Suspense fallback={<>Cargando...</>}>
              <HomePage />
            </React.Suspense>
          }
        />
        <Route
          path="todo"
          element={
            <React.Suspense fallback={<>Cargando...</>}>
              <TodoPage />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoMatchPage />} />
      </Route>
    </Routes>
  );
}
