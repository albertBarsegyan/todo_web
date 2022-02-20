import React from "react";
import SmileIcon from "../icons/smile.icon";

export default function Introduction() {
  const contentStyle = "p-5 shadow-md w-1/3 mt-5 ";
  return (
    <>
      <div className={contentStyle}>
        <p className="text-2xl text-purple-500 text-center">
          Please Login to start actions
        </p>
      </div>
      <div className={contentStyle}>
        <SmileIcon />
      </div>
    </>
  );
}
