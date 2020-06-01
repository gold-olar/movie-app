import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="transparent" dark expand="md">
        {" "}
        <NavLink className="nav-brand logo-link" to="/">
          {" "}
          <span className="logo">
            {" "}
            Movie<span className="logo-red">App</span>{" "}
          </span>{" "}
        </NavLink>{" "}
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
