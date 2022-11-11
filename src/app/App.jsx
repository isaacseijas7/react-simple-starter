import * as React from "react";
import { Routes, Route } from "react-router-dom";
import LandingLayout from "./Layouts/LandingLayout";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const NoMatchPage = React.lazy(() => import("./pages/NoMatchPage"));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout />}>
        <Route
          index
          element={
            <React.Suspense fallback={<>...</>}>
              <HomePage />
            </React.Suspense>
          }
        />
        <Route
          path="about"
          element={
            <React.Suspense fallback={<>...</>}>
              <AboutPage />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoMatchPage />} />
      </Route>
    </Routes>
  );
}
