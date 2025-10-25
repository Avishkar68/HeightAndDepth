import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebook, FaInstagram, FaYoutube, FaArrowRight } from 'react-icons/fa';
import wwd1 from "../assets/wwd1.png"
import wwd2 from "../assets/wwd2.png"
import wwd3 from "../assets/wwd3.png"
import wwd4 from "../assets/wwd4.png"
import wwd5 from "../assets/wwd5.png"
import wwd6 from "../assets/wwd6.png"

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  const sections = [
    {
      "title": "Educate",
      "desc": "Promoting genocide awareness and critical history.",
      "img": wwd1
    },
    {
      "title": "Empower",
      "desc": "Equality, dignity, and justice for communities.",
      "img": wwd2
    },
    {
      "title": "Advocate",
      "desc": "Campaigns and local engagement for change.",
      "img": wwd3
    },
    {
      "title": "Reform",
      "desc": "Driving progressive policy and legal changes.",
      "img": wwd4
    },
    {
      "title": "Lead",
      "desc": "Developing youth for future justice advocacy.",
      "img": wwd5
    },
    {
      "title": "Respond",
      "desc": "Crisis aid, support, and recovery efforts.",
      "img": wwd6
    }
  ]

  useEffect(() => {
    const sections = panelsRef.current;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        // FIX: The animation starts when the top of containerRef is 50px from the top of the viewport.
        // This ensures the H1 stays visible at the top while the section is pinned.
        start: "top 50px",
        snap: 1 / (sections.length - 1),
        end: () => `+=${containerRef.current.scrollWidth - window.innerWidth}`,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      className="bg-white text-black overflow-hidden"
      ref={containerRef}
    >
      {/* Added pt-10 pb-5 for better visual spacing of the pinned title */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight pt-10 pb-5 text-center">What we do</h1>
      <p className="text-gray-600 max-w-[720px] mx-auto text-[20px] text-center leading-[28px]">
        Faith, obedience, and discipline — read how our community learns to walk closer with Christ every day.
      </p>
      <div
        className={`flex w-[${sections.length * 100
          }vw] h-[400px] flex-nowrap items-center justify-start`}
      >
        {sections.map((item, index) => (
          <section
            key={index}
            ref={(el) => (panelsRef.current[index] = el)}
            className="w-[20vw] h-full cursor-pointer flex justify-center items-center mx-10 flex-shrink-0"
          >
            <div className="relative w-[300px] h-[300px] rounded-full border border-gray-300 flex flex-col justify-center items-center text-center overflow-hidden group transition-all duration-500 hover:scale-105">
              {/* Text Content */}
              <div className="z-10 px-4 transition-opacity duration-500 group-hover:opacity-0">
                <h2 className="text-3xl font-bold mb-3">{item.title}</h2>
                <p className="text-sm text-gray-700">{item.desc}</p>
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
      <div className=" p-8 md:p-12 lg:p-6">
        <header className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight pt-10">
            Read Our Stories
          </h1>
          <p className="text-gray-600 max-w-[720px] mx-auto text-[20px] mt-4 leading-[28px]">
            Faith, obedience, and discipline — read how our community learns to walk closer with Christ every day.
          </p>
        </header>
        <div>

        </div>
      </div>

    </div>
  );
};

export default WhatWeDo;