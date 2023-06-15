import React from "react";

function Button({ dark, small }) {
  return (
    <button
      className={`
      ${dark ? "text-white bg-black" : "text-black bg-white"}
      ${small ? "px-4 py-2" : "px-6 py-3"}
        rounded-full outline-none font-extrabold`}
    >
      Action
    </button>
  );
}

export default Button;
