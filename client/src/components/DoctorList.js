import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from 'antd';
import './CardStyles.css' // Import the custom CSS file

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card w-full m-2"
        
      >
        <div className="card-header">
          <Avatar
            size={100}
            src="https://res.cloudinary.com/dmgsdtmsm/image/upload/v1690386975/607379-removebg-preview_zt6qil.png"
            alt="Icon"
            icon={null}
          />
        </div>
        <div className="card-body">
          <p style={{ color: '#101828', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}> Dr. {doctor.firstName} {doctor.lastName}</p>
          <p style={{color: 'rgba(16, 24, 40, 0.60)', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>
            {doctor.specialization}
          </p>

          <div style={{width: '100%', height: '100%', paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, background: '#F9F5FF', borderRadius: 10, justifyContent: 'center', alignItems: 'center', gap: 10, marginBottom:"6px",display: 'inline-flex'}}>
          <p style={{color: '#7F56D9', fontSize: 12, fontFamily: 'Poppins', fontWeight: '400', }}>
 {doctor.timings[0]} - {doctor.timings[1]}
          </p>
          </div>
          <button className="button-container" onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}>
        <div className="button-text">Select</div>
      </button>
          
        </div>
      </div>
    </>
  );
};

export default DoctorList;
