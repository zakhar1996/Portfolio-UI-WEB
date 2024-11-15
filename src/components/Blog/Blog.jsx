import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Завантаження даних з blog.json, враховуючи правильний шлях
    fetch(process.env.PUBLIC_URL + "/blog.json")
      .then((response) => response.json())
      .then((data) => {
        // Шукаємо пост за ID
        const foundBlog = data.find((b) => b.id === parseInt(id));
        setBlog(foundBlog);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="content-wrapper">
      <div className="blog-content">
        <h1 className="blog-title">{blog.title}</h1>
        <p className="blog-author">
          <strong>Author: </strong>
          {blog.author}
        </p>
        <p className="blog-content-text">{blog.content}</p>
      </div>
    </div>
  );
};

export default Blog;

