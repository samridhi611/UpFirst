import "./Navbar.css";
import { useState ,useRef , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import like from "../images/like.png";
import menu from "../images/menu.png";
import logo from "../images/logo.jpg";
import search from "../images/search.png"
import person from "../images/person.png";
import { NavLink } from "react-router-dom";
import SideBar from "./SideBar";

const Fnav = () => {

   
  const [show, setShow] = useState(false);

   // Profile Managing
   const [showDropdown, setShowDropdown] = useState(false);

   const handleMouseEnter = () => {
      setShowDropdown(true);
    };
  
    const handleMouseLeave = () => {
      setShowDropdown(false);
    };

    const handleProfileClick = () => {
      setShowDropdown(!showDropdown);
    };

    const dropdownRef = useRef(null);

    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setShowDropdown(false);
        }
      };
    
      document.addEventListener('mousedown', handleOutsideClick);
    
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [dropdownRef]);


  
    return (
       <div className="box">
       <div className="first profile-nav">
           <div  onClick={() => setShow(true)}> 
              <img src={menu} alt="menu" className="icon"/> 
           </div>

           <div className="logoC"> 
              <img src={logo} alt="menu" style={{textAlign:"center"}}  className="logo"/> 
           </div>

           <div className="iconList"> 
              <img src={search} alt="menu" className="iconListMem"/> 
              <img src={like} alt="menu" className="iconListMem"/> 

              <img src={person} alt="menu" className="iconListMem" onMouseEnter={handleMouseEnter}  onClick={handleProfileClick}/> 
              {showDropdown && (
               <div className="dropdown" ref={dropdownRef}>
               <ul>
                  <li> <NavLink to="/profile" > View Profile </NavLink></li>
                  <li> <NavLink to="/profile" > View Archieved </NavLink></li>
                  <li> <NavLink to="/profile" > My Bookmarked </NavLink></li>
                  <li> <NavLink to="/profile" > Notifications </NavLink></li>
                  <li> <NavLink to="/profile" > Help Center </NavLink></li>
                  <li> <NavLink to="/profile" > Logout </NavLink></li>
               </ul>
               </div>
             )}
           
           
           </div>
       </div>
       <SideBar show={show} setShow={setShow}/>
       </div>
      
    )
}

export default Fnav;