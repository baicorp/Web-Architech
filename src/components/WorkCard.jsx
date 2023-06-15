import React from "react";

function WorkCard({ srcImg, desc }) {
  const nama = "brina";
  return (
    <div>
      <img className="object-contain" src={srcImg} alt={desc} />
      <div className="h-[52px] flex justify-center items-center">
        <h3 className="font-bold text-slate-700">
          {desc.charAt(0).toUpperCase() + desc.slice(1)}
        </h3>
      </div>
    </div>
  );
}

export default WorkCard;
