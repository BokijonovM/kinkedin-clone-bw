import React from "react";
import { Navbar, Form, FormControl, Nav, Badge } from "react-bootstrap";
import "../style/header.css";
import NavDropdown from "./NavDropdown";
import NavWork from "./NavWork";
import ExtraHeader from "./ExtraHeader";
import { useState } from "react";

function Header() {
  const [navbar, setNavbar] = useState(false);

  const extraHeader = () => {
    if (window.scrollY >= 380) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", extraHeader);
  return (
    <div style={{ width: "100%" }}>
      <Navbar className="px-5 py-0 navbar-profile " bg="light" expand="lg">
        <Navbar.Brand href="#home ">
          <i
            style={{
              fontSize: "35px",
              color: "#0a66c2",
            }}
            class="bi bi-linkedin pl-5"
          ></i>
        </Navbar.Brand>
        <Form inline className="form-main-nav">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 shadow-none"
          />
        </Form>

        <Nav className="ml-auto icons-hover-needed d-flex flex-row">
          <div className="d-flex flex-column align-items-center mr-4">
            <i style={{ fontSize: "22px" }} class="bi bi-house-fill"></i>
            <p style={{ fontSize: "12px" }} className="mb-0 mt-n2">
              Home
            </p>
          </div>
          <div className="d-flex flex-column align-items-center mr-4 d-none-needed-network">
            <i style={{ fontSize: "22px" }} class="bi bi-people-fill"></i>
            <p style={{ fontSize: "12px" }} className="mb-0 mt-n2">
              My Network
            </p>
          </div>
          <div className="d-flex flex-column align-items-center pr-4 badge-required d-none-needed-jobs">
            <i style={{ fontSize: "22px" }} class="bi bi-briefcase-fill"></i>
            <p style={{ fontSize: "12px" }} className="mb-0 mt-n2">
              Jobs
            </p>
            <Badge
              className="bg-danger"
              style={{
                color: "white",
              }}
              variant="danger"
            >
              1
            </Badge>
          </div>
          <div className="d-flex flex-column align-items-center mr-4">
            <i style={{ fontSize: "22px" }} class="bi bi-chat-dots-fill"></i>
            <p style={{ fontSize: "12px" }} className="mb-0 mt-n2">
              Messaging
            </p>
          </div>
          <div className="d-flex flex-column align-items-center mr-4 badge-required-1">
            <i style={{ fontSize: "22px" }} class="bi bi-bell-fill"></i>
            <p style={{ fontSize: "12px" }} className="mb-0 mt-n2">
              Notifications
            </p>
            <Badge
              className="bg-danger"
              style={{
                color: "white",
              }}
              variant="danger"
            >
              99
            </Badge>
          </div>
          <div className="d-flex flex-column align-items-center ">
            {/* <i style={{ fontSize: "22px" }} class="bi bi-person-circle"></i> */}
            <img
              className="nav-profile-image"
              src="https://th.bing.com/th/id/OIP.jLRYKf5qar60c9VI6rPMjAHaHZ?pid=ImgDet&rs=1"
              alt=""
            />
            <p style={{ fontSize: "12px" }} className="mb-0 mt-n1">
              <NavDropdown />
              {/* <i class="bi bi-caret-down-fill"></i> */}
            </p>
          </div>
          <div
            className="none-550-needed mx-5"
            style={{ borderRight: "1px solid black" }}
          ></div>
          <div className="d-flex flex-column align-items-center mr-3 nav-work-div">
            <i style={{ fontSize: "22px" }} class="bi bi-grid-3x3-gap-fill"></i>
            <p style={{ fontSize: "12px" }} className="mb-0 mt-n2">
              <NavWork />
            </p>
          </div>
          <div className="d-flex flex-column align-items-center pr-5">
            <p
              style={{ fontSize: "12px", color: "#915907" }}
              className="mb-0 mb-n1 mt-1"
            >
              Reactive
            </p>
            <p style={{ fontSize: "12px", color: "#915907" }} className="mb-0 ">
              Premium
            </p>
          </div>
        </Nav>
      </Navbar>
      {navbar ? <ExtraHeader /> : <p style={{ width: "0px" }}></p>}
    </div>
  );
}

export default Header;
