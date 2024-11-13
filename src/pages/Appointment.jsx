import React from "react";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <div>
      <div className="px-8">
        <div className="flex gap-20">
          <div className="w-[60%] flex justify-center items-center flex-col mt-8">
            <h1 className="text-4xl font-extrabold">
              <p>Schedule your appointment | ZeeCare medical institue</p>
            </h1>
            <p className="text-xl mt-12">
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit.perferendis amet molestiae cum sapiente perferendis aperiam
              dolor iure amet molestiae cum sapiente perferendis aperia dolor
              iure amet molestiae cum sapiente perferendis aperiam dolor iure
              amet molestiae cum sapiente voluptatibus rerum quo porro a
              vel,possimus corrupti temporibus eligendi quos, quia fugit?hello
              sir what are you doing right now.
            </p>
          </div>
          <img src="/signin.png" alt="hero" className="w-1/2" />
        </div>
        <div className="mt-14">
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
