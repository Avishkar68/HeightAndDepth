import React from "react";

const Hero = () => {
  return (
    <section
      className="w-screen h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
        <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1920&q=80"
          alt="Children smiling - education initiative"
          className="w-full h-full object-cover brightness-[0.65] "
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          Genocide education <br /> and Human rights initiative
        </h1>

        <p className="mt-6 text-3xl md:text-4xl font-signature text-[#91b8ff] italic">
          in charge <span className="block md:inline">of future</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
