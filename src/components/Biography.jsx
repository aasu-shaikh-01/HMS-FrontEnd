import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="flex gap-8">
      <div className="w-1/2">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="w-1/2 flex-wrap py-4">
        <h2 className="text-2xl">Biography</h2>
        <h1 className="text-2xl font-bold">Who We Are</h1>
        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          non at quidem a fuga reiciendis voluptate accusantium laudantium.
          Quae, libero? Ea veniam veritatis consequuntur dolore? In dolorum vero
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          non at quidem a fuga reiciendis voluptate accusantium laudantium.
          Quae, libero? Ea veniam veritatis consequuntur dolore? In dolorum vero
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          non at quidem a fuga reiciendis voluptate accusantium laudantium.
          Quae, libero? Ea veniam veritatis consequuntur dolore? In dolorum vero
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          non at quidem a fuga reiciendis voluptate accusantium laudantium.
          Quae, libero? Ea veniam veritatis consequuntur dolore? In dolorum vero
          quidem architecto?
        </p>
        <p>Lorem ipsum, dolor sit amet consectetur</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non</p>
        <p>Lorem ipsum, dolor sit.</p>
      </div>
    </div>
  );
};

export default Biography;
