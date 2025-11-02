// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Ensure you have installed axios: npm install axios

// const Testimonials = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         // Fetch data from the running backend server
//         const response = await axios.get("http://localhost:3000/api/testimonials");
//         setTestimonials(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching testimonials:", err);
//         setError("Failed to load testimonials. Please ensure the backend is running on port 5000.");
//         setLoading(false);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-center py-20 text-xl text-gray-600">
//         Loading testimonials...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center py-20 text-xl text-red-600">
//         Error: {error}
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-50 py-12 px-6 flex flex-col items-center">
//       <h2 className="text-3xl font-semibold mb-10 text-gray-800">
//         Testimonials from Our Disciplinary Session
//       </h2>

//       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
//         {testimonials.length > 0 ? (
//           testimonials.map((testimonial) => (
//             <div
//               key={testimonial._id} // Use MongoDB's _id as key
//               className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300"
//             >
//               <div className="flex items-center mb-4">
//                 <img
//                   // The image URL is now the secure Cloudinary URL from the DB
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-14 h-14 rounded-full object-cover mr-4"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {testimonial.name}
//                   </h3>
//                   <p className="text-sm text-gray-500">{testimonial.role}</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 “{testimonial.message}”
//               </p>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-lg text-gray-500 col-span-full">
//             No testimonials found yet.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

import { useEffect, useState } from "react";
import { AnimatedTestimonials } from "../components/ui/Animated-Testimonial";
import axios from "axios"
export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // Fetch data from the running backend server
        const response = await axios.get("http://localhost:3000/api/testimonials");
        setTestimonials(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
        setError("Failed to load testimonials. Please ensure the backend is running on port 5000.");
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-xl text-gray-600">
        Loading testimonials...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-xl text-red-600">
        Error: {error}
      </div>
    );
  }

  // const testimonials = [
  //   {
  //     quote:
  //       "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
  //     name: "Sarah Chen",
  //     designation: "Product Manager at TechFlow",
  //     src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     quote:
  //       "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
  //     name: "Michael Rodriguez",
  //     designation: "CTO at InnovateSphere",
  //     src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     quote:
  //       "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
  //     name: "Emily Watson",
  //     designation: "Operations Director at CloudScale",
  //     src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     quote:
  //       "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
  //     name: "James Kim",
  //     designation: "Engineering Lead at DataPro",
  //     src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     quote:
  //       "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
  //     name: "Lisa Thompson",
  //     designation: "VP of Technology at FutureNet",
  //     src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  // ];
  return (
    <div className="w-screen bg-[#EEF6FF] py-16">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center">What our community say</h1>
      <p className="text-gray-600 max-w-[720px] text-center mx-auto text-[20px] mt-4 leading-[28px]">
      Unfiltered testimonials and authentic gratitude. These voices are the true measure of our success in advocating for dignity, equality, and lasting reform.
          </p>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
