import React, { useEffect } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.png"

const blogPosts = [
  {
    title: 'Learning Obedience Through Discipline',
    slug: 'learning-obedience-through-discipline',
    excerpt: 'A look into how discipline helps Christians grow in faith, humility, and obedience to God’s Word — not as punishment, but as spiritual formation.',
    image: blog1,
    date: '2025-07-15',
  },
  {
    title: 'Building a Life Rooted in Faith and Discipline',
    slug: 'building-a-life-rooted-in-faith',
    excerpt: 'Discover how faith-based discipline helps Christians stay strong in temptation, build moral strength, and grow in Christ-centered character.',
    image: blog2,
    date: '2025-07-02',
  },
  {
    title: 'Walking with Christ Daily: Lessons from the Disciplinary Workshop',
    slug: 'walking-with-christ-daily',
    excerpt: 'Insights and reflections from our community’s recent disciplinary workshop — understanding daily obedience as an act of love toward God.',
    image: blog3,
    date: '2025-06-20',
  },
];

const OurStories = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mt-[0px]  px-6 md:px-12  bg-white text-gray-900">
     

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            onClick={() => navigate(`/blog/${post.slug}`)}
            className="group cursor-pointer bg-white border border-gray-200 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-gray-50"
          >
            <img
              src={post.image}
              alt={`Preview of blog: ${post.title}`}
              className="w-full h-64 object-cover rounded-t-3xl filter grayscale group-hover:grayscale-0"
              loading="lazy"
            />

            <div className="p-6 flex flex-col justify-between h-[250px]">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
                  {post.title}
                </h2>
                <p className="text-sm sm:text-[15px] text-gray-600">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <time
                  className="text-xs text-gray-500"
                  dateTime={post.date}
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>

                <span className="text-gray-700 p-3 border border-gray-300 rounded-full transition-transform duration-300 group-hover:rotate-45 group-hover:bg-indigo-50 group-hover:border-indigo-500">
                  <FaArrowRightLong />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OurStories;
