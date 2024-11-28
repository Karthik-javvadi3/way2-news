import React from 'react';
import '../styles/NewsCard.css';

const NewsCard = ({ news }) => {
  return (
    <div className="news-card">
      <div className="image-container">
        <img src={news.image} alt={news.title} />
        {news.duration && (
          <div className="duration">{news.duration}</div>
        )}
      </div>
      <div className="content">
        <div className="meta">
          <span className="category">{news.category}</span>
          <span className="date">{news.date}</span>
        </div>
        <h2 className="title">{news.title}</h2>
        <p className="description">{news.content}</p>
      </div>
    </div>
  );
};

export default NewsCard;