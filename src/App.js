import React, { useState } from 'react';
import Header from './components/Header';
import NewsCard from './components/NewsCard';
import { newsData } from './data/newsData';
// import './styles/App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('topStories');

  return (
    <div className="app">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        <div className="news-container">
          {newsData[activeTab].map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;