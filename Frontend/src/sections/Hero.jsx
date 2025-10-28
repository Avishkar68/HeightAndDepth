// import React from "react";
// import cover from "../assets/cover.jpg"
// const Hero = () => {
//   return (
//     <div>

//     <section
//       className="w-screen h-screen flex items-center justify-center text-center text-white overflow-hidden"
//     >
//       <div className="absolute inset-0">
//         <img
//           src={cover}
//           alt="Children smiling - education initiative"
//           className="w-full h-full object-fit brightness-[0.65] "
//         />
//         <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
//       </div>

//       {/* Text Overlay */}
//       <div className="relative z-10 max-w-5xl px-6 mt-[-60px]">
//         <h1 className="text-4xl md:text-5xl lg:text-[70px] leading-[80px] font-semibold ">
//           Transforming lives <br />through Biblical discipleship


//         </h1>

//         <div className="flex ">
//           <p className=" text-3xl md:text-[120px] absolute left-[200px] top-[170px] leading-[20px] z-10 font-curly text-[#22ABDF] ">
//             Height &
//           </p>
//           <p className=" text-3xl md:text-[120px] absolute left-[550px] top-[170px] leading-[20px] z-10 font-curly text-[#22ABDF] ">
//             Depth
//           </p>
//         </div>
//         <p className=" text-3xl md:text-[60px] mt-10 font-bold font-basicall text-white ">
//           Ministries
//         </p>
      
//       </div>
      
//     </section>
//     <div className='  mx-auto text-center w-screen   mt-[-73px] py-6 bg-[#EEF6FF] font-bold mb-10 text-[#22ABDF]'>
//       "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son<br/> and of the Holy Spirit, teaching them to observe all that I have commanded you."- Matthew 28:19-20 
//       </div>
//     </div>
//   );
// };

// export default Hero;


// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import cover from "../assets/cover.jpg";

// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   const heroRef = useRef(null);
//   const titleRef = useRef(null);
//   const heightRef = useRef(null);
//   const depthRef = useRef(null);
//   const ministriesRef = useRef(null);

//   // Helper to wrap each character in a <span>
//   const splitLetters = (element) => {
//     const text = element.textContent;
//     element.textContent = "";
//     text.split("").forEach((char) => {
//       const span = document.createElement("span");
//       span.textContent = char;
//       element.appendChild(span);
//     });
//   };

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Background fade + zoom
//       gsap.fromTo(
//         ".bg-image",
//         { scale: 1.15, opacity: 0 },
//         { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
//       );

//       // Title fade
//       gsap.from(titleRef.current, {
//         opacity: 0,
//         duration: 1.2,
//         delay: 0.3,
//         ease: "power2.out",
//       });

//       // Split letters for typing effect
//       splitLetters(heightRef.current);
//       splitLetters(depthRef.current);

//       // Animate each letter
//       gsap.from(heightRef.current.querySelectorAll("span"), {
//         opacity: 0,
//         y: 20,
//         duration: 0.4,
//         delay: 0.8,
//         stagger: 0.1,
//         ease: "power2.out",
//       });

//       gsap.from(depthRef.current.querySelectorAll("span"), {
//         opacity: 0,
//         y: 20,
//         duration: 0.4,
//         delay: 1.5,
//         stagger: 0.1,
//         ease: "power2.out",
//       });

//       // Ministries fade
//       gsap.from(ministriesRef.current, {
//         opacity: 0,
//         scale: 0.9,
//         duration: 2,
//         delay: 2.5,
//         ease: "power2.out",
//       });

//       // 🟢 Removed GSAP animation for verse-text (kept static)
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={heroRef}>
//       <section className="w-screen h-screen flex items-center justify-center text-center text-white overflow-hidden relative">
//         {/* Background */}
//         <div className="absolute inset-0">
//           <img
//             src={cover}
//             alt="Children smiling - education initiative"
//             className="bg-image w-full h-full object-fit brightness-[0.65]"
//           />
//           <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
//         </div>

//         {/* Text Overlay */}
//         <div className="relative z-10 max-w-5xl px-6 mt-[-60px]">
//           <h1
//             ref={titleRef}
//             className="text-4xl md:text-5xl lg:text-[70px] leading-[80px] font-semibold"
//           >
//             Transforming lives <br />through Biblical discipleship
//           </h1>

//           <div className="flex">
//             <p
//               ref={heightRef}
//               className="text-3xl md:text-[120px] absolute left-[200px] top-[170px] leading-[20px] z-10 font-curly text-[#22ABDF]"
//             >
//               Height &
//             </p>
//             <p
//               ref={depthRef}
//               className="text-3xl md:text-[120px] absolute left-[550px] top-[170px] leading-[20px] z-10 font-curly text-[#22ABDF]"
//             >
//               Depth
//             </p>
//           </div>

//           <p
//             ref={ministriesRef}
//             className="text-3xl md:text-[60px] mt-10 font-bold font-basicall text-white"
//           >
//             Ministries
//           </p>
//         </div>
//       </section>

//       {/* Verse — no GSAP animation now */}
//       <div className="verse-text mx-auto text-center w-screen mt-[-73px] py-6 bg-[#EEF6FF] font-bold mb-10 text-[#22ABDF] z-50">
//         "Go therefore and make disciples of all nations, baptizing them in the
//         name of the Father and of the Son <br /> and of the Holy Spirit,
//         teaching them to observe all that I have commanded you." - Matthew
//         28:19-20
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cover from "../assets/cover.jpg";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const heightRef = useRef(null);
  // const depthRef = useRef(null);
  const ministriesRef = useRef(null);

  const splitLetters = (element) => {
    const text = element.textContent;
    element.textContent = "";
    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      element.appendChild(span);
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background fade + zoom
      gsap.fromTo(
        ".bg-image",
        { scale: 1.15, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
      );

      // Title fade
      gsap.from(titleRef.current, {
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power2.out",
      });

      // Split letters for typing effect
      splitLetters(heightRef.current);
      // splitLetters(depthRef.current);

      // Animate each letter
      gsap.from(heightRef.current.querySelectorAll("span"), {
        opacity: 0,
        y: 20,
        duration: 0.4,
        delay: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });

      // gsap.from(depthRef.current.querySelectorAll("span"), {
      //   opacity: 0,
      //   y: 20,
      //   duration: 0.4,
      //   delay: 1.5,
      //   stagger: 0.1,
      //   ease: "power2.out",
      // });

      // Ministries fade
      gsap.from(ministriesRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 2,
        delay: 2.5,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef}>
      <section className="relative w-screen h-screen flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={cover}
            alt="Children smiling - education initiative"
            className="bg-image w-full h-full object-cover brightness-[0.65]"
          />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
        </div>

        {/* Text Overlay */}
        <div className="relative z-10 max-w-6xl px-4 sm:px-6 lg:px-8 mt-[-40px]">
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] leading-tight md:leading-[80px] font-semibold"
          >
            Transforming lives <br />
            through Biblical discipleship
          </h1>

          {/* Height & Depth */}
          <div className="flex">
            <p
              ref={heightRef}
              className="absolute font-curly text-[#22ABDF] z-10 leading-[20px]
              text-[40px] sm:text-[60px] md:text-[100px] lg:text-[120px]
              left-[80px] sm:left-[150px] md:left-[200px]
              top-[120px] sm:top-[150px] md:top-[170px]"
            >
              Height  &  Depth
            </p>
            {/* <p
              ref={depthRef}
              className="absolute font-curly text-[#22ABDF] z-10 leading-[20px]
              text-[40px] sm:text-[60px] md:text-[100px] lg:text-[120px]
              left-[280px] sm:left-[400px] md:left-[550px]
              top-[120px] sm:top-[150px] md:top-[170px]"
            >
          
            </p> */}
          </div>

          {/* Ministries */}
          <p
            ref={ministriesRef}
            className="mt-10 text-2xl sm:text-4xl md:text-[60px] font-bold font-basicall text-white"
          >
            Ministries
          </p>
        </div>
      </section>

      {/* Verse (static) */}
      <div className="verse-text mx-auto text-center w-full py-6 bg-[#EEF6FF] font-bold mb-10 text-[#22ABDF] text-sm sm:text-base md:text-lg leading-relaxed">
        "Go therefore and make disciples of all nations, baptizing them in the
        name of the Father and of the Son <br className="hidden sm:block" /> and
        of the Holy Spirit, teaching them to observe all that I have commanded
        you." - Matthew 28:19-20
      </div>
    </div>
  );
};

export default Hero;
