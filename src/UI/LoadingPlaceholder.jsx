import "./LoadingPlaceholder.css"
import holder from "../images/Placeholder.png";
import Navbar from "../components/Navbar";
import Upnav from "../components/Upnav";
import Footer from "../components/Footer";


function LoadingPlaceholder() {
    const divArray = [1, 2, 3];
    return (
    <>
     {divArray.map((item, index) => (
     <div key={index}>
      <div className="loading-placeholder">
        <div className="loading-placeholder__animation">
            <img src={holder} alt="placeholder" />
        </div>
        <div className="lines">
            <div className="loading-placeholder__text"></div>
            <div className="loading-placeholder__text"></div>
            <div className="loading-placeholder__text"></div>
            <div className="loading-placeholder__text"></div>
            <div className="loading-placeholder__text"></div>
            <div className="loading-placeholder__text"></div>
            <div className="loading-placeholder__text"></div>
            <div className="loading-placeholder__text"></div>
        </div>
      </div>
      <div className="sepline"><div/>
      </div>
      </div>
      ))}
    </>
    );
  }

  export default LoadingPlaceholder;