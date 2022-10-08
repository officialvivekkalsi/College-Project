import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";

function Edit() {
  const [name, setName] = useState();
  const [degree, setDegree] = useState();
  const [address, setAddress] = useState();
  const [pin, setPin] = useState();
  const [country, setCountry] = useState();
  const [dob, setDob] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  const [selfintro, setSelfintro] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  async function getStudent() {
    const response = await axios.get(
      `http://127.0.0.1:8000/student-info/${id}`
    );
    const item = response.data;
    setName(item.name);
    setDegree(item.degree);
    setAddress(item.address);
    setPin(item.pin);
    setCountry(item.country);
    setDob(item.dob);
    setEmail(item.email);
    setImage(item.image);
    setSelfintro(item.selfintro);
  }

  React.useEffect(() => {
    getStudent();
  }, []);

  async function Edit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("degree", degree);
    formData.append("address", address);
    formData.append("pin", pin);
    formData.append("country", country);
    formData.append("dob", dob);
    formData.append("email", email);
    formData.append("image", image);
    formData.append("selfintro", selfintro);
    const response = await axios.put(
      `http://127.0.0.1:8000/student-info/${id}/`,
      formData
    );
    console.log(response.data);
    alert("edited");
    return navigate(`../student/${id}`, { replace: true });
  }
  return (
    <div className="edit">
      <Row className="form">
        <Col className="form-style" style={{ marginTop: "34px" }} md={4}>
          <Form onSubmit={Edit}>
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
                    type="file"
                    required
                    // value={image}
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
                value={address}
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
                as="textarea"
                rows={3}
                onChange={(e) => setSelfintro(e.target.value)}
              />
            </Form.Group>
            <Button
              style={{ margin: "7px" }}
              type="submit"
              variant="outline-dark"
            >
              Save Changes
            </Button>

            <Button
              style={{ margin: "7px" }}
              onClick={() => navigate(`../student/${id}`, { replace: true })}
              variant="outline-dark"
            >
              Back to Student Detail
            </Button>
            <Link to="/">
              <Button style={{ margin: "7px" }} variant="outline-dark">
                Back to Home
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Edit;
