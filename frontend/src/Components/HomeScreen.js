import React, { useState } from "react";
// import { studentsData } from "../Studentdata";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import "./index.css";
import { Link } from "react-router-dom";
function HomeScreen() {
  const [studentdata, setStudentdata] = useState([]);

  async function getStudentData() {
    const response = await axios.get(
      "http://127.0.0.1:8000/student-info/"
    );
    setStudentdata(response.data);
  }

  React.useEffect(() => {
    getStudentData();
  }, []);

  return (
    <div>
      <Container>
        <Row md={4} sm={2} lg={6}>
          <Col md="auto" style={{ display: "contents" }}>
            {studentdata.map((students) => (
              <Card key={students.id} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={students.image} />
                <Card.Body>
                  <Card.Title>
                    <h5 className="card-title">
                      Student's name:<strong>{students.name}</strong>
                    </h5>
                  </Card.Title>
                  <Card.Text>
                    Stream of the Student : {students.degree}
                  </Card.Text>
                  <Link to={`student/${students.id}`}>
                    <button type="button" className="btn btn-dark">
                      Know More
                    </button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeScreen;
