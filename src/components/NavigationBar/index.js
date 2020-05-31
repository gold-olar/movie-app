import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="transparent" dark expand="md">
        <NavbarBrand>
          {" "}
          <NavLink className="logo-link" to="/">
            {" "}
            <span className="logo">
              {" "}
              Movie<span className="logo-red">App</span>{" "}
            </span>{" "}
          </NavLink>{" "}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/series">
                Series
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/movies">
                Movies
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
