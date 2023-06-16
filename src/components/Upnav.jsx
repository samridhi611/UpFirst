import "./Navbar.css";
import like from "../images/like.png";
import menu from "../images/menu.png";
import logo from "../images/upsurge.png";
import search from "../images/search.png"
import person from "../images/person.png";
import SideBar from "./SideBar";
import { useState , useRef , useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap"; 

const Upnav = () => {
   const [show, setShow] = useState(false);

   
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
        <div className="first">
            <div onClick={() => setShow(true)}> 
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
     
        <div className="second2">
         
             <div className="navs" >
                <Nav.Link as={NavLink}  to="/about"  className={({isActive}) => (isActive ? "active" : 'none')}>ABOUT US</Nav.Link> 
                <Nav.Link as={NavLink} to="/press" className={({isActive}) => (isActive ? "active" : 'none')} >PRESS</Nav.Link> 
                <Nav.Link as={NavLink} to="/terms" className={({isActive}) => (isActive ? "active" : 'none')}>TERMS</Nav.Link> 
                <Nav.Link as={NavLink} to="/careers" className={({isActive}) => (isActive ? "active" : 'none')}>CAREERS</Nav.Link> 
                <Nav.Link as={NavLink} to="/contact" className={({isActive}) => (isActive ? "active" : 'none')}>CONTACT</Nav.Link> 
             </div>
        
        </div>
        <SideBar show={show} setShow={setShow}/>

        </div>
    )
}

export default Upnav;