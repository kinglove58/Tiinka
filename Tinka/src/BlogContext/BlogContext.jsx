import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";


export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [policy, setPolicy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [policyLoading, setPolicyLoading] = useState(false)

  function createSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')   // Remove special characters
      .replace(/\s+/g, '-')       // Replace spaces with hyphens
      .trim();                    // Remove any trailing hyphens
  }

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://api.tinkahealthservices.com/api/blogs/30");
        setBlogs(response.data.data.map(blog => ({
            ...blog,
            slug: createSlug(blog.title)
          })
        ));
        setFilteredBlogs(response.data.data.map(blog => ({
            ...blog,
            slug: createSlug(blog.title)
          })
        ));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    
    fetchBlogs();
  }, []);

  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        const response = await axios.get(
          "https://api.tinkahealthservices.com/api/page/2"
        );
        setPolicy(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setPolicyLoading(false)
      }
    };

    fetchPolicy();
  }, []);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <PuffLoader color="#FF4500" size={80} />
      </div>
    );
  }

  const value = {
    blogs,
    filteredBlogs,
    loading,
    error,
    setFilteredBlogs,
    setBlogs,
    setError,
    setLoading,
    policy,
    policyLoading
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
