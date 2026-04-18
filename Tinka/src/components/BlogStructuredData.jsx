import React from "react";
import { Helmet } from "react-helmet";

const BlogStructuredData = ({ blog, slug }) => {
  if (!blog) return null;

  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt || blog.title,
    author: {
      "@type": "Organization",
      name: "Tinka Health Services",
      url: "https://tinkahealthservices.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Tinka Health Services",
      logo: {
        "@type": "ImageObject",
        url: "https://tinkahealthservices.com/logo.png",
      },
    },
    datePublished: new Date(blog.created_at).toISOString(),
    dateModified: new Date(blog.updated_at || blog.created_at).toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://tinkahealthservices.com/blogs/${slug}`,
    },
    url: `https://tinkahealthservices.com/blogs/${slug}`,
    image: blog.image
      ? `https://api.tinkahealthservices.com${blog.image}`
      : "https://tinkahealthservices.com/logo.png",
    articleSection: "Mental Health",
    keywords: [
      "mental health",
      "therapy",
      "wellness",
      "Tinka Health Services",
      "Virginia mental health",
      "Maryland mental health",
    ],
    about: {
      "@type": "Thing",
      name: "Mental Health",
      description: "Mental health and wellness information",
    },
  };

  // Add breadcrumb structured data
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
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: `https://tinkahealthservices.com/blogs/${slug}`,
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(blogStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
    </Helmet>
  );
};

export default BlogStructuredData;
