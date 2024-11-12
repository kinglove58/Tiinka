import React, { createContext, useEffect, useState } from "react";
export const BlogContext = createContext();
export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.tinkahealthservices.com/api/blogs/30")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Sorry Network response was not ok, you can refresh the page"
          );
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data.data); // Access the 'data' array from the API response
        setFilteredBlogs(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const value = {
    blogs,
    filteredBlogs,
    loading,
    error,
    setFilteredBlogs,
    setBlogs,
    setError,
    setLoading,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
