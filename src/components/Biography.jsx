import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="flex gap-8 pr-8">
      <div className="w-1/2">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="w-1/2 flex-wrap py-4">
        <h2 className="text-2xl">Biography</h2>
        <h1 className="text-2xl font-bold">Who We Are</h1>
        <p className="">
          We are ZeeCare Hospital, a premier healthcare provider committed to
          delivering high-quality medical services. Our team consists of expert
          doctors specializing in Pediatrics, Orthopedics, Cardiology,
          Neurology, Oncology, and Radiology, ensuring comprehensive care for
          all patients. With state-of-the-art facilities and advanced medical
          technology, we strive to offer personalized and effective treatment.
          Our mission is to promote health and well-being, making healthcare
          accessible and affordable. At ZeeCare, patient care and satisfaction
          are our utmost priorities. We focus on compassionate care, ensuring
          every patient feels valued and supported. Our streamlined appointment
          system allows for convenient scheduling at your preferred time. Trust
          ZeeCare for a reliable and caring healthcare experience.
        </p>
        <p>Established: 2001</p>
        <p>Head Office: Selli Nyay</p>
        <p>Runs: In All State</p>
      </div>
    </div>
  );
};

export default Biography;
