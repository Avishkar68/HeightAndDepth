import React from "react";

const testimonialsData = [
  {
    name: "Rohan D’Souza",
    role: "Youth Member, Mumbai",
    message:
      "The disciplinary session on Christian values helped me understand the importance of obedience and humility in daily life. It was eye-opening and deeply spiritual.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Ananya Fernandes",
    role: "Student, Goa",
    message:
      "I truly felt God’s presence throughout the session. The way discipline was connected to faith made me rethink how I live my Christian life.",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
  },
  {
    name: "Samuel Mathew",
    role: "Volunteer, Kerala",
    message:
      "The discussion helped me realize that discipline isn’t about punishment but about spiritual growth and walking closely with Christ every day.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  }
];

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-10 text-gray-800">
        Testimonials from Our Disciplinary Session
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              “{testimonial.message}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
