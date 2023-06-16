import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewsAll from "../news-comp/NewsAll";

const Gaming= () => {
    return(
        <div>
            <Navbar/>
            <NewsAll url='https://newsapi.org/v2/everything?q=gaming&apiKey=a3a6299712f14fc7866fe706d906527c'/>
            <Footer/>
        </div>
      )
}

export default Gaming;