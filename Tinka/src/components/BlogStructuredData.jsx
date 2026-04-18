import React from "react";
import { Helmet } from "react-helmet";

const BlogStructuredData = ({ blog, slug }) => {
  if (!blog) return null;

  const contentPreview =
    blog.excerpt ||
    String(blog.body || "")
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 160) ||
    blog.title;

  const keywordList = Array.isArray(blog.keywords)
    ? blog.keywords
    : typeof blog.keywords === "string"
      ? blog.keywords.split(",").map((k) => k.trim())
      : [];

  const mergedKeywords = [
    ...keywordList,
    "mental health",
    "psychiatry",
    "medication management",
    "telehealth psychiatry",
    "Maryland",
    "Washington DC",
    "Virginia",
  ];

  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: contentPreview,
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
        url: "https://tinkahealthservices.com/images/logo/Tinka_health_logo.png",
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
      : "https://tinkahealthservices.com/images/logo/Tinka_health_logo.png",
    articleSection: "Mental Health",
    keywords: mergedKeywords,
    about: {
      "@type": "Thing",
      name: "Mental Health",
      description:
        "Mental health and wellness information for Maryland, Washington DC, and Virginia",
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
