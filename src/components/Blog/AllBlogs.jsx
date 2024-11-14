import "./AllBlogs.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Імпортуємо Link для навігації

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Завантаження даних з blog.json
    fetch("/blog.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="content-wrapper">
      <div className="all-blogs-wrapepr">
        <div className="all-blogs">
          <header className="all-blogs__header">
            <h1>Blog</h1>
          </header>
          <main className="all-blogs__content">
            <ul className="all-blogs__list">
              {blogs.map((blog) => (
                <li key={blog.id} className="all-blogs__item">
                  <h2 className="all-blogs__item-title">
                    <Link to={`/blog/${blog.id}`} className="blog-link-title">
                      {blog.title}
                    </Link>
                  </h2>
                  <div className="all-blogs__item-info">
                    <p className="all-blogs__item-author">{blog.author}</p>
                    <p className="all-blogs__item-date">{blog.date}</p>
                  </div>
                  <p className="all-blogs__item-content">{blog.content}</p>
                </li>
              ))}
            </ul>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
