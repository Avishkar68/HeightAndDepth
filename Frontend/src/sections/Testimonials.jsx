import React, { useState, useEffect } from "react";
import axios from "axios"; // Ensure you have installed axios: npm install axios

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // Fetch data from the running backend server
        const response = await axios.get("http://localhost:3000/api/testimonials");
        setTestimonials(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
        setError("Failed to load testimonials. Please ensure the backend is running on port 5000.");
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-xl text-gray-600">
        Loading testimonials...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-xl text-red-600">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-12 px-6 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-10 text-gray-800">
        Testimonials from Our Disciplinary Session
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <div
              key={testimonial._id} // Use MongoDB's _id as key
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  // The image URL is now the secure Cloudinary URL from the DB
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
          ))
        ) : (
          <p className="text-center text-lg text-gray-500 col-span-full">
            No testimonials found yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Testimonials;