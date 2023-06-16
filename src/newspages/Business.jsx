import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsAll from "../news-comp/NewsAll";

const Business= () => {
  return(
    <div>
        <Navbar/>
        <NewsAll url='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a3a6299712f14fc7866fe706d906527c' />
        <Footer/>
    </div>
  )
}

export default Business;