import React from "react";
import { Container, Row, Col } from "reactstrap";
import MenuCard from "../../components/MenuCard";
import menuItems from "./helper";
import Search from "../../components/SearchMovies";

const LandingPage = () => {
  return (
    <Container className="p-5">
      <Row>
        {menuItems.map((item) => {
          const { type, description, path } = item;
          return (
            <MenuCard
              key={type}
              type={type}
              description={description}
              path={path}
            />
          );
        })}
      </Row>
      <Row className="mt-5">
        <Col md={12} className="text-center mt-5">
          <h4>Unlimited movies, TV shows, and more.</h4>
        </Col>
        <Search />
      </Row>
    </Container>
  );
};

export default LandingPage;
