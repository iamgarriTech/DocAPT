// DoctorListPage.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  // Fetch all doctors
  const getAllDoctors = async () => {
    try {
      const res = await axios.get("/api/v1/user/getAllDoctors", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllDoctors();
  }, []);

  // Map category names to corresponding specializations
  const categoryToSpecialization = {
    "Neurology": "Neurologist",
    "Gynaecology": "Gynaecologist",
    "General Out-patient Unit": "General Practitioner",
    "Pediatrics": "Pediatrician",
    "Orthopedics": "Orthopedic Surgeon",
    "Dermatology": "Dermatologist",
    "Ophthalmology": "Ophthalmologist",
    "Cardiology": "Cardiologist",
    "Urology": "Urologist",
    "Endocrinology": "Endocrinologist",
    "Radiology": "Radiologist",
    "Oncology": "Oncologist",
    "Pulmonology": "Pulmonologist",
    // Add more mappings as needed
  };
  

  // Filter doctors by the selected category
  const filteredDoctors = selectedCategory
    ? doctors.filter((doctor) => {
        // Map the category name to the corresponding specialization
        const specialization = categoryToSpecialization[selectedCategory];
        return doctor.specialization === specialization;
      })
    : doctors;

  return (
    <Layout style={{boxShadow:"none"}}>
      <Row>
        {filteredDoctors.map((doctor) => (
          <DoctorList key={doctor._id} doctor={doctor} />
        ))}
      </Row>
    </Layout>
  );
};

export default HomePage;
