import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./WorkPage.css"; // Додаємо імпорт стилів

const WorkPage = () => {
  const [works, setWorks] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/works.json")
      .then((response) => response.json())
      .then((data) => setWorks(data))
      .catch((error) => console.error("Error", error));
  }, []);

  // Перевіряємо, чи користувач на сторінці всіх вакансій або на головній
  const isAllWorksPage = location.pathname === "/works";

  return (
    <div className="content-wrapper">
      <div className={isAllWorksPage ? "all-works-page" : "home-works-page"}>
        <h1
          className={
            isAllWorksPage ? "all-works-title" : "featured-works-title"
          }
        >
          {isAllWorksPage ? "Work" : "Featured Works"}
        </h1>
        <ul className={isAllWorksPage ? "works-list-all" : "works-list-home"}>
          {works.slice(0, isAllWorksPage ? works.length : 3).map((work) => (
            <li key={work.id} className="work-item">
              <Link to={`/works/${work.id}`} className="work-link">
                <div className="work-content">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="work-image"
                  />
                  <div className="work-details">
                    <h2 className="work-details-title">{work.title}</h2>
                    <div className="work-meta">
                      <p className="work-date">{work.date}</p>
                      <p className="work-author">{work.author}</p>
                    </div>
                    <p className="work-details-discribe">{work.description}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkPage;
