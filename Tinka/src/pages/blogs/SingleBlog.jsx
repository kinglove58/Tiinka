import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";
import slugify from "slugify";
import { BlogContext } from "../../components/BlogContext";

function SingleBlog() {
  const { blogs } = useContext(BlogContext);
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const blogItem = blogs.find((blog) => blog.title === id);
  const blogId = blogItem ? blogItem.id : id;

  useEffect(() => {
    fetch(`http://localhost:8000/api/blog/${blogId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBlog(data); // Ensure correct data mapping
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (blog) {
      fetch(`http://localhost:8000/api/blogs?keyword=${blog.title}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setRelatedBlogs(data.data.slice(0, 3)); // Show only 3 related blogs
        })
        .catch((error) => {
          setError(error);
        });
    }
  }, [blog]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!blog) {
    return <div>No blog found</div>;
  }

  const slug = slugify(blog.title, { lower: true });

  return (
    <div className="container mx-auto px-4 md:px-16 py-8 mt-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4">
          <p>Updated on: {new Date(blog.updated_at).toLocaleDateString()}</p>
          <p>
            Time to read: {Math.ceil(blog.body.split(" ").length / 200)} min
            read
          </p>
        </div>
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={`http://localhost:8000${blog.image}`}
            alt={blog.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <div className="flex items-center space-x-4 mb-4 text-gray-600">
              <FaCalendarAlt />
              <span>{new Date(blog.created_at).toLocaleDateString()}</span>
            </div>
            <div
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: blog.body }}
            ></div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Related Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedBlogs.map((relatedBlog) => (
              <div
                key={relatedBlog.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition duration-300"
              >
                <Link to={`/blogs/${relatedBlog.id}`}>
                  <img
                    src={`http://localhost:8000${relatedBlog.image}`}
                    alt={relatedBlog.title}
                    className="w-full h-48 object-cover"
                  />
                </Link>
                <div className="p-4">
                  <Link to={`/blogs/${relatedBlog.id}`}>
                    <h1 className="text-xl font-bold mb-2 hover:text-orange-600">
                      {relatedBlog.title}
                    </h1>
                  </Link>
                  <div className="flex items-center space-x-4 mb-4 text-gray-600">
                    <FaCalendarAlt />
                    <span>
                      {new Date(relatedBlog.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="flex items-center space-x-1 text-orange-500 hover:text-orange-600">
                      <Link to={`/blogs/${relatedBlog.id}`}>
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
      </div>
    </div>
  );
}

export default SingleBlog;
