import React, { useState } from 'react';
import '../styles/LayoutStyles.css';
import { adminMenu, userMenu } from '../Data/data';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Badge, message } from 'antd';
import DoctorAppointments from './../pages/doctor/DoctorAppointments';


const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  // logout function
  const handleLogout = () => {
    localStorage.clear();
    message.success('Logout Successfully');
    navigate('/login');
  };

  // =========== doctor menu ===============
  const doctorMenu = [
    {
      name: 'Home',
      path: '/',
      icon: 'fa-solid fa-house',
    },
    {
      name: 'Appointments',
      path: '/doctor-appointments',
      icon: 'fa-solid fa-list',
    },
    {
      name: 'Profile',
      path: `/doctor/profile/${user?._id}`,
      icon: 'fa-solid fa-user',
    },
  ];
  // =========== doctor menu ===============

  // rendering menu list
  const SidebarMenu = user?.isAdmin ? adminMenu : user?.isDoctor ? doctorMenu : userMenu;

  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const isAppointmentsPage = location.pathname === '/appointments';
  const getCurrentPath = () => {
    return location.pathname;
  };

  return (
    <>

      <div  className=' nav container b-b-line '>
      {getCurrentPath() === "/" && <h2>Home</h2>}
      {getCurrentPath() === "/appointments" && <h2>Appointments</h2>}
      {getCurrentPath() === "/doctor-list" && <h2>Doctors</h2>}
      {getCurrentPath() === "/doctor-appointments" && <h2>Appointments Dashboard</h2>}
      {getCurrentPath() === "/profile" && (
        <h2>My Profile</h2>
      )}
        {/* <h3 style={{width:"10%", color:"black"}} className='nav-button-h3'><a  style={{width:"10%", color:"black"}} className='text-dec'st href='/'>Dashboard</a></h3> */}
        <div style={{alignItems:"center",}}  className='d-flex'> 
        <a style={{
                  background: '#7F56D9',
                  color: 'white',
                  padding: '20px 16px',
                  border: 'none',
                  borderRadius: '4px',
                  width: "100%",
                  alignContent:"center",
                  justifyContent:"center",
                  display:"flex",
                  
                  
                }} onClick={handleLogout}>Logout</a>

{SidebarMenu.map((menu) => {
  const isActive = location.pathname === menu.path;
  return (
    <>
          {!isAppointmentsPage && (

            <a
            href={menu.path}
            className="nav-button m-2 text-dec" // Add a custom CSS class for styling
            style={{
              background: '#7F56D9',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              textAlign:"center",
              width: "100%"
              
            }}
            >
    {menu.name}
  </a>
  
    )}
</>
      );
    })}
</div>
      </div>

      <div className="main">

        <div className="layout container">
          <div className="content">
            <div style={{ boxShadow: 'none' }} className="box-container body">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
