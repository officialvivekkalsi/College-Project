import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import img from "../images/favi1.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const [keyword, setKeyword] = useState('');
  const Navigate=useNavigate
  const Search = (e) => {
    e.preventDefault();
    if (keyword){
      return Navigate(`/?keyword=${keyword}`)
    }else {
      // return Navigate(Navigate(Navigation.location.pathname))
      return 'hello'
    }
  };
  return (
    <header>
      <Navbar
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        expand="lg"
      >
        <Container>
          <NavLink className="navbar-brand" to="/">
            <img src={img} alt="" className="src" />
            Sixty Degree
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to={`add-Student/`}>
                Add Student
              </NavLink>
            </Nav>
            <form className="form-inline my-2 my-lg-0 ">
              <input
                onSubmit={Search}
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={keyword}
                onChange={(e)=>setKeyword(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-sm btn-outline-light"
              >
                Search
              </button>
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
