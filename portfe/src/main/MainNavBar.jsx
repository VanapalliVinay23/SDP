import React from 'react';
import About from './About';
import AdminLogin from '../admin/AdminLogin';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import NotFound from './NotFound';
import './main.css'; // Import your CSS
import UserViewCertificate from './UserViewCertificate';
import UserViewProject from './UserViewProject';
import UserViewSkills from './UserViewSkills';
import UserViewEducation from './UserViewEducation';

const MainNavBar = () => {
  const location = useLocation();

  return (
    <div>
      {/* Horizontal Navbar */}
      <nav className="main-navbar">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
        {/* <Link to="/adminlogin" className={location.pathname === "/adminlogin" ? "active" : ""}>Admin Login</Link> */}
        <Link to="/userviewcertificate">Certificate</Link>
        <Link to="/uservieweducation">Education</Link>
        <Link to="/userviewproject">Project</Link>
        <Link to="/userviewskills">Skills</Link>
    
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/userviewcertificate" element={<UserViewCertificate/>} />
        <Route path="/uservieweducation" element={<UserViewEducation/>}/>
        <Route path="/userviewproject" element={<UserViewProject/>}/>
         <Route path="/userviewskills" element={<UserViewSkills/>}/>

         
      </Routes>
    </div>
  );
};

export default MainNavBar;
