import "./Navbar.css";
import like from "../images/like.png";
import menu from "../images/menu.png";
import logo from "../images/logo.jpg";
import search from "../images/search.png"
import person from "../images/person.png";
import { Fragment } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SearchBar from "../UI/SearchBar";
import { useRef, useEffect } from "react";

import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap"; 
import SideBar from "./SideBar";

const Navbar = () => {

   // Profile Managing
   const [showDropdown, setShowDropdown] = useState(false);
   const navigate = useNavigate();
   // const profileHandler = () => {
   //      navigate('/profile')
   // }
   // const handleProfileIconHover = () => {
   //    setShowDropdown(!showDropdown);
   //  };

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


  /* ---- */

  //Search Managing
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  }

   /* ---- */
 
   // SideBar Managing
   const [show, setShow] = useState(false);

   /*  Returnn*/
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
             { !isSearchOpen ?
              <img src={search} alt="menu" className="iconListMem" onClick={handleSearchClick}/> 
              : <SearchBar onClose={() => setIsSearchOpen(false)} /> }
              <img src={like} alt="menu" className="iconListMem" /> 

              
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

    
       <div className="second">
        
            <div className="navs" >
               <Nav.Link as={NavLink}  to="/"  className={({isActive}) => (isActive ? "active" : 'none')}>ALL</Nav.Link> 
               <Nav.Link as={NavLink} to="/world" className={({isActive}) => (isActive ? "active" : 'none')} >WORLD</Nav.Link> 
               <Nav.Link as={NavLink} to="/politics" className={({isActive}) => (isActive ? "active" : 'none')}>POLITICS</Nav.Link> 
               <Nav.Link as={NavLink} to="/business" className={({isActive}) => (isActive ? "active" : 'none')}>BUSINESS</Nav.Link> 
               <Nav.Link as={NavLink} to="/sports" className={({isActive}) => (isActive ? "active" : 'none')}>SPORTS</Nav.Link> 
               <Nav.Link as={NavLink} to="/movies" className={({isActive}) => (isActive ? "active" : 'none')}>MOVIES</Nav.Link> 
               <Nav.Link as={NavLink} to="/science" className={({isActive}) => (isActive ? "active" : 'none')}>SCIENCE & TECHNOLOGY</Nav.Link> 
               <Nav.Link as={NavLink} to="/gaming" className={({isActive}) => (isActive ? "active" : 'none')}>GAMING</Nav.Link> 
               <Nav.Link as={NavLink} to="/general" className={({isActive}) => (isActive ? "active" : 'none')}>GENERAL</Nav.Link> 
            </div>
       
       </div>
       <SideBar show={show} setShow={setShow}/>
       </div>
    )
}

export default Navbar;
