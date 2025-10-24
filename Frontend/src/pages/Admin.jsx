import React, { useState, useEffect } from "react";
import axios from "axios"; 

// 🚨 NOTE: Assuming your backend runs on port 3000 as specified in the original API_URL.
const API_URL = "http://localhost:3000/api/testimonials"; 

const AdminTestimonials = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [imageFile, setImageFile] = useState(null); 
  const [testimonials, setTestimonials] = useState([]);
  
  // State for the ADD form submission loading
  const [loading, setLoading] = useState(false); 
  // State for the list fetching loading
  const [listLoading, setListLoading] = useState(true); 
  
  const [feedback, setFeedback] = useState("");

  const goldColor = '#FFAA4C';
  const blueColor = '#22ABDF';

  // Function to fetch testimonials (called on mount and after actions)
  const fetchTestimonials = async () => {
    // Start loading the list
    setListLoading(true); 
    try {
      const response = await axios.get(API_URL);
      setTestimonials(response.data);
    } catch (err) {
      console.error("Error fetching testimonials for admin:", err);
      setFeedback("❌ Failed to fetch existing testimonials.");
    } finally {
      // Stop loading the list regardless of success or failure
      setListLoading(false); 
    }
  };

  // Calls API every time the user comes to this page
  useEffect(() => {
    fetchTestimonials();
  }, []); 

  // Handler for adding a new testimonial with file upload
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Clear feedback related to previous ADD actions
    setFeedback(""); 

    if (!name || !role || !message || !imageFile) {
      setFeedback("Please fill out all fields and select an image.");
      setLoading(false);
      return;
    }

    // 1. Create FormData object for multipart/form-data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('role', role);
    formData.append('message', message);
    formData.append('imageFile', imageFile); 

    try {
      await axios.post(API_URL, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setFeedback("✅ Testimonial added successfully!");
      
      // Reset form
      setName("");
      setRole("");
      setMessage("");
      setImageFile(null);
      document.getElementById('imageFile').value = ''; 
      
      fetchTestimonials(); // Refresh the list
    } catch (error) {
      setFeedback(`❌ Error: ${error.response?.data?.message || 'Failed to add testimonial.'}`);
      console.error("Add Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handler for deleting a testimonial
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this testimonial?")) {
      return;
    }

    try {
      await axios.delete(`${API_URL}/${id}`);
      setFeedback("🗑️ Testimonial deleted successfully!");
      fetchTestimonials(); // Refresh the list
    } catch (error) {
      setFeedback(`❌ Error deleting testimonial: ${error.message}`);
    }
  };


  return (
    // Updated background to a light gold/orange
    <div className="flex justify-center bg-orange-50  ">

    <div className="p-8 min-h-screen w-[1200px] ">
      <h1 
        className="text-4xl font-bold mb-8 text-gray-900"
        style={{ color: blueColor }} // Primary Blue Header
      >
        Admin Control: Testimonials
      </h1>

      {/* --- Add New Testimonial Form --- */}
      <div className="mb-12 p-6 border border-gray-200 rounded-lg shadow-lg bg-white">
        <h2 
          className="text-2xl font-semibold mb-4"
          style={{ color: blueColor }} // Primary Blue Sub-Header
        >
          Add New Testimonial
        </h2>
        <form onSubmit={handleAddSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
            style={{ '--tw-ring-color': blueColor }} // Focus ring is Primary Blue
            required
          />
          <input
            type="text"
            placeholder="Role / Location"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2"
            style={{ '--tw-ring-color': blueColor }} // Focus ring is Primary Blue
            required
          />
          <textarea
            placeholder="Testimonial Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded-md h-24 focus:outline-none focus:ring-2"
            style={{ '--tw-ring-color': blueColor }} // Focus ring is Primary Blue
            required
          />
          <input
            type="file"
            id="imageFile"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="w-full p-2 border rounded-md"
            required
          />
          
          <button
            type="submit"
            disabled={loading}
            className="text-white cursor-pointer p-2 rounded-md transition disabled:opacity-50"
            // Button is Primary Blue, hover is a darker shade
            style={{ backgroundColor: blueColor, '--tw-bg-opacity': 1, ':hover': { backgroundColor: '#1A89B6' } }}
          >
            {loading ? "Uploading..." : "Submit Testimonial"}
          </button>
          
          {feedback && (
            <p className={`mt-2 text-sm ${feedback.startsWith('❌') ? 'text-red-600' : 'text-green-600'}`}>
              {feedback}
            </p>
          )}
        </form>
      </div>

      {/* --- Existing Testimonials List --- */}
      <h2 
        className="text-2xl font-semibold mb-4"
        style={{ color: blueColor }} // Primary Blue Sub-Header
      >
        Existing Testimonials ({testimonials.length})
      </h2>
      <div className="space-y-4">
        {listLoading ? (
            // Show loader while fetching the list
            <p className="text-gray-500 italic">Loading existing testimonials...</p>
        ) : testimonials.length === 0 ? (
            <p className="text-gray-600">No testimonials currently exist in the database.</p>
        ) : (
            testimonials.map((t) => (
              <div key={t._id} className="p-4 border border-gray-100 rounded-md flex justify-between items-center bg-white shadow-sm">
                <div className="flex items-center">
                    {/* The image border could use the Gold accent color */}
                    <img 
                        src={t.image} 
                        alt={t.name} 
                        className="w-10 h-10 rounded-full object-cover mr-4 border-2" 
                        style={{ borderColor: goldColor }}
                    />
                    <div>
                        <p className="font-semibold">{t.name} <span className="text-gray-500 text-sm">({t.role})</span></p>
                        <p className="text-sm text-gray-700 italic truncate w-96">"{t.message}"</p>
                    </div>
                </div>
                <button
                  onClick={() => handleDelete(t._id)}
                  className="bg-red-500 cursor-pointer  text-white text-sm px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            ))
        )}
      </div>
    </div>
    </div>

  );
};

export default AdminTestimonials;