import React from "react";
import "../styles/RegiserStyles.css";
import { Card, Col, Row, Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Register from './Register';


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}></div>
          <Card style={{ marginLeft: "10%", marginTop: "10%", width: '80%', border: "0px solid #f0f0f0", height: '90%', background: '#7F56D9', borderRadius: 8 }}>
            <div>
              <h2 style={{ padding: "10px", marginBottom: "00px", color: 'white', fontSize: 19, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 5, letterSpacing: 3, wordWrap: 'break-word' }}>DOCAPPT</h2>
            </div>
            <div style={{ padding: "10px", marginTop: "30px" }}>

              <h3 style={{ color: 'white', fontSize: 28, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 1.40 }}>Book your </h3>
              <h3 style={{ color: 'white', fontSize: 28, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 1.40 }}>appointment with </h3>
              <h3 style={{ color: 'white', fontSize: 28, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 1.40 }}>certified doctor.</h3>
            </div>
            <div style={{ width: '100%', color: '#F4EBFF', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', padding: "10px", marginTop: "20px", wordWrap: 'break-word' }}>
              <p>Get ahead and schedule an appointment, skip the long waiting queue. Get ahead schedule an appointment, skip the long waiting queue.</p>
            </div>
          </Card>
        </Col>
        <Col span={16}>
          <div className="form-container ">

            <Form
              layout="vertical"
              onFinish={onfinishHandler}
              style={{ width: "33.3%", marginLeft: "-50%" }}
            >
              <h3 className="">Login From</h3>

              <p>Dont have an account?</p>
              <Link to="/register" style={{ paddingTop: "100px", textDecorationLine: "none" }}>
                Register here
              </Link>
              <Form.Item label="Email" name="email">
                <Input type="email" required />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input type="password" required />
              </Form.Item>
              <button style={{ background: "#7F56D9", color: "white" }} className="btn" type="submit">
                Login
              </button>
            </Form>
          </div>
        </Col>

      </Row>
    </>
  );
};


export default Login;
