import React from "react";
import { WorkCard } from "../components";
import { workCardList } from "../constants";

function Work() {
  const workCard = workCardList.map((item, index) => {
    return (
      <WorkCard key={index} srcImg={item.srcImg} desc={item.description} />
    );
  });
  return (
    <section>
      <div className="px-[30px] py-[50px] mx-auto max-w-[1140px]">
        <div className="grid grid-cols-2 gap-x-[6vw] place-items-center sm:grid-cols-4">
          {workCard}
        </div>
      </div>
    </section>
  );
}

export default Work;
