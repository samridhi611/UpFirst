import logo from "../images/Blacklogo.png";
import insta from "../images/insta.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import button from "../images/button.png";


import "./Footer.css";

const Footer = () => {

    const dhan = () => {
        window.location.href = "/download";
    }

    const than = () => {
        window.location.href = "/about";
    }

    const tehan = () => {
        window.location.href = "/terms";
    }
    return (
        <div className="footer section__padding">
            <div className="one">
              <div className="lang">
              <select name="language" id="language" className="list">
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>
              </div>
                  
              <div className="detail">
                  <li onClick={dhan}>Download</li>
                  <li onClick={than}>Our Team</li>
                  <li>Careers</li>
              </div>
                
              <div className="detail">
                  <li onClick={than}>About Us</li>
                  <li>Contact Us</li>
                  <li>Partner</li>
              </div>

              <div className="detail">
                  <li onClick={tehan}>Terms</li>
                  <li onClick={tehan}>Privacy</li>
                  <li>Site Map</li>
              </div>
            </div>

            <div className="two">
                <div className="info">
                    <img src={logo} alt="logo" />
                    <p>We are a technology - enabled
                        news company that aims to deliver
                        fresh news through our network and
                        provide transparency to our clients.
                    </p>
                </div>

                <div className="mail">
                    <h1>Sign up for email alerts</h1>
                    <p>Stay current with our latest insights</p>
                    <div className="mailInput">
                        <input type="email" placeholder="Enter Email Id" />
                        <button type="button"><img src={button} alt="arrow button"/></button>
                    </div>
                </div>

                <div className="contact">
                    <h1>Connect</h1>
                    <p>Stay in touch with us</p>
                    <div className="socials">
                        <img src={facebook} alt="facebook" className="firstPic"/>
                        <img src={insta} alt="insta" className="secondPic"/>
                        <img src={twitter} alt="twitter" className="thirdPic"/>

                    </div>
                </div>

            </div>

            <div className="line"></div>

            <div className="copyright">
                <p>© Copyright 2017. UpFirst Services Pvt Ltd</p>
            </div>
        </div>


    )
}

export default Footer;