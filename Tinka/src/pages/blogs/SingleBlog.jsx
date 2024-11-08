import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/api/blogs/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBlog(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 md:px-16 py-8 mt-24">
      {blog && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={`http://localhost:8000${blog.image}`}
            alt={blog.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
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
      )}
    </div>
  );
}

export default SingleBlog;
