import React from "react";
import Biography from "../components/Biography";

const AboutUs = () => {
  return (
    <div className="px-8">
      <div className="flex gap-20">
        <div className="w-[60%] flex justify-center items-center flex-col">
          <h1 className="text-4xl font-extrabold">
            <p>Learn More About Us | ZeeCare Medical Institute</p>
          </h1>
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
        <img src="./about.png" alt="hero" className="w-1/2" />
      </div>
      <div className="mt-14">
        <Biography imageUrl={"./whoweare.png"} />
      </div>
    </div>
  );
};

export default AboutUs;
