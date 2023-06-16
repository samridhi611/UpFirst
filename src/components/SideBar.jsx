import './sidebar.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap"; 


const SideBar = (props) => {

    const [currentDate, setCurrentDate] = useState('');
    const handleClose = () => props.setShow(false);


    useEffect(() => {
        const date = new Date();
        const options = { weekday: 'long', month: 'long' ,day: 'numeric'};
        setCurrentDate(date.toLocaleDateString('en-US', options));
      }, []);

    return (
        <Offcanvas style={{backgroundColor:"#484a4a",width:"250px", justifyContect:"center" , padding:"0"}} show={props.show} onHide={handleClose} className="offcanvas">
        <Offcanvas.Header style={{color:"#fff" , height:"49px" , backgroundColor:"#484a4a" , padding:"13px 13px 16px 10px" ,borderBottom:"solid 1px #696b6b"}} className="my-offcanvas " >
          <Offcanvas.Title className="head">
        <div>
          <button type="button" className="btnof1">English</button>
          <button type="button" className="btnof2">हिंदी</button>
          </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="my-offcanvas" style={{padding:"0"}}>
          <div className="date">
            <h1>{currentDate}</h1>
          </div>
          <div className='navss'>
               <Nav.Link as={NavLink}  to="/"  className={({isActive}) => (isActive ? "active" : 'none')}>Home</Nav.Link> 
               <Nav.Link as={NavLink}  to="/"  className={({isActive}) => (isActive ? "active" : 'none')}>Categories</Nav.Link> 
               <Nav.Link as={NavLink}  to="/"  className={({isActive}) => (isActive ? "active" : 'none')}>View Archive</Nav.Link> 
               <Nav.Link as={NavLink}  to="/"  className={({isActive}) => (isActive ? "active" : 'none')}>My Bookmarked News</Nav.Link> 
               <Nav.Link as={NavLink}  to="/loginpage"  className={({isActive}) => (isActive ? "active" : 'none')}>My Account</Nav.Link> 
               <Nav.Link as={NavLink}  to="/"  className={({isActive}) => (isActive ? "active" : 'none')}>Language</Nav.Link> 
          </div>

          <div className='navss uss'>
               <Nav.Link as={NavLink}  to="/about"  className={({isActive}) => (isActive ? "active" : 'none')}>About Us</Nav.Link> 
               <Nav.Link as={NavLink}  to="/"  className={({isActive}) => (isActive ? "active" : 'none')}>Contact Us</Nav.Link> 
               <Nav.Link as={NavLink}  to="/download"  className={({isActive}) => (isActive ? "active" : 'none')}>Downlaod App</Nav.Link> 
               <Nav.Link as={NavLink}  to="/"  className={({isActive}) => (isActive ? "active" : 'none')}>Feedback</Nav.Link> 
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    )

}

export default SideBar;




  
