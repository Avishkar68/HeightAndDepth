import React from "react";

const Hero = () => {
  return (
    <div>

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
      <div className="relative z-10 max-w-5xl px-6 mt-[-60px]">
        <h1 className="text-4xl md:text-5xl lg:text-[70px] leading-[80px] font-semibold ">
          Transforming lives <br />through Biblical discipleship


        </h1>

        <div className="flex ">
          <p className=" text-3xl md:text-[120px] absolute left-[200px] top-[170px] leading-[20px] z-10 font-curly text-[#22ABDF] ">
            Height &
          </p>
          <p className=" text-3xl md:text-[120px] absolute left-[550px] top-[170px] leading-[20px] z-10 font-curly text-[#22ABDF] ">
            Depth
          </p>
        </div>
        <p className=" text-3xl md:text-[60px] mt-10 font-bold font-basicall text-white ">
          Ministries
        </p>
      
      </div>
      
    </section>
    <div className='  mx-auto text-center w-screen   mt-[-73px] py-6 bg-[#EEF6FF] font-bold mb-10 text-[#22ABDF]'>
      "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son<br/> and of the Holy Spirit, teaching them to observe all that I have commanded you."- Matthew 28:19-20 
      </div>
    </div>
  );
};

export default Hero;
