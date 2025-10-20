import React, { useEffect } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    title: 'How We Built a Personal Branding Website in 3 Days',
    slug: 'branding-website-in-3-days',
    excerpt: 'Go behind the scenes of how our team at FAVMedia delivered a full personal branding site in just 3 days — design, development, and deployment.',
    image: 'https://res.cloudinary.com/dghoya7tk/image/upload/v1753047857/ChatGPT_Image_Jul_21_2025_03_12_52_AM_wdng5x.png',
    date: '2025-07-07',
  },
  {
    title: 'The Art of Editing: Video Content That Converts',
    slug: 'video-content-that-converts',
    excerpt: 'Learn how our editors transform raw footage into high-converting video content with storytelling, pacing, and branding.',
    image: 'https://res.cloudinary.com/dghoya7tk/image/upload/v1753048477/ChatGPT_Image_Jul_21_2025_03_24_13_AM_bd61ee.png',
    date: '2025-06-25',
  },
  {
    title: 'Top 5 Website Animations to Try in 2025',
    slug: 'top-5-animations-2025',
    excerpt: 'Discover the top 5 animation techniques that make websites feel alive and increase engagement in 2025.',
    image: 'https://res.cloudinary.com/dghoya7tk/image/upload/v1753049030/ChatGPT_Image_Jul_21_2025_03_33_14_AM_hl7n2v.png',
    date: '2025-06-10',
  },
];

const OurStories = () => {
    const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []) 

  return (
    // 1. MAIN SECTION: Changed from dark background/text to light
    <section className="pt-32 pb-20 px-6 md:px-12 min-h-screen bg-white text-gray-900">
      
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-10">Some of our interesting stories</h1>
        
      </header>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            onClick={() => navigate(`/blog/${post.slug}`)}
            // 2. CARD STYLING: Changed background, border, and shadow for a light theme look
            // bg-white, subtle border/shadow, and a slightly darker hover state
            className="group cursor-pointer bg-white border border-gray-200 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-gray-50"
          >
            <img
              src={post.image}
              alt={`Preview of blog: ${post.title}`}
              // 3. IMAGE STYLING: Retained grayscale on default, removed dark background
              className="w-full h-62 object-cover rounded-t-3xl filter grayscale group-hover:grayscale-0"
              loading="lazy"
            />

            <div className="p-6 flex flex-col justify-between h-[250px]">
              <div>
                {/* 4. TITLE COLOR: Changed to dark text */}
                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
                  {post.title}
                </h2>
                {/* 5. EXCERPT COLOR: Changed to standard body text color */}
                <p className="text-sm sm:text-[15px] text-gray-600">{post.excerpt}</p>
              </div>
              <div className="flex justify-between items-center">
                {/* 6. DATE COLOR: Changed to subtle gray */}
                <time
                  className="text-xs text-gray-500 mt-4"
                  dateTime={post.date}
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                {/* 7. ARROW ICON: Changed text/border color to fit light theme */}
                <span className="text-gray-700 p-3 border border-gray-300 rounded-full transition-transform duration-300 group-hover:rotate-45 group-hover:bg-indigo-50 group-hover:border-indigo-500">
                  <FaArrowRightLong />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default OurStories;