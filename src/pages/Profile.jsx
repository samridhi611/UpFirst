import Fnav from "../components/Fnav";
import "./Profile.css";
import { NavLink } from "react-router-dom";
import {Nav, Navbar as NavbarBs} from "react-bootstrap"; 
import profile from "../images/Profilepic.png"


const Profile= () => {
    return(
        <>
        <Fnav/>
            <div class="profile">
            <div class="nav">
               <Nav.Link as={NavLink}  to="/profile"  className={({isActive}) => (isActive ? "active" : 'none')}>EDIT PROFILE</Nav.Link> 
               <Nav.Link as={NavLink} to="/changepass" className={({isActive}) => (isActive ? "active" : 'none')} >CHANGE PASSWORD</Nav.Link> 
               <Nav.Link as={NavLink} to="/emailndsms" className={({isActive}) => (isActive ? "active" : 'none')}>EMAIL AND SMS</Nav.Link> 
            </div>
            <div class="user-info">
                <div className="user-detail">
                    <img src={profile} alt="profile pic" />
                    <h1>Dheeraj Taneja</h1>
                </div>
            <form>
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName"/>
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName"/>
                </div>
                <div class="form-group">
                    <label for="email">Email ID</label>
                    <input type="email" id="email" name="email"/>
                </div>
                <div class="form-group">
                    <label for="mobileNumber">Mobile No.</label>
                    <input type="tel" id="mobileNumber" name="mobileNumber"/>
                </div>
                <button type="submit">Submit</button>
            </form>
            </div>
            </div>
        </>
    )
}

export default Profile;