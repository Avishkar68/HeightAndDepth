import React from "react";
import res from "../assets/resources1.png"
const Resources = () => {
  const goldColor = '#FFAA4C';
  const blueColor = '#22ABDF';
  const redColor = '#E34444'; // Adjusted a brighter red for the CTA, while keeping the original intent

  // The list of "I am" declarations from the image content
  const identityDeclarations = [
    "I am chosen by God! Eph 1:4",
    "I am precious in His sight! Is 43:4",
    "I am God's handiwork! Eph 2:10",
    "I am a disciple taught of the Lord! Is 54:13",
    "I am fearfully and wonderfully made! Ps 139:14",
    "I am full of faith, and I have victory! 1 John 5:4",
    "I am healed by the stripes of Jesus! 1 Peter 2:24",
    "I God's special treasure! Ex 19:5",
    "I am an overcomer! Jo 16:33",
    "I am led by the Spirit! Rom 8:14",
    "I am complete in Christ! Col 2:9",
    "I am a citizen of Heaven! Phil 3:20",
    "I am the light of the world! Eph 5:8",
    "I am redeemed from every curse! Gal 3:13",
    "I am a child of GOD! John 1:12",
    "I am made in God's image! Gen 1:27",
    "I am the temple of the Holy Spirit! 1 Cor 6:19",
    "I am blessed with every spiritual blessing! Eph 1:3",
    "I am an ambassador for Christ! 2 Cor 5:20",
    "I am known, consecrated and appointed! Jere 1:5",
  ];

  return (
    // Use a very light blue for the background to match the theme
    <section className="bg-blue-50 py-20 px-6 md:px-12 lg:px-24 space-y-16">
      {/* HEADER SECTION: WHO AM I ??? */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        
        <h1 
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
          style={{ color: blueColor }} // Primary Blue Header
        >
          WHO AM I ???
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold text-gray-700">
          DECLARING YOUR GOD GIVEN IDENTITY
        </h2>
        <div className="pt-6">
          <p className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
            DEATH AND LIFE ARE IN THE POWER OF THE TONGUE; AND THOSE WHO LOVE IT WILL EAT ITS FRUIT.
          </p>
          <p 
            className="text-lg font-medium mt-2"
            style={{ color: goldColor }} // Accent Gold for Scripture Reference
          >
            PROVERBS 18:21
          </p>
        </div>
      </div>

      {/* CONTENT: DECLARATIONS GRID */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start bg-white p-8 md:p-12 rounded-3xl shadow-xl">
        {/* Image / Featured Area - Placeholder for a relevant resource image or main ministry image */}
        <div className="flex flex-col items-center">
          <img
            src={res}
            alt="Person smiling, symbolizing spiritual identity"
            className="rounded-3xl shadow-lg object-cover w-full max-w-md h-auto mb-6"
          />
        </div>

        {/* Identity Declarations List */}
        <div className="text-gray-800 space-y-4">
          <h3 
            className="text-3xl font-bold border-b-2 pb-2 mb-6"
            style={{ color: blueColor, borderBottomColor: goldColor }} // Primary Blue Header with Gold Underline
          >
            Our Identity in Christ
          </h3>
          <ul className="space-y-3 list-none p-0">
            {identityDeclarations.map((declaration, index) => (
              <li key={index} className="flex items-start text-lg text-gray-700">
                <span 
                  className="font-extrabold mr-3 mt-1"
                  style={{ color: goldColor }} // Accent Gold Checkmark
                >
                  ✓
                </span>
                {/* Bold the main declaration part for emphasis, keeping the scripture reference unbolded */}
                {declaration.split('!').length > 1 ? (
                  <>
                    <span className="font-semibold">{declaration.split('!')[0]}!</span>
                    <span className="text-sm italic ml-1 text-gray-500">{declaration.split('!')[1]}</span>
                  </>
                ) : (
                  <span className="font-semibold">{declaration}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FOOTER CALL TO ACTION/NOTE (reusing the style from the image) */}
      <div className="max-w-4xl mx-auto text-center pt-8">
        <p 
          className="text-xl md:text-2xl font-semibold leading-relaxed"
          style={{ color: redColor }} // Retaining a strong contrast color for the CTA
        >
          Heights and Depths Ministry walks the journey with you to be deeply grounded in God's great love so you can experience the heights of His blessing in every area of your life.
        </p>
      </div>
    </section>
  );
};

export default Resources;