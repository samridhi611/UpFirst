import mobile from "../images/Mobile.png";
import app from "../images/app.png";
import google from "../images/googleplay.png";
import "./downlaod.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Download = () => {
   return(
      <div>
         <Navbar/>
      
      <div className="download download__padding">
         <img src={mobile} alt="mobile" className="mobimg"/>
         <div className="infos">
            <h1>Get the UpFirst app</h1>
            <p>We understand you don’t have time to go through long news articles everyday. So we cut the clutter and deliver them, in 60-word shorts. Short news for the mobile generation.</p>
            <h3>We'll send you a link, open it on your phone to download the
            app</h3>

            <div className="number">
               <button type="button" className="btn1">+91</button>
               <input type="tel" placeholder="Enter Phone Number"/>
               <button type="button" className="btn2">Text App Link</button>
            </div>

            <div className="or">
               <div className="lines"></div>
               <h2>OR</h2>
               <div className="lines"></div>
            </div>

            <div className="mails">
               <input type="email" placeholder="Enter your email id"/>
                
               <button type="button" variant="outline-primary">Email App Link</button>
            </div>

            <div className="images">
               <img src={app} alt="app" className="img1"/>
               <img src={google} alt="googleplay" className="img2"/>
            </div>
         </div>


      </div>
      <Footer/>
      </div>
   )
}

export default Download;