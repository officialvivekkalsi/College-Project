import React, { useState } from "react";
// import { studentsData } from "../Studentdata";
import { ListGroup,Card, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./index.css";
import { Link, useNavigate, useParams } from "react-router-dom";
function StubyId() {
  const [student, setStudent] = useState([]);
  const { id } = useParams();
  const navigate= useNavigate()
  async function getStudent() {
    const response = await axios.get(
      `http://127.0.0.1:8000/student-info/${id}`
    );
    setStudent(response.data);
  }

  React.useEffect(() => {
    getStudent();
  }, []);

  async function Delete(){
    const response=await axios.delete(`http://127.0.0.1:8000/student-info/${id}`);
    setStudent(response.data)
    alert('Student Deleted')
    return navigate('/')
  }

  return (
    <div className="stud-id">
      <div className="goback">
        <Link to="/">
          <Button size="lg" variant="outline-dark">Go Back</Button>
        </Link>
      </div>
      <Row className="my-5 ">
          <Col >
            <img
              src={student.image} alt='error'
              style={{ height: "80vh", width: "75vh" }}
            />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item >
            <Row><h3 style={{'display': 'flex'}}>Student Name:<Col md={5}>{student.name}</Col></h3></Row>
            </ListGroup.Item>
   
        <ListGroup.Item>
              <Row >
              <Col> <h4>Date of birth:{student.dob}</h4> </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row >
              <Col> <h5>Email Address:{student.email}</h5> </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row >
              <Col> <h5>Stream of the Student:{student.degree}</h5> </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row >
              <Col> <h4><b>Introduction:</b></h4><h5>{student.selfintro}</h5> </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row >
              <Col> <h5>Pin Code :{student.pin}</h5> </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row >
              <Col> <h5>Country of Student :{student.country}</h5> </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row >
              <Col> <h5>Address:{student.address}</h5> </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
            <ListGroup.Item variant="flush">
            <Card body >
            If you Want to edit student's data then Click here
            <Button variant="outline-dark" onClick={() => navigate(`../edit/${id}`, { replace: true })} >Edit</Button> 
            If you Want to delete student's data then Click here
              <Button variant="outline-danger" onClick={Delete} >Delete</Button>
            </Card>;
            </ListGroup.Item>
        </Col>
        
      </Row>

    </div>
  );
}

export default StubyId;