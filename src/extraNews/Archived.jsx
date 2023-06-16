
import React, { useState, useEffect } from "react";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import '../components/newscard.css';
import like from '../images/like.png';
import share from "../images/share.png";
import save from "../images/save.png";
import defaultImage from '../images/NoImage.png';
import axios from "axios";
import LoadingPlaceholder from "../UI/LoadingPlaceholder";
import ArchieveNav from "./ArchieveNav";
import Footer from "../components/Footer";


const Archived = ({dates}) => {
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(new Date());
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?q=en&country=in&from=${dates}&to=${dates}&sortBy=publishedAt&apiKey=a3a6299712f14fc7866fe706d906527c`);
        setNews(response.data.articles);
        setLoading(false);
        console.log(response.data.articles)
    };
    fetchNews();
  }, [dates]);

//   const handleDateChange = (newDate) => {
//     setDate(newDate);
//   };

//   const dates = moment(date).format("MMMM Do, YYYY");

//   if (loading) {
//     return <LoadingPlaceholder/>;
//   }


  return (

    <div>
    <div>
      {/* <Calendar value={date} onChange={handleDateChange} /> */}
      {/* <h2>News articles for {props.date}</h2> */}

      { (loading) ? <LoadingPlaceholder/> :
    
        <div className="news-container">
          {news.map((article) => (
              <div key={article.id} className="news-article">
              {article.urlToImage ? (
              <img src={article.urlToImage}  className="news-image" alt={article.title} />
            ) : (
              <img src={defaultImage}  className="news-image" alt={article.title} />
        
            )}
            <div className='news-info'>
              <h2 className="news-title">{article.title}</h2>
              <div className='news-icons'>
                   <img src={like} alt="like" className='like'/>
                   <span>20</span>
                   <a href={article.url}><img src={share} alt="share"  className='share'/></a>
                   <img src={save} alt="save" className='save' /> 
              </div>
              <p className="news-description">{article.description}</p>
              <div className='news-author'>
                <p>{article.author}</p>
                <p className='dot'/>
                <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
  
          ))}
        </div>
}
    </div>
    </div>
  );
};

export default Archived;

