import React from "react";
import { Link } from "react-router-dom";
import { RoutePaths } from "../constants/route.constants";

export default function ErrorPage() {
  return (
    <div>
      <p className="text-4xl text-red-500"> 404.page</p>
      <Link to={RoutePaths.LOGIN}>
        <button className="border border-purple-500">Go to login page</button>
      </Link>
    </div>
  );
}
