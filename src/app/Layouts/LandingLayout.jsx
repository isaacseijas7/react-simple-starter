import React from "react";
import { Outlet } from "react-router-dom";
import NavLanding from "../components/NavLanding";

function LandingLayout() {
  return (
    <>
      <NavLanding />

      <Outlet />
    </>
  );
}

export default LandingLayout;
