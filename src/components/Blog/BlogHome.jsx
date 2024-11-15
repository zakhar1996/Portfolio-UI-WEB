import './BlogHome.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const BlogHome = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    // Завантаження даних з blog.json
    fetch(process.env.PUBLIC_URL + '/blog.json')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.log(error));
  }, []);

  const handleViewAll = () => {
    navigate('/all-blogs'); 
  };

  const handleClickBlog = (id) => {
    navigate(`/blog/${id}`); // Перехід на сторінку конкретного блогу
  };

  return (
    <div className="content-wrapper">
      <div className="blog-home-wrapper">
        <div className="blog-home">
          <div className="blog-home__header">
            <h1 className="blog-home__title">Recent posts</h1>
            <button onClick={handleViewAll} className="blog-home__button">View all</button>
          </div>
          <ul className="blog-home__list">
            {blogs.slice(0, 2).map((blog) => (
              <li 
                key={blog.id} 
                className="blog-home__item" 
                onClick={() => handleClickBlog(blog.id)} 
              >
                <h2 className="blog-home__item-title">{blog.title}</h2>
                <div className="blog-home__item-meta">
                  <p className="blog-home__item-date">{blog.date}</p> 
                  <p className="blog-home__item-author">{blog.author}</p>
                </div>
                <p className="blog-home__item-content">{blog.content.slice(0, 300)}...</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;


