// WorkDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './WorkDetail.css';

const WorkDetail = () => {
  const { id } = useParams(); // Отримуємо id вакансії з URL
  const [work, setWork] = useState(null);

  useEffect(() => {
    fetch("/works.json")
      .then((response) => response.json())
      .then((data) => {
        const foundWork = data.find((item) => item.id === parseInt(id, 10));
        setWork(foundWork);
      })
      .catch((error) => console.error("Error:", error));
  }, [id]);

  if (!work) return <p>Loading...</p>;

  return (
    <div className="content-wrapper">
      <div className="work-details-page">
        <h1 className="work-details-title">{work.title}</h1>
        <div className="work-details-work-meta">
        <p className="work-details-work-date">{work.date}</p>
          <p className="work-details-work-author">{work.author}</p>
          
        </div>
        <p className="work-details-description">{work.description}</p>
        <img src={work.image} alt={work.title} className="work-details-image" />
      
      </div>
    </div>
  );
};

export default WorkDetail;
