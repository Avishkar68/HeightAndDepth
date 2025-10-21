import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24 space-y-20">
      {/* MAIN INTRO SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://res.cloudinary.com/dghoya7tk/image/upload/v1734240011/church_1.jpg"
          alt="Heights and Depths Ministry"
          className="rounded-3xl shadow-lg object-cover w-full h-96 md:h-[500px]"
        />
        <div className="text-gray-800">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-indigo-800">
            The People Behind the Passion
          </h1>
          <h2 className="text-2xl font-semibold mb-4">Meet Regina Flanery & Manju Sujith</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            A supernatural encounter! In His divine wisdom, the Lord brought together
            two women — one from India and one from the USA — at the School of Ministry
            at Charis Bible College Class of 2025. United by a shared passion to glorify
            God and see Jesus birth the supernatural through their lives, they were led
            to establish Heights and Depths Ministries, a discipleship movement reaching
            people of all ages.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When they returned to their respective nations in May 2025, God faithfully
            opened doors for ministry among youth and women. Today, they continue to
            walk in His grace, serving in both India and the USA, deeply grateful to be
            entrusted with lives longing for hope, love, restoration, and a fresh beginning.
          </p>
        </div>
      </div>

      {/* DIVINE APPOINTMENTS & CONTACT */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-lg p-8 md:p-12">
        <div>
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">Divine Appointments</h2>
          <ul className="text-gray-700 mb-6 space-y-2">
            <li>Thursday 10:00 AM - 12:00 AM (CDT) Home Groups</li>
            <li>Thursday 6:00 PM - 7:30 PM (CDT) Haven Home Ministry</li>
            <li>Friday 9:00 PM - 10:00 PM (IST) Online Study</li>
            <li>Saturday 6:00 PM - 7:00 PM (IST) Onsite Youth Ministry</li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-2">Email: <a href="mailto:email@heightanddepthministries.co.in" className="text-indigo-600 underline">email@heightanddepthministries.co.in</a></p>
          <p className="text-gray-700 mb-2">Website: <a href="https://www.heightanddepthministries.co.in" className="text-indigo-600 underline">www.heightanddepthministries.co.in</a></p>
          <p className="text-gray-700 mb-2">Phone (India): +91 986 066-7533</p>
          <p className="text-gray-700 mb-2">Phone (USA): +1 903 278-1851</p>
        </div>
      </div>

      {/* OUR TEAM SECTION */}
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-6 text-center">
          Our Team
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://res.cloudinary.com/dghoya7tk/image/upload/v1734240120/church_3.jpg"
              alt="Mrs. Kruti Andharia"
              className="rounded-2xl shadow-lg object-cover w-full h-72 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Mrs. Kruti Andharia</h3>
            <p className="text-gray-600">Resource Facilitator</p>
          </div>
          {/* Team Member 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://res.cloudinary.com/dghoya7tk/image/upload/v1734240174/church_4.jpg"
              alt="Mr. Prashant Thaker"
              className="rounded-2xl shadow-lg object-cover w-full h-72 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Mr. Prashant Thaker</h3>
            <p className="text-gray-600">Finance & Outreach Coordinator</p>
          </div>
        </div>
      </div>

      {/* FOOTER NOTE */}
      <p className="text-center text-gray-500 mt-12 text-sm">
        Equipping lives to embrace the infinite love of God through a journey of Biblical discipleship.<br/>
        &copy; 2025 Heights and Depth Ministries
      </p>
    </section>
  );
};

export default About;
