import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="flex gap-40 px-8">
      <div className="w-[60%] flex justify-center items-center flex-col">
        <h1 className="text-4xl font-extrabold -mt-12">{title}</h1>
        <p className="text-xl mt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.perferendis
          amet molestiae cum sapiente perferendis aperiam dolor iure amet
          molestiae cum sapiente perferendis aperia dolor iure amet molestiae
          cum sapiente perferendis aperiam dolor iure amet molestiae cum
          sapiente voluptatibus rerum quo porro a vel,possimus corrupti
          temporibus eligendi quos, quia fugit?hello sir what are you doing
          right now.
        </p>
      </div>
      <div className="relative w-1/2 animate-moveUpDown pt-2">
        <img src="/Vector.png" alt="vector" className="absolute" />
        <img src={imageUrl} alt="hero" className="relative w-[330px]" />
      </div>
    </div>
  );
};

export default Hero;
