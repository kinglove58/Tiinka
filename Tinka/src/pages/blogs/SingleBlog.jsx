import React, { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";
import { BlogContext } from "../../BlogContext/BlogContext";
import MentalHealthStats from "../home/MentalHealthStats";
import ScrollAnimationWrapper from "../home/ScrollAnimationWrapper";
import { PuffLoader } from "react-spinners";

function SingleBlog() {
  const { blogs, loading, error } = useContext(BlogContext);
  const { slug } = useParams();
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const blogItem = blogs.find((blog) => blog.slug === slug);

  useEffect(() => {
    if (blogItem) {
      const titleWords = blogItem.title.toLowerCase().split(" ");
      const related = blogs.filter((blog) => {
        if (blog.slug === slug) return false;
        const blogTitleWords = blog.title.toLowerCase().split(" ");
        return titleWords.some((word) => blogTitleWords.includes(word));
      });
      setRelatedBlogs(related);
    }
  }, [blogItem, blogs, slug]);

  if (!blogItem) {
    return <div>No blog found</div>;
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <PuffLoader color="#FF4500" size={80} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ScrollAnimationWrapper>
      <div className="mx-auto px-4 md:px-16 py-8 pt-24 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{blogItem.title}</h1>
          <div className="mb-4 flex flex-row">
            <p className="mr-4">
              Updated on: {new Date(blogItem.updated_at).toLocaleDateString()}
            </p>
            <p>
              Time to read: {Math.ceil(blogItem.body.split(" ").length / 200)}{" "}
              min read
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
            <img
              src={`https://api.tinkahealthservices.com${blogItem.image}`}
              alt={blogItem.title}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <div
              className="text-gray-800 font-normal text-xl"
              dangerouslySetInnerHTML={{ __html: blogItem.body }}
            ></div>
          </div>
        </div>
        {relatedBlogs.length > 0 && (
          <div className="mt-8">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <div
                  key={relatedBlog.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition duration-300"
                >
                  <Link to={`/blogs/${relatedBlog.slug}`}>
                    <img
                      src={`https://api.tinkahealthservices.com${relatedBlog.image}`}
                      alt={relatedBlog.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </Link>
                  <div className="p-4">
                    <Link to={`/blogs/${relatedBlog.slug}`}>
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
                        <Link to={`/blogs/${relatedBlog.slug}`}>
                          <span className="hover:text-orange-600">
                            Read More
                          </span>
                        </Link>
                        <IoMdOpen />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="w-full mt-8">
          <MentalHealthStats />
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
}

export default SingleBlog;
