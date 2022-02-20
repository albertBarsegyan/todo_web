import { Routes, Route, Navigate } from "react-router-dom";
import { RoutePaths } from "../constants/route.constants";
import Home from "../pages/home.page";

export default function AuthenticatedApp() {
  return (
    <Routes>
      <Route path={RoutePaths.HOME} element={<Home />} />
      <Route path="*" element={<Navigate replace to={RoutePaths.HOME} />} />
    </Routes>
  );
}
