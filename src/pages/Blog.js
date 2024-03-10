import React from "react";
import BlogGroup from "../components/BlogGroup";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import NavBar from "../components/NavBar";

const Blog = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Blog"} />

      {/* Blog Group */}
      <BlogGroup />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default Blog;
