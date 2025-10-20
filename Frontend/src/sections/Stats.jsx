import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;

    // Animate the border radius on scroll
    gsap.fromTo(
      el,
      { borderRadius: "0px" }, // Start pointed
      {
        borderRadius: "200px", // End rounded oval
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // when container enters viewport
          end: "top 20%",   // till it reaches this position
          scrub: true,      // smooth animation with scroll
        },
      }
    );
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      {/* Outer Animated Container */}
      <div
        ref={containerRef}
        className="bg-[#141722] text-white px-12 py-16 max-w-6xl w-full text-center shadow-lg transition-all duration-700"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-12">
          It is a long established fact that <br />
          a reader will be distracted by the readable
        </h2>

        {/* Stats Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 text-blue-200">
          {/* Stat 1 */}
          <div>
            <p className="text-5xl font-bold text-blue-300">100+</p>
            <p className="text-sm mt-2 text-gray-400">
              Yazidis are still residing in refugee <br /> camps by 2021
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <p className="text-5xl font-bold text-blue-300">200k</p>
            <p className="text-sm mt-2 text-gray-400">
              People already received help & <br /> assistance from us
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <p className="text-5xl font-bold text-blue-300">78M</p>
            <p className="text-sm mt-2 text-gray-400">
              of youth are not attending school, <br /> globally
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
