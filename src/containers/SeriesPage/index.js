import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import MovieCard from "../../components/MovieCard";
import Search from "../../components/SearchMovies";
import { useMoviesData } from "../../util/ops/useMoviesData";
// import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import NotFound from "../../components/NotFound";
import { ERR0R_FETCHING } from "../../util/constants";
import "./styles.scss";

const SeriesPage = () => {
  const { data, loading } = useMoviesData();
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      {loading && (
        <Container className="loader-background">
          <Row>
            <Col>
              <Loader />
            </Col>
          </Row>
        </Container>
      )}
      {!loading && (
        <Container className="">
          <Row className="mt-3">
            <Col md={12} className="text-center mt-5">
              <h4>Unlimited movies, TV shows, and more.</h4>
            </Col>
            <Search />
          </Row>
          <Row className="mt-2">
            {data?.status && (
              <>
                <MovieCard />
                <MovieCard />
                <MovieCard />
              </>
            )}
            {!data?.status && (
              <>
                <NotFound type={ERR0R_FETCHING} message={data?.message} />
              </>
            )}
          </Row>
        </Container>
      )}
    </>
  );
};

export default SeriesPage;
