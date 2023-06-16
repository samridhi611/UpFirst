import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsAll from "../news-comp/NewsAll";

const Politics = () => {
    return(
        <div>
            <Navbar/>
            <NewsAll url="https://newsapi.org/v2/top-headlines?country=in&category=politics&apiKey=a3a6299712f14fc7866fe706d906527c"/>
            <Footer/>
        </div>
      )
}

export default Politics;