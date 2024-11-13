// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const Department = () => {
//   const departmentsArray = [
//     {
//       name: "Pediatrics",
//       imageUrl: "/departments/pedia.jpg",
//     },
//     {
//       name: "Orthopedics",
//       imageUrl: "/departments/ortho.jpg",
//     },
//     {
//       name: "Cardiology",
//       imageUrl: "/departments/cardio.jpg",
//     },
//     {
//       name: "Neurology",
//       imageUrl: "/departments/neuro.jpg",
//     },
//     {
//       name: "Oncology",
//       imageUrl: "/departments/onco.jpg",
//     },
//     {
//       name: "Radiology",
//       imageUrl: "/departments/radio.jpg",
//     },
//     {
//       name: "Physical Therapy",
//       imageUrl: "/departments/therapy.jpg",
//     },
//     {
//       name: "Dermatology",
//       imageUrl: "/departments/derma.jpg",
//     },
//     {
//       name: "ENT",
//       imageUrl: "/departments/ent.jpg",
//     },
//   ];
//   const responsive = {
//     extraLarge: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 3000, min: 1324 },
//       items: 4,
//       SlideToSlide: 1,
//     },
//     large: {
//       breakpoint: { max: 1324, min: 1005 },
//       items: 3,
//       SlideToSlide: 1,
//     },
//     medium: {
//       breakpoint: { max: 1005, min: 700 },
//       items: 2,
//       SlideToSlide: 1,
//     },
//     small: {
//       breakpoint: { max: 700, min: 0 },
//       items: 1,
//       SlideToSlide: 1,
//     },
//   };
//   return (
//     <div>
//       <h2>Departments</h2>
//       <Carousel responsive={responsive} removeArrowOnDeviceType={"small"}>
//         {departmentsArray.map((depart, index) => {
//           return (
//             <div key={index}>
//               <div className="">{depart.name}</div>
//               <div className="h-full">
//                 <img src={depart.imageUrl} alt={depart.name} className="object-contain" />
//               </div>
//             </div>
//           );
//         })}
//       </Carousel>
//       ;
//     </div>
//   );
// };

// export default Department;
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Department = () => {
  const departmentsArray = [
    { name: "Pediatrics", imageUrl: "/departments/pedia.jpg" },
    { name: "Orthopedics", imageUrl: "/departments/ortho.jpg" },
    { name: "Cardiology", imageUrl: "/departments/cardio.jpg" },
    { name: "Neurology", imageUrl: "/departments/neuro.jpg" },
    { name: "Oncology", imageUrl: "/departments/onco.jpg" },
    { name: "Radiology", imageUrl: "/departments/radio.jpg" },
    { name: "Physical Therapy", imageUrl: "/departments/therapy.jpg" },
    { name: "Dermatology", imageUrl: "/departments/derma.jpg" },
    { name: "ENT", imageUrl: "/departments/ent.jpg" },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1,
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1,
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1,
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold my-4">Departments</h2>
      <Carousel responsive={responsive} removeArrowOnDeviceType={["small"]}>
        {departmentsArray.map((depart, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-center font-semibold mb-2">{depart.name}</div>
            <div className="h-64 w-full flex justify-center items-center">
              <img
                src={depart.imageUrl}
                alt={depart.name}
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Department;
