import {  Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Business from './pages/Business';
import Gaming from './pages/Gaming';
import General from './pages/General';
import Movies from './pages/Movies';
import Politics from './pages/Politics';
import Science from './pages/Science';
import Sports from './pages/Sports';
import World from './pages/World';
import Home from './pages/Home';
import Download from './pages/Downlaod.jsx';
function AppRoutes() {
  return (
    <div>
    <Navbar/>
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
    </Routes>
    <Footer/>
    </div>

  );
}

export default AppRoutes;
