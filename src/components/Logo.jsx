import React from "react";

function Logo({ dark }) {
  return (
    <div className={`${dark ? "text-black" : "text-white"} flex items-start`}>
      <h1 className="text-2xl font-[900]">BRAND</h1>
      <span className="text-[8px] font-[900]">TM</span>
    </div>
  );
}
export default Logo;
