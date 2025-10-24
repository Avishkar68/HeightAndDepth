// script.js (Node.js/Express Backend with require/CommonJS)

// Load environment variables from .env file
require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const cloudinary = require('cloudinary').v2; // Note the .v2 here

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// --- Cloudinary Configuration ---
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// --- Multer Configuration ---
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// --- Middleware Setup ---
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// --- MongoDB Connection ---
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));

// --- Mongoose Schema and Model ---
const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  message: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

// --- API Routes ---

// 1. GET: Fetch all testimonials (Public display)
app.get('/api/testimonials', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching testimonials', error: err.message });
  }
});

// 2. POST: Add a new testimonial (Admin control page)
app.post('/api/testimonials', upload.single('imageFile'), async (req, res) => {
  try {
    const { name, role, message } = req.body;
    const file = req.file;

    if (!name || !role || !message || !file) {
      return res.status(400).json({ message: 'Missing name, role, message, or image file.' });
    }

    const b64 = Buffer.from(file.buffer).toString("base64");
    let dataURI = "data:" + file.mimetype + ";base64," + b64;
    
    const cloudinaryResponse = await cloudinary.uploader.upload(dataURI, {
        folder: "testimonial-images",
        resource_type: "auto"
    });

    const newTestimonial = new Testimonial({
      name,
      role,
      message,
      image: cloudinaryResponse.secure_url
    });

    const savedTestimonial = await newTestimonial.save();
    res.status(201).json(savedTestimonial);

  } catch (err) {
    console.error("Cloudinary or MongoDB Error:", err);
    res.status(500).json({ message: 'Error saving testimonial', error: err.message });
  }
});

// 3. DELETE: Delete a testimonial by ID (Admin control page)
app.delete('/api/testimonials/:id', async (req, res) => {
  try {
    const result = await Testimonial.findByIdAndDelete(req.params.id);

    if (!result) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    res.json({ message: 'Testimonial deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting testimonial', error: err.message });
  }
});


// --- Server Start ---
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});