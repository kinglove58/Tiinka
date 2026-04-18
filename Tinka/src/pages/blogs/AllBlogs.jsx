import React, { useState, useContext } from "react";
import { FaCalendarAlt, FaSearch } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { BlogContext } from "../../BlogContext/BlogContext";
import ScrollAnimationWrapper from "../home/ScrollAnimationWrapper";

function AllBlogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleBlogs, setVisibleBlogs] = useState(9);

  const { blogs, filteredBlogs, setFilteredBlogs } = useContext(BlogContext);

  const structuredBlogs = (Array.isArray(filteredBlogs) ? filteredBlogs : [])
    .filter((blog) => blog?.slug && blog?.title)
    .slice(0, 20);

  const blogPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Tinka Health Services Mental Health Blog",
    url: "https://tinkahealthservices.com/blogs",
    description:
      "Mental health education, treatment insights, and practical resources for individuals and families in Maryland, Washington DC, and Virginia.",
    publisher: {
      "@type": "Organization",
      name: "Tinka Health Services",
      logo: {
        "@type": "ImageObject",
        url: "https://tinkahealthservices.com/images/logo/Tinka_health_logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://tinkahealthservices.com/blogs",
    },
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://tinkahealthservices.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: "https://tinkahealthservices.com/blogs",
      },
    ],
  };

  const blogListStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Tinka Health Services Blog Articles",
    itemListElement: structuredBlogs.map((blog, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://tinkahealthservices.com/blogs/${blog.slug}`,
      name: blog.title,
    })),
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredBlogs(filtered);
  };

  const handleViewMore = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 6);
  };

  return (
    <div className="container mx-auto px-4 md:px-16 py-8 mt-24">
      <Helmet>
        <title>
          Mental Health Blog in MD, DC and VA | Tinka Health Services
        </title>
        <meta
          name="description"
          content="Explore mental health articles from Tinka Health Services on anxiety, depression, ADHD, medication management, and telehealth psychiatry care for Maryland, Washington DC, and Virginia."
        />
        <meta
          name="keywords"
          content="mental health blog maryland, mental health blog washington dc, mental health blog virginia, psychiatry blog, adhd blog, anxiety treatment blog, depression treatment blog"
        />
        <link rel="canonical" href="https://tinkahealthservices.com/blogs" />
        <meta
          property="og:title"
          content="Mental Health Blog in MD, DC and VA | Tinka Health Services"
        />
        <meta
          property="og:description"
          content="Read practical mental health resources and psychiatry insights for individuals and families across MD, DC, and VA."
        />
        <meta
          property="og:url"
          content="https://tinkahealthservices.com/blogs"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(blogPageStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(blogListStructuredData)}
        </script>
      </Helmet>
      <ScrollAnimationWrapper>
        <div className="flex justify-between items-center mb-8">
          <h1 className="md:text-3xl text-sm font-semibold text-[#005ab0]">
            Mental Health Blog for Maryland, Washington DC and Virginia
          </h1>
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 pl-10 border border-gray-200 rounded w-full"
            />
            <button
              type="submit"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <FaSearch />
            </button>
          </form>
        </div>

        <div className="mb-6 bg-blue-50 border border-blue-100 rounded-lg p-4">
          <p className="text-gray-700 text-sm md:text-base">
            Learn about common mental health conditions, treatment options, and
            care tips from our psychiatric team. Explore resources that support
            better outcomes for individuals and families in MD, DC, and VA.
          </p>
          <div className="flex flex-wrap gap-3 mt-3">
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
              to="/meet-our-provider"
              className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold"
            >
              Meet Our Provider
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.slice(0, visibleBlogs).map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition duration-300"
            >
              <Link to={`/blogs/${blog.slug}`}>
                <img
                  width="100%"
                  height={192}
                  src={`https://api.tinkahealthservices.com${blog.image}`}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </Link>

              <div className="p-4">
                <Link to={`/blogs/${blog.slug}`}>
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
                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="flex items-center gap-1"
                    >
                      <span className="hover:text-orange-600">Read More</span>
                      <IoMdOpen />
                    </Link>
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
