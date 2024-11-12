import React, { useEffect, useState } from "react";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";
import { Link } from "react-router-dom";

const iconMap = {
  FaUser: FaUser,
  FaCalendarAlt: FaCalendarAlt,
  IoMdOpen: IoMdOpen,
};

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.tinkahealthservices.com/api/blogs/4")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data.data); // Access the 'data' array from the API response
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-[#005ab0] font-bold mb-8 text-center">
        Resources to Help You
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition duration-300"
          >
            <Link to={`/blogs/${blog.title}`}>
              <img
                src={`https://api.tinkahealthservices.com${blog.image}`}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            </Link>

            <div className="p-4">
              <Link to={`/blogs/${blog.title}`}>
                <h1 className="text-xl font-bold mb-2 hover:text-orange-600">
                  {blog.title}
                </h1>
              </Link>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1 text-gray-600">
                  <FaCalendarAlt />
                  <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button className="flex items-center space-x-1 text-orange-500 hover:text-orange-600">
                  <Link to={`/blogs/${blog.title}`}>
                    <span className="hover:text-orange-600">Read More</span>
                  </Link>
                  <IoMdOpen />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
