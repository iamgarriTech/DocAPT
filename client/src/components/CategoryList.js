// CategoryList.js

import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from 'antd';
import './CardStyles.css'; // Import the custom CSS file

const CategoryList = ({ category }) => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    // Navigate to the doctorlist page with the selected category as a query parameter
    navigate(`/doctor-list?category=${category.name}`);
  };

  return (
    <>
      <div className="card m-2" onClick={handleCategoryClick}>
        <div className="card-header">
          <img
            size={100}
            src={category.image} // Use the category image URL
            alt={category.name}
            icon={null}
          />
        </div>
        <div className="card-body">
          <p style={{ color: '#101828', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>{category.name}</p>
          <p style={{color: 'rgba(16, 24, 40, 0.60)', fontSize: 14, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>
            {category.description}
          </p>
          <p  className="button-container button-text">See Doctors</p> {/* Display a link to see doctors */}
        </div>
      </div>
    </>
  );
};

export default CategoryList;
