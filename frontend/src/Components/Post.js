import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";

function Post() {
  const [name, setName] = useState("");
  const [degree, setDegree] = useState("");
  const [Address, setAddress] = useState("");
  const [pin, setPin] = useState("");
  const [country, setCountry] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [selfintro, setSelfintro] = useState("");
  const navigate = useNavigate();

  async function Post(e) {
    e.preventDefault();
    let formField = new FormData();
    formField.append("name", name);
    formField.append("degree", degree);
    formField.append("Address", Address);
    formField.append("pin", pin);
    formField.append("country", country);
    formField.append("dob", dob);
    formField.append("email", email);
    formField.append("image", image);
    formField.append("selfintro", selfintro);
    await axios
      .post("http://127.0.0.1:8000/student-info/", formField, )
      .then((response) => {
        console.log(response.data);
        navigate('/')
        alert('New student Added')
      })
      .catch((error) => {
        console.log(error);
      });

  }

  return (
    <div >
      <Row className="form">
        <Col className='form-style' md={4}>
          <Form onSubmit={Post}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name of Student</Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="ex:John"
              />
              <Row>
                <Col md={5}>
                  <Form.Label>Stream of Student</Form.Label>
                  <Form.Control
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    type="text"
                    placeholder="ex:B.Sc(IT)"
                  />
                </Col>
                <Col md={7}>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    name='image'
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    placeholder="ex:.jpg,.png"
                  />
                </Col>
              </Row>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="ex:name@example.com"
              />
              <Form.Label>Address</Form.Label>
              <Form.Control
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="ex:city,country"
              />
              <Row>
                <Col md={4}>
                  <Form.Label>Date of birth</Form.Label>
                  <Form.Control
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    type="date"
                    placeholder="22/2/2000"
                  />
                </Col>
                <Col md={4}>
                  <Form.Label>Pin</Form.Label>
                  <Form.Control
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    type="number"
                    placeholder="ex:34223"
                  />
                </Col>
                <Col md={4}>
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    type="text"
                    placeholder="ex:india"
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Self Introduction</Form.Label>
              <Form.Control
                value={selfintro}
                onChange={(e) => setSelfintro(e.target.value)}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Button type="submit"  variant="outline-dark">
              Save 
            </Button>
            <Link to="/">
              <Button size="lg" style={{'margin-left':'14px'}} variant="outline-dark">
                Back to Home
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Post;
