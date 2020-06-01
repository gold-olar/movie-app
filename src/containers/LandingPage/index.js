import React from "react";
import { Container, Row, Col } from "reactstrap";
import MenuCard from "../../components/MenuCard";
import menuItems from "./helper";
// import Search from "../../components/SearchMovies";

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
    </Container>
  );
};

export default LandingPage;
