import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="flex gap-40 pl-8">
      <div className="w-[60%] flex justify-center items-center flex-col">
        <h1 className="text-4xl font-extrabold -mt-12">{title}</h1>
        <p className="text-xl mt-12">
          ZeeCare Hospital offers comprehensive medical services across various
          specialties, including Pediatrics, Orthopedics, Cardiology, Neurology,
          Oncology, and Radiology. Our team of expert doctors is available in
          all these departments to provide top-notch healthcare. Patients can
          easily book appointments at their preferred time slots through our
          streamlined scheduling system. ZeeCare is committed to delivering
          quality care and ensuring the well-being of every patient. Visit us
          for a trusted healthcare experience.
        </p>
      </div>
      {/* <div className="relative w-1/2 pt-2"> */}
      <div className="relative w-2/3 pt-2 overflow-clip">
        <img src="/Vector.png" alt="vector" className="absolute ml-36 -mt-36" />
        {/* <img src={imageUrl} alt="hero" className="relative w-[330px]" /> */}
        <img
          src={imageUrl}
          alt="hero"
          className="relative w-[330px] animate-moveUpDown ml-16"
        />
      </div>
    </div>
  );
};

export default Hero;
