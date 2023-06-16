import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingPlaceholder from '../UI/LoadingPlaceholder';
import ArchieveNav from '../extraNews/ArchieveNav';

import './NewsAll.css';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';

function NewsAll(props) {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(props.url);
      setNews(response.data.articles);
      setLoading(false);
    };
    fetchNews();
  }, []);

  if (loading) {
    return <LoadingPlaceholder/>;
  }

  return (
    <>

    <div className="news-container">
      {news.map((article) => (
        <NewsCard article={article}/>
      ))}
    </div>
    </>
  );

}

export default NewsAll;