import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./styles.scss";

const Footer = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col className="text-center footer-text ">
            © {new Date().getFullYear()} Olamide Samuel. All rights reserved.
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
