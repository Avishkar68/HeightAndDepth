import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  const sections = [
    {
      title: "Education",
      desc: "Promoting genocide awareness and critical history learning for young minds.",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Human Rights",
      desc: "Empowering communities through equality, dignity, and justice initiatives.",
      img: "https://images.unsplash.com/photo-1603570419964-890f8d2a3f18?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Advocacy",
      desc: "Spreading voices of change through campaigns and local engagement.",
      img: "https://images.unsplash.com/photo-1581092334513-668f9c1cdd1d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  useEffect(() => {
    const sections = panelsRef.current;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-white text-white overflow-hidden">
      <div
        ref={containerRef}
        className="flex w-[300%] h-[400px] flex-nowrap items-center justify-center"
      >
        {sections.map((item, index) => (
          <section
            key={index}
            ref={(el) => (panelsRef.current[index] = el)}
            className="w-[100vw] text-black h-full flex justify-center items-center"
          >
            <div className="relative w-[250px] h-[250px] rounded-full border border-gray-400 flex flex-col justify-center items-center text-center overflow-hidden group transition-all duration-500 hover:scale-105">
              
              {/* Text Content */}
              <div className="z-10 px-4 transition-opacity duration-500 group-hover:opacity-0">
                <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>

              {/* Hover Image */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
