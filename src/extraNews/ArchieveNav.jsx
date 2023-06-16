// import "../components/Navbar.css";
// import { useState ,useRef , useEffect} from "react";
// import { useNavigate } from "react-router-dom";
// import like from "../images/like.png";
// import menu from "../images/menu.png";
// import logo from "../images/logo.jpg";
// import search from "../images/search.png"
// import person from "../images/person.png";
// import { NavLink } from "react-router-dom";
// import SideBar from "../components/SideBar";
// import './ArchieveNav.css';
// import Footer from "../components/Footer";
// import moment from "moment";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import Archived from "./Archived";

// const ArchieveNav = () => {

//   // Date Managing

//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);

//   const [date, setDate] = useState(new Date());

//   const toggleCalendar = () => {
//     setIsCalendarOpen(!isCalendarOpen);
//   };

//   useEffect(() => {
//     const formattedDate = moment(date).format("YYYY-MM-DD");
//   }, [date]);

//   const handleDateSelect = (date) => {
//     setDate(date);
//   };
  
//   const [show, setShow] = useState(false);
 
  
//   const dates = moment(date).format("MMMM Do, YYYY");

//    // Profile Managing
//    const [showDropdown, setShowDropdown] = useState(false);

//    const handleMouseEnter = () => {
//       setShowDropdown(true);
//     };
  
//     const handleMouseLeave = () => {
//       setShowDropdown(false);
//     };

//     const handleProfileClick = () => {
//       setShowDropdown(!showDropdown);
//     };

//     const dropdownRef = useRef(null);

//     useEffect(() => {
//       const handleOutsideClick = (event) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//           setShowDropdown(false);
//         }
//       };
    
//       document.addEventListener('mousedown', handleOutsideClick);
    
//       return () => {
//         document.removeEventListener('mousedown', handleOutsideClick);
//       };
//     }, [dropdownRef]);


  
//     return (
//       <>
//        <div className="box">
//        <div className="first profile-nav">
//            <div  onClick={() => setShow(true)}> 
//               <img src={menu} alt="menu" className="icon"/> 
//            </div>

//            <div className="logoC"> 
//               <img src={logo} alt="menu" style={{textAlign:"center"}}  className="logo"/> 
//            </div>

//            <div className="iconList"> 
//               <img src={search} alt="menu" className="iconListMem"/> 
//               <img src={like} alt="menu" className="iconListMem"/> 

//               <img src={person} alt="menu" className="iconListMem" onMouseEnter={handleMouseEnter}  onClick={handleProfileClick}/> 
//               {showDropdown && (
//                <div className="dropdown" ref={dropdownRef}>
//                <ul>
//                   <li> <NavLink to="/profile" > View Profile </NavLink></li>
//                   <li> <NavLink to="/profile" > View Archieved </NavLink></li>
//                   <li> <NavLink to="/profile" > My Bookmarked </NavLink></li>
//                   <li> <NavLink to="/profile" > Notifications </NavLink></li>
//                   <li> <NavLink to="/profile" > Help Center </NavLink></li>
//                   <li> <NavLink to="/profile" > Logout </NavLink></li>
//                </ul>
//                </div>
//              )}
//            </div>

       
      
//        </div>
//        <div className="archive">
//          <h1 onClick={toggleCalendar}>Archived, {moment(date).format("MMMM Do, YYYY")}</h1>
         
//        </div>

//        <SideBar show={show} setShow={setShow}/>
//        </div>
//             {isCalendarOpen && <Calendar value={date} onDateSelect={handleDateSelect} />}
            
//             <Archived date={dates}/>
//         <Footer/>
//        </>
      
//     )
// }

// export default ArchieveNav;

import "../components/Navbar.css";
import { useState ,useRef , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import like from "../images/like.png";
import menu from "../images/menu.png";
import logo from "../images/logo.jpg";
import search from "../images/search.png"
import person from "../images/person.png";
import { NavLink } from "react-router-dom";
import SideBar from "../components/SideBar";
import './ArchieveNav.css';
import Footer from "../components/Footer";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Archived from "./Archived";

const ArchieveNav = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showDropdown, setShowDropdown] = useState(false);
  const [show, setShow] = useState(false);

  const handleDateSelect = (date) => {
    setDate(date);
  };

  useEffect(() => {
    const formattedDate = moment(date).format("MMMM Do, YYYY");
    document.title = `Archived, ${formattedDate}`;
  }, [date]);

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

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownRef]);

  return (
    <>
      <div className="box">
        <div className="first profile-nav">
          <div onClick={() => setShow(true)}>
            <img src={menu} alt="menu" className="icon" />
          </div>

          <div className="logoC">
            <img
              src={logo}
              alt="menu"
              style={{ textAlign: "center" }}
              className="logo"
            />
          </div>

          <div className="iconList">
            <img src={search} alt="menu" className="iconListMem" />
            <img src={like} alt="menu" className="iconListMem" />

            <img
              src={person}
              alt="menu"
              className="iconListMem"
              onMouseEnter={handleMouseEnter}
              onClick={handleProfileClick}
            />
            {showDropdown && (
              <div className="dropdown" ref={dropdownRef}>
                <ul>
                  <li>
                    <NavLink to="/profile"> View Profile </NavLink>
                  </li>
                  <li>
                    <NavLink to="/profile"> View Archieved </NavLink>
                  </li>
                  <li>
                    <NavLink to="/profile"> My Bookmarked </NavLink>
                  </li>
                  <li>
                    <NavLink to="/profile"> Notifications </NavLink>
                  </li>
                  <li>
                    <NavLink to="/profile"> Help Center </NavLink>
                  </li>
                  <li>
                    <NavLink to="/profile"> Logout </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="archive">
          <h1 onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
            Archived, {moment(date).format("MMMM Do, YYYY")}
          </h1>
        </div>
        <SideBar show={show} setShow={setShow} />
      </div>
      {isCalendarOpen && (
        <Calendar value={date} onDateSelect={handleDateSelect} />
      )}
      <Archived dates={moment(date).format("MMMM Do, YYYY")}/>
      <Footer/>
  </>
      )
    }

    export default ArchieveNav;
