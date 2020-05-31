import React from "react";
import { Container, Row, Col } from "reactstrap";
import MovieCard from "../../components/MovieCard";
import Search from "../../components/SearchMovies";

const SeriesPage = () => {
  return (
    <>
      <Container className="">
        <Row className="mt-3">
          <Col md={12} className="text-center mt-5">
            <h4>Unlimited movies, TV shows, and more.</h4>
          </Col>
          <Search />
        </Row>
        <Row className="mt-2">
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </Row>
      </Container>
    </>
  );
};

export default SeriesPage;
