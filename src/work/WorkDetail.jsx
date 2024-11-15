import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './WorkDetail.css';

const WorkDetail = () => {
  const { id } = useParams(); // Отримуємо id вакансії з URL
  const [work, setWork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true); // Починаємо завантаження
    fetch(process.env.PUBLIC_URL + "/works.json") // Завантажуємо JSON файл
      .then((response) => {
        if (!response.ok) {
          throw new Error("Помилка при завантаженні даних");
        }
        return response.json();
      })
      .then((data) => {
        const foundWork = data.find((item) => item.id === parseInt(id, 10));
        if (foundWork) {
          setWork(foundWork);
        } else {
          setError("Вакансія не знайдена");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("Помилка при завантаженні даних");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="content-wrapper">
      <div className="work-details-page">
        <h1 className="work-details-title">{work.title}</h1>
        <div className="work-details-work-meta">
          <p className="work-details-work-date">{work.date}</p>
          <p className="work-details-work-author">{work.author}</p>
        </div>
        <p className="work-details-description">{work.description}</p>
        <img src={process.env.PUBLIC_URL + '/images/' + work.image} alt={work.title} className="work-details-image" />
      </div>
    </div>
  );
};

export default WorkDetail;

