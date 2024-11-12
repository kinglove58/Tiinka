import React, { useState, useContext } from "react";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BlogContext } from "../../components/BlogContext";
import ScrollAnimationWrapper from "../home/ScrollAnimationWrapper";

const iconMap = {
  FaUser: FaUser,
  FaCalendarAlt: FaCalendarAlt,
  IoMdOpen: IoMdOpen,
};

function AllBlogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleBlogs, setVisibleBlogs] = useState(9);

  const { blogs, filteredBlogs, loading, error, setFilteredBlogs } =
    useContext(BlogContext);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(term)
    );
    setFilteredBlogs(filtered);
  };

  const handleViewMore = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 6);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 md:px-16 py-8 mt-24">
      <ScrollAnimationWrapper>
        <div className="flex justify-between items-center mb-8">
          <h1 className="md:text-3xl text-sm font-semibold text-[#005ab0]">
            The Best Mental Health Blogs Created Just for You!
          </h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={handleSearch}
              className="p-2 pl-10 border border-gray-200 rounded w-full"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.slice(0, visibleBlogs).map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition duration-300"
            >
              <Link to={`/blogs/${blog.title}`}>
                <img
                  src={`http://localhost:8000${blog.image}`}
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
                    <span>
                      {new Date(blog.created_at).toLocaleDateString()}
                    </span>
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
        {visibleBlogs < filteredBlogs.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleViewMore}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              View More
            </button>
          </div>
        )}
      </ScrollAnimationWrapper>
    </div>
  );
}

export default AllBlogs;
