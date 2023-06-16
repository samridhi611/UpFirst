import './newscard.css';
import like from '../images/like.png';
import share from "../images/share.png";
import save from "../images/save.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultImage from '../images/NoImage.png';

function NewsCard(props , onBookmark) {
    const { article } = props;
    const navigate = useNavigate();
    const [bookmarkedObjects, setBookmarkedObjects] = useState([]);

    // const handleBookmark = () => {
    //   setIsBookmarked(!isBookmarked);
    //   onBookmark(article); // Pass the entire news article object to onBookmark function
    // };


    function generateUniqueId() {
      return Date.now();
    }

    const handleBookmarkClick = (article) => {
      const existingBookmarks = JSON.parse(localStorage.getItem(`bookmark-{$id}`)) || [];
      const updatedBookmarks = [...existingBookmarks, article];
      const id = generateUniqueId();
      localStorage.setItem(`bookmark-{$id}` , JSON.stringify(updatedBookmarks));
      navigate('/bookmarked');
      console.log(updatedBookmarks)
      return id;
    };
    
    return (
      
        <div>

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
                 <a href={article.url}  target='_blank'><img src={share} alt="share"  className='share'/></a>
                 <img src={save} alt="save" className='save' onClick={() => handleBookmarkClick(article)}/> 
            </div>
            <p className="news-description">{article.description}</p>
            <div className='news-author'>
              <p>{article.author}</p>
              <p className='dot'/>
              <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        <div className='news-line'> </div>
        </div>
    );
  }
  
  export default NewsCard;