import React from "react";
import Layout from "../components/Layout";
import { Row, Col } from "antd";
import CategoryList from "../components/CategoryList";

const Home = () => {
  // Dummy category data
  const dummyCategoryData = [
    {
      id: 1,
      name: "General Out-patient Unit",
      description: "An intensive care unit, also known as an intensive therapy unit or intensive treatment unit or critical care unit, is a special department of a hospital or health care facility that provides intensive care medicine.",
      link: "/doctorlist?category=cardiology", // Link to the cardiology doctor list page
      image: "https://res.cloudinary.com/dmgsdtmsm/image/upload/v1695628823/3_g5ag7n.png", // Link to the category image
    },
    {
      id: 2,
      name: "Pediatrics",
      description: "Pediatrics is the branch of medicine that involves the medical care of infants, children, adolescents, and, young adults.Lorem Ipsum, adolescents, and young adults.Lorem Ipsum and young adults.Lorem Ipsum, adolescents, and young adults.Lorem Ipsum",
      link: "/doctorlist?category=pediatrics", // Link to the pediatrics doctor list page
      image: "https://res.cloudinary.com/dmgsdtmsm/image/upload/v1695628823/4_x3m9hv.png", // Link to the category image
    },
    {
      id: 3,
      name: "Gynaecology",
      description: "Gynaecology is the area of medicine that involves the treatment of women's diseases, especially those of the reproductive organs. It is often paired with the field of obstetrics, forming the combined area of obstetrics and gynaecology.",
      link: "/doctorlist?category=pediatrics", // Link to the pediatrics doctor list page
      image: "https://res.cloudinary.com/dmgsdtmsm/image/upload/v1695628823/1_jbrrdm.png", // Link to the category image
    },
    {
      id: 4,
      name: "Cardiology",
      description: "Cardiology is the study of the heart. The branch of medicine that deals with disorders of the heart and the cardiovascular system. The field includes medical diagnosis and treatment of congenital, medical diagnosis and treatment of congenital",
      link: "/doctorlist?category=pediatrics", // Link to the pediatrics doctor list page
      image: "https://res.cloudinary.com/dmgsdtmsm/image/upload/v1695628823/2_y9heju.png", // Link to the category image
    },
   
    {
      id: 1,
      name: "General Out-patient Unit",
      description: "An intensive care unit, also known as an intensive therapy unit or intensive treatment unit or critical care unit, is a special department of a hospital or health care facility that provides intensive care medicine.that provides intensive care medicine",
      link: "/doctorlist?category=cardiology", // Link to the cardiology doctor list page
      image: "https://res.cloudinary.com/dmgsdtmsm/image/upload/v1695628823/3_g5ag7n.png", // Link to the category image
    },
    {
      id: 2,
      name: "Pediatrics",
      description: "Pediatrics is the branch of medicine that involves the medical care of infants, children, adolescents, and young adults.Lorem Ipsum, adolescents, and young adults.Lorem Ipsum, and young adults.Lorem Ipsum, adolescents, and young adults.Lorem Ipsum",
      link: "/doctorlist?category=pediatrics", // Link to the pediatrics doctor list page
      image: "https://res.cloudinary.com/dmgsdtmsm/image/upload/v1695628823/4_x3m9hv.png", // Link to the category image
    },

   
    // Add more categories with descriptions, image links, and links to doctor lists as needed
  ];



  return (
    <Layout style={{ boxShadow: "none" }}>
      <Row gutter={16}>
        {dummyCategoryData.map((category) => (
          <Col key={category.id} xs={24} sm={12} md={8}>
            <CategoryList category={category} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default Home;
