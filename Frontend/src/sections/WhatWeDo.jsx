import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebook, FaInstagram, FaYoutube, FaArrowRight } from 'react-icons/fa';
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
    {
      title: "Advocacy 2",
      desc: "Spreading voices of change through campaigns and local engagement.",
      img: "https://images.unsplash.com/photo-1581092334513-668f9c1cdd1d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Advocacy 3",
      desc: "Spreading voices of change through campaigns and local engagement.",
      img: "https://images.unsplash.com/photo-1581092334513-668f9c1cdd1d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Advocacy 4",
      desc: "Spreading voices of change through campaigns and local engagement.",
      img: "https://images.unsplash.com/photo-1581092334513-668f9c1cdd1d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Advocacy 5",
      desc: "Spreading voices of change through campaigns and local engagement.",
      img: "https://images.unsplash.com/photo-1581092334513-668f9c1cdd1d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Advocacy 6",
      desc: "Spreading voices of change through campaigns and local engagement.",
      img: "https://images.unsplash.com/photo-1581092334513-668f9c1cdd1d?auto=format&fit=crop&w=800&q=80",
    },
  ]; // Using the full array of sections

  useEffect(() => {
    const sections = panelsRef.current;

    // Use a fixed total width for the container that is 100% per section
    // to match the xPercent logic, even if the content width is smaller.
    const totalWidthPercent = sections.length * 100;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        // Snap logic remains the same: snap to the start of each section.
        snap: 1 / (sections.length - 1),
        // Set the scroll distance based on the combined width of the panels.
        // This ensures the vertical scroll is long enough to cover the horizontal movement.
        end: () => `+=${containerRef.current.scrollWidth - window.innerWidth}`,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      className="bg-white text-black overflow-hidden pt-10"
      ref={containerRef}
    >
      <h1 className="text-5xl font-bold ml-10 mb-10">What we do</h1>
      <div
        // 👇 FIX: Set container width to the total number of items times 100vw,
        // which helps the GSAP xPercent calculation work correctly.
        className={`flex w-[${
          sections.length * 100
        }vw] h-[400px] flex-nowrap items-center justify-start`}
      >
        {sections.map((item, index) => (
          <section
            key={index}
            ref={(el) => (panelsRef.current[index] = el)}
            // 👇 FIX: Use a smaller width for each section (e.g., w-[50vw])
            // and add a margin to ensure the next item is visible.
            // w-[50vw] ensures two items can comfortably be on screen at once.
            // mx-10 adds uniform spacing/margin.
            className="w-[20vw] h-full flex justify-center items-center mx-10 flex-shrink-0"
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
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
        
        {/* Ministry Description (Expanded to take more space on small screens) */}
        <div className="text-gray-700 leading-relaxed md:w-2/3">
          <p className="text-xl font-semibold mb-3 text-indigo-700">Discipleship Ministry</p>
          <p>
            A **discipleship ministry** for youth and adults focuses on guiding
            individuals to grow spiritually and strengthen their faith. They
            organize Bible studies, prayer meetings, and mentorship programs to help
            participants understand and apply Christian teachings in their daily
            lives. The ministry also encourages **fellowship, service, and personal
            development**, creating a supportive community where both young people and
            adults can learn, share, and grow together in their spiritual journey.
          </p>
        </div>

        {/* Call to Action and Social Links (Right side) */}
        <div className="md:w-1/3 flex flex-col items-start md:items-end space-y-6">
          
          {/* Main Call to Action Button/Link */}
          <a
            href="/about" // Replace with actual "About Us" page link
            className="flex items-center space-x-2 text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full shadow-lg transition duration-300"
          >
            <span>Learn More About Us</span>
            <FaArrowRight className="text-xl" />
          </a>

          {/* Social Links Container */}
          <div className="flex flex-col items-start md:items-end">
            <div className="text-sm font-semibold uppercase text-gray-500 mb-2">
              Connect with us
            </div>
            <div className="flex space-x-4">
              {/* Facebook Link */}
              <a 
                href="[Your Facebook URL]" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-indigo-600 hover:text-indigo-800 transition duration-300"
                aria-label="Follow us on Facebook"
              >
                <FaFacebook size={28} />
              </a>
              
              {/* Instagram Link */}
              <a 
                href="[Your Instagram URL]" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-indigo-600 hover:text-indigo-800 transition duration-300"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram size={28} />
              </a>

              {/* YouTube Link */}
              <a 
                href="[Your YouTube URL]" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-indigo-600 hover:text-indigo-800 transition duration-300"
                aria-label="Subscribe to our YouTube channel"
              >
                <FaYoutube size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default WhatWeDo;
