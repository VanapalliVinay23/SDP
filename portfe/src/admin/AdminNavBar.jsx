import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import AdminHome from './AdminHome';
import AddSkill from './AdminSkills';
import AdminLogin from './AdminLogin';
import AdminEducation from './AdminEducation';
import { useAuth } from '../contextapi/AuthContext';
import AdminCertificate from './AdminCertificate';
import AdminProject from './AdminProject';
import './admin.css'; // ✅ Import CSS

export default function AdminNavBar() {
  const { setIsAdminLoggedIn } = useAuth();

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
  };

  return (
    <div>
      <nav className="admin-navbar">
        <Link to="/adminhome" className="nav-link">Home</Link>
        <Link to="/adminskills" className="nav-link">Skill</Link>
        <Link to="/admineducation" className="nav-link">Education</Link>
        <Link to="/admincertificate" className="nav-link">Certificate</Link>
        <Link to="/adminproject" className="nav-link">Projects</Link>
        <Link to="/adminlogin" onClick={handleLogout} className="nav-link logout">Logout</Link>
      </nav>

      <div className="admin-routes">
        <Routes>
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/adminskills" element={<AddSkill />} />
          <Route path="/admineducation" element={<AdminEducation />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admincertificate" element={<AdminCertificate />} />
          <Route path="/adminproject" element={<AdminProject />} />
        </Routes>
      </div>
    </div>
  );
}
