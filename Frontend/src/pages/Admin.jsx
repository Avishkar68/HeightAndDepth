import React, { useState, useEffect } from "react";
import axios from "axios"; 
import AdminContactSubmissions from "../components/AdminContactSubmissions.jsx";

// 🚨 NOTE: Updated port to 5000 to match backend script.js
const API_URL = "http://localhost:3000/api/testimonials"; 

// --- Constants for colors and tab names ---
const blueColor = '#22ABDF';
const goldColor = '#FFAA4C';

const TABS = {
  ADD: 'Add Testimonial',
  MANAGE: 'Manage Testimonials',
  CONTACTS: 'Contact Submissions',
};

const AdminTestimonials = () => {
  // State for tab control, default to Manage for visibility
  const [selectedTab, setSelectedTab] = useState(TABS.MANAGE); 

  // States for 'Add New Testimonial' form
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [imageFile, setImageFile] = useState(null); 
  
  // State for testimonial data
  const [testimonials, setTestimonials] = useState([]);
  
  // State for the ADD form submission loading
  const [loading, setLoading] = useState(false); 
  // State for the list fetching loading
  const [listLoading, setListLoading] = useState(true); 
  
  const [feedback, setFeedback] = useState("");

  // Function to fetch testimonials (called on mount and after actions)
  const fetchTestimonials = async () => {
    // Only fetch if the user is on a tab that requires the list
    if (selectedTab === TABS.MANAGE || selectedTab === TABS.ADD) {
      setListLoading(true); 
      try {
        const response = await axios.get(API_URL);
        setTestimonials(response.data);
      } catch (err) {
        console.error("Error fetching testimonials for admin:", err);
        setFeedback("❌ Failed to fetch existing testimonials.");
      } finally {
        setListLoading(false); 
      }
    }
  };

  // Calls API every time the component mounts OR selectedTab changes to MANAGE/ADD
  useEffect(() => {
    fetchTestimonials();
    // Clear feedback when tab changes
    setFeedback(""); 
  }, [selectedTab]); 

  // Handler for adding a new testimonial with file upload
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
      setFeedback("✅ Testimonial added successfully! The list is now updated.");
      
      // Reset form
      setName("");
      setRole("");
      setMessage("");
      setImageFile(null);
      // Safely reset the file input element's value
      const fileInput = document.getElementById('imageFile');
      if(fileInput) fileInput.value = '';
      
      fetchTestimonials(); // Refresh the list
      // Optionally switch to the Manage tab after a successful add
      // setSelectedTab(TABS.MANAGE); 

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
      setFeedback("🗑️ Testimonial deleted successfully! Refreshing list...");
      fetchTestimonials(); // Refresh the list
    } catch (error) {
      setFeedback(`❌ Error deleting testimonial: ${error.message}`);
    }
  };


  // --- Helper Components for Rendering Tabs ---

  const AddTestimonialView = () => (
    <div className="mb-12 p-8 border border-gray-200 rounded-3xl shadow-lg bg-white max-w-3xl mx-auto"> 
        {/* Increased padding and shadow, matched rounded corners to the Contact form */}
        <p className="text-gray-600 mb-6 border-b pb-4">
            Use this form to add a new testimonial, including the client's name, role, message, and a profile image.
        </p>
        <form onSubmit={handleAddSubmit} className="space-y-6">
            
            {/* Name Input */}
            <div className="text-left">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Client Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Client Name (e.g., Jane Doe)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    // Applied Contact Form Styles: rounded-xl, px-4 py-3
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': blueColor }}
                    required
                />
            </div>

            {/* Role/Location Input */}
            <div className="text-left">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    Role / Location <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="role"
                    placeholder="Role / Location (e.g., Community Leader, NYC)"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                     // Applied Contact Form Styles: rounded-xl, px-4 py-3
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': blueColor }}
                    required
                />
            </div>

            {/* Message Textarea */}
            <div className="text-left">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Testimonial Message <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="message"
                    placeholder="Write the full testimonial message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    // Applied Contact Form Styles: rounded-xl, px-4 py-3
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 h-32 focus:outline-none focus:ring-2"
                    style={{ '--tw-ring-color': blueColor }}
                    required
                />
            </div>

            {/* File Input */}
            <div className="text-left flex flex-col">
                <label htmlFor="imageFile" className="block text-sm font-medium text-gray-700 mb-2">
                    Profile Image <span className="text-red-500">*</span>
                </label>
                <input
                    type="file"
                    id="imageFile"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files[0])}
                    // Styled the file input container for better integration
                    className="p-3 border border-gray-300 rounded-xl bg-gray-50"
                    required
                />
            </div>
            
            {/* Submission Feedback */}
            {feedback && selectedTab === TABS.ADD && (
                <p className={`mt-2 text-sm ${feedback.startsWith('❌') ? 'text-red-600' : 'text-green-600'}`}>
                    {feedback}
                </p>
            )}
            
            {/* Submit Button */}
            <button
                type="submit"
                disabled={loading}
                // Applied Contact Form Styles: w-full, py-3, rounded-xl
                className="w-full text-white py-3 cursor-pointer rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 hover:bg-opacity-90"
                style={{ backgroundColor: blueColor }}
            >
                {loading ? "Uploading..." : "Submit Testimonial"}
            </button>
            
        </form>
    </div>
);

  const ManageTestimonialsView = () => (
    <div className="space-y-4">
      {/* Show feedback here if the delete action was triggered from this tab */}
      {feedback && selectedTab === TABS.MANAGE && (
          <p className={`mb-4 text-sm ${feedback.startsWith('❌') ? 'text-red-600' : 'text-green-600'}`}>
            {feedback}
          </p>
        )}
      {listLoading ? (
          <p className="text-gray-500 italic">Loading existing testimonials...</p>
      ) : testimonials.length === 0 ? (
          <div className="p-4 bg-gray-50 border border-dashed rounded-md text-center text-gray-600">
            <p className="mb-2">No testimonials currently exist in the database.</p>
            <button
                onClick={() => setSelectedTab(TABS.ADD)}
                className="text-white text-sm px-3 py-1 rounded transition hover:opacity-90"
                style={{ backgroundColor: goldColor }}
            >
                Add the First Testimonial
            </button>
          </div>
      ) : (
          testimonials.map((t) => (
            <div key={t._id} className="p-4 border border-gray-100 rounded-md flex justify-between items-center bg-white shadow-sm">
              <div className="flex items-center">
                  <img 
                      // NOTE: Assuming 't.image' is the full URL or path to the image
                      src={t.image} 
                      alt={t.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4 border-2 shadow-sm" 
                      style={{ borderColor: goldColor }}
                  />
                  <div>
                      <p className="font-semibold text-gray-800">{t.name} <span className="text-gray-500 text-sm font-normal">({t.role})</span></p>
                      <p className="text-sm text-gray-700 italic max-w-lg">
                        "{t.message.substring(0, 100)}{t.message.length > 100 ? '...' : ''}"
                      </p>
                  </div>
              </div>
              <button
                onClick={() => handleDelete(t._id)}
                className="bg-red-500 cursor-pointer text-white text-sm px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          ))
      )}
    </div>
  );

  const ContactSubmissionsView = () => (
    // Re-use the existing component for this view
    <AdminContactSubmissions blueColor={blueColor} />
  );


  // --- Main Render ---
  return (
    // Updated background to a light gold/orange
    <div className="flex justify-center  min-h-screen">

    <div className="p-8 w-[1200px] max-w-full">
      <h1 
        className="text-4xl font-extrabold mb-4 border-b-2 pb-2 text-gray-900"
        style={{ color: blueColor, borderColor: goldColor }} // Primary Blue Header with Gold accent line
      >
        Admin Control: Dashboard
      </h1>
      
      {/* --- Tab Navigation Bar --- */}
      <div className="flex space-x-2 border-b border-gray-200 mb-8">
        {Object.values(TABS).map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`py-2 px-4 cursor-pointer text-lg font-medium transition-all duration-300 ${
              selectedTab === tab 
                ? 'border-b-4 text-gray-900' // Active tab style
                : 'text-gray-500 hover:text-gray-700' // Inactive tab style
            }`}
            style={{ borderColor: selectedTab === tab ? blueColor : 'transparent' }}
          >
            {tab}
          </button>
        ))}
      </div>


      {/* --- Dynamic Content Area --- */}
      <div className="pb-12">
       
        
        {/* Render the selected component */}
        {selectedTab === TABS.ADD && <AddTestimonialView />}
        {selectedTab === TABS.MANAGE && <ManageTestimonialsView />}
        {selectedTab === TABS.CONTACTS && <ContactSubmissionsView />}
      </div>

    </div>
    </div>

  );
};

export default AdminTestimonials;