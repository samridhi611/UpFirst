import './App.css';
import {Routes,Route} from "react-router-dom";
import { useState,useEffect } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from './UI/Container';
import Press from './pages/Press';
import Terms from './pages/Terms';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Business from './newspages/Business';
import Gaming from './newspages/Gaming';
import General from './newspages/General';
import Movies from './newspages/Movies';
import Politics from './newspages/Politics';
import Science from './newspages/Science';
import Sports from './newspages/Sports';
import World from './newspages/World';
import Home from './newspages/Home';
import Download from './pages/Downlaod';
import Banner from './components/Banner';
import About from './pages/About';
import LoadingPlaceholder from './UI/LoadingPlaceholder';
import Profile from './pages/Profile';
import LoginPage from './signup/LoginPage';
import Bookmarked from './extraNews/Bookmarked';
import Archieve from './extraNews/Archieve';
import Archived from './extraNews/Archived';
import ArchieveNav from './extraNews/ArchieveNav';
import Acc from './components/auth/Acc';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';



function App() {

  const [showBanner, setShowBanner] = useState(false);

  const handleBannerClose = () => {
    setShowBanner(false);
  };
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowBanner(true);
    }, 20000);

    return () => {
      clearInterval(intervalId);
    };
  }, [showBanner]);

  return (
    <div>
    {showBanner && <Banner onBannerClose={handleBannerClose}/>}
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/business" element={<Business/>} />
      <Route path="/gaming" element={<Gaming/>} />
      <Route path="/general" element={<General/>} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/politics" element={<Politics/>} />
      <Route path="/science" element={<Science/>} />
      <Route path="/sports" element={<Sports/>} />
      <Route path="/world" element={<World/>} />
      <Route path="/download" element={<Download/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/press' element={<Press/>}/>
      <Route path='/terms' element={<Terms/>}/>
      <Route path='/careers' element={<Career/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/loader' element={<LoadingPlaceholder/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/loginpage' element={<LoginPage/>}/>
      {/* <Route path='/bookmarked' element={<Bookmarked/>}/> */}
      <Route path='/archieve' element={<Archieve/>}/>
      <Route path='/arc' element={<Archived/>}/>
      <Route path='/arcn' element={<ArchieveNav/>}/>

      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/auth' element={<AuthDetails/>}/>
      <Route path='/acc' element={<Acc/>}/>



      

      
      
    </Routes>
    </div>

  );
}

export default App;
