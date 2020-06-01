import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import MovieCard from "../../components/MovieCard";
import Search from "../../components/SearchMovies";
import { useMoviesData } from "../../util/ops/useMoviesData";
import Loader from "../../components/Loader";
import NotFound from "../../components/NotFound";
import { ERR0R_FETCHING } from "../../util/constants";
import "./styles.scss";
import { getPageMoviesData } from "../../util/helper-functions";
import Paginator from "../../components/Pagination";

const MovieList = ({ type }) => {
  const { data, loading } = useMoviesData();
  const [movies, setMovies] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(6);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies =
    movies && movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    data &&
      getPageMoviesData(type, data.movies).then((sortedList) =>
        setMovies(sortedList)
      );
  }, [data, type]);

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
            {currentMovies &&
              currentMovies.map((movie) => {
                return (
                  <MovieCard
                    key={movie.title}
                    title={movie.title}
                    image={movie.images?.["Poster Art"].url}
                  />
                );
              })}
            {currentMovies && (
              <Container>
                <Row>
                  <Col>
                    <Paginator
                      paginate={paginate}
                      setCurrentPage={setCurrentPage}
                      currentPage={currentPage}
                      moviesPerPage={moviesPerPage}
                      totalMovies={movies.length}
                    />
                  </Col>
                </Row>
              </Container>
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

MovieList.propTypes = {
  type: PropTypes.string.isRequired,
};

export default MovieList;
