// // 

// import { useState, useEffect } from 'react';
// import Fnav from '../components/Fnav';
// import Footer from '../components/Footer';
// import NewsCard from '../components/NewsCard';
// import '../news-comp/NewsAll.css';

// const Bookmarked = () => {
// //   const [bookmarks, setBookmarks] = useState([]);

// //   const bookmarkedKeys = keys.filter(key => key.startsWith('bookmark-'));

// //   useEffect(() => {
// //     const bookmark = localStorage.getItem(`object-${id}`);
// //     if (bookmark) {
// //       setBookmarks([...bookmarks, JSON.parse(bookmark)]);
// //     }
// //   }, []);
// const [bookmarkedObjects, setBookmarkedObjects] = useState([]);

//   useEffect(() => {
//     // Get all the keys in local storage
//     const keys = Object.keys(localStorage);

//     // Filter out the keys that correspond to bookmarked objects
//     const bookmarkedKeys = keys.filter(key => key.startsWith('bookmark-'));

//     // Map over the bookmarked keys and fetch the corresponding objects
//     const bookmarkedObjects = bookmarkedKeys.map(key => {
//       const id = key.slice('bookmark-'.length);
//       return id;
//     });

//     // Update the state with the bookmarked objects
//     setBookmarkedObjects(bookmarkedObjects);
//   }, []);

//   console.log( bookmarkedObjects );

//   return (
//     <>
//     <Fnav/>
//     <div className='news-container'>
//     {bookmarkedObjects.map((bookmark) => (
//         <NewsCard article={bookmark}/>
//       ))}
//       console.log(bookmark);
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default Bookmarked;
