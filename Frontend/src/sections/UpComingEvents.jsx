import React from "react";

const UpComingEvents = () => {
  const events = [
    {
      title: "Discipleship Workshop: Walking in Obedience",
      date: "November 15, 2025",
      description:
        "Join us for an interactive session on spiritual discipline, faith, and obedience to God’s Word — a journey toward deeper relationship with Christ.",
      buttonText: "Learn More",
    },
    {
      title: "Community Prayer & Worship Night",
      date: "November 28, 2025",
      description:
        "An evening of worship, testimonies, and heartfelt prayer. Come experience God’s presence as we lift our voices together in unity.",
      buttonText: "Join Us",
    },
    {
      title: "Faith in Action: Outreach Sunday",
      date: "December 10, 2025",
      description:
        "Be the hands and feet of Christ! Volunteer in our outreach to local communities and share the love of Jesus through service.",
      buttonText: "Volunteer",
    },
  ];

  return (
    <section className="pb-20 bg-white text-gray-800" id="events">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center" >
          Upcoming Events
        </h2>
        <p className="text-gray-600 max-w-[720px] text-center mx-auto text-[20px] mt-4 leading-[28px] mb-10">
          Join us as we grow together in faith and purpose through worship,
          study, and community.
        </p>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-[#141722] text-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3 text-blue-300">
                {event.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4 italic">{event.date}</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {event.description}
              </p>
              <a
                href="/contact"
                className="border cursor-pointer border-blue-400 px-5 py-2 rounded-full text-sm text-blue-200 hover:bg-blue-400 hover:text-white transition"
              >
                {event.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpComingEvents;
