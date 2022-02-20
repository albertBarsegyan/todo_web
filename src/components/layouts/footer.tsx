import React, { useState } from "react";

export default function Footer() {
  // const [togglePosition, setTogglePosition] = useState(false);

  return (
    <div className="py-5 flex justify-center items-center bg-purple-400 w-full rounded-tl-md rounded-tr-md mt-5">
      <p className="text-xl text-white">
        All rights reserved by full-stack developer Albert Barsegyan &copy;
      </p>
    </div>
  );
}
