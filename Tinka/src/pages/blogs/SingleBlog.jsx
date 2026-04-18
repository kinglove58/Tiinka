import React, { Suspense, lazy, useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";
import { BlogContext } from "../../BlogContext/BlogContext";
import ScrollAnimationWrapper from "../home/ScrollAnimationWrapper";
import { PuffLoader } from "react-spinners";
import { Helmet } from "react-helmet";
import BlogStructuredData from "../../components/BlogStructuredData";

const MentalHealthStats = lazy(() => import("../home/MentalHealthStats"));

function SingleBlog() {
  const { blogs, loading, error } = useContext(BlogContext);
  const { slug } = useParams();
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const blogItem = blogs.find((blog) => blog.slug === slug);
  const plainBody = String(blogItem?.body || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const metaDescription =
    blogItem?.excerpt ||
    (plainBody
      ? `${plainBody.slice(0, 155)}...`
      : "Read this mental health article from Tinka Health Services.");
  const readTimeMinutes = Math.max(
    1,
    Math.ceil(plainBody.split(" ").length / 200),
  );
  const keywordContent = Array.isArray(blogItem?.keywords)
    ? blogItem.keywords.join(", ")
    : blogItem?.keywords ||
      "mental health blog, psychiatry, medication management, telehealth psychiatry, maryland, washington dc, virginia";

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

  if (!blogItem) {
    return <div className="pt-28 text-center">No blog found</div>;
  }

  return (
    <ScrollAnimationWrapper>
      <BlogStructuredData blog={blogItem} slug={slug} />
      <Helmet>
        <title>{blogItem.title} | Tinka Health Services Blog</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywordContent} />
        <link
          rel="canonical"
          href={`https://tinkahealthservices.com/blogs/${slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blogItem.title} />
        <meta property="og:description" content={metaDescription} />
        <meta
          property="og:url"
          content={`https://tinkahealthservices.com/blogs/${slug}`}
        />
        {blogItem.image && (
          <meta
            property="og:image"
            content={`https://api.tinkahealthservices.com${blogItem.image}`}
          />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogItem.title} />
        <meta name="twitter:description" content={metaDescription} />
      </Helmet>
      <div className="mx-auto px-4 md:px-16 py-8 pt-24 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{blogItem.title}</h1>
          <div className="mb-4 flex flex-row">
            <p className="mr-4">
              Updated on: {new Date(blogItem.updated_at).toLocaleDateString()}
            </p>
            <p>Time to read: {readTimeMinutes} min read</p>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
            <img
              width="100%"
              height={192}
              src={`https://api.tinkahealthservices.com${blogItem.image}`}
              alt={blogItem.title}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <div
              className="prose lg:prose-xl md:prose-lg sm:prose-sm prose-gray blog-item"
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
                      width="100%"
                      height={192}
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

        <div className="mt-10 bg-blue-50 border border-blue-100 rounded-lg p-5">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Continue Your Care Journey
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/services"
              className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold"
            >
              Explore Services
            </Link>
            <Link
              to="/telehealth-psychiatry-md-dc-va"
              className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold"
            >
              Telehealth Psychiatry
            </Link>
            <Link
              to="/insurance-we-accept"
              className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold"
            >
              Insurance We Accept
            </Link>
            <Link
              to="/booking"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold"
            >
              Book Appointment
            </Link>
          </div>
        </div>

        <div className="w-full mt-8">
          <Suspense fallback={<div>Loading...</div>}>
            <MentalHealthStats />
          </Suspense>
        </div>
      </div>
    </ScrollAnimationWrapper>
  );
}

export default SingleBlog;
