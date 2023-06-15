import React from "react";

function Card() {
  return (
    <div className="bg-[#F3F3F3] p-6 rounded-lg max-w-[350px] flex-1">
      <p className="text-lg mb-14">
        “A testimonial describing what the person thinks about this service,
        product or startup in general.”
      </p>
      <img
        className="w-16 h-16 rounded-full object-cover mb-4"
        src="./images/heroImg-Mobile-375px.jpg"
        alt="person"
      />
      <h3 className="font-bold mb-1">Name Surname</h3>
      <div className="flex justify-between">
        <p className="text-sm">Description</p>
        <div className="flex space-x-4">
          <img
            className="w-4"
            src="./images/facebook-icon.svg"
            alt="facebook icon"
          />
          <img
            className="w-4"
            src="./images/twitter-icon.svg"
            alt="twitter icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
