import React from "react";
import PropTypes from "prop-types";
import { Col, Form, FormGroup, Button, Row } from "reactstrap";
import { useForm } from "react-hook-form";

import "./styles.scss";

const Search = ({ searchMovie }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => searchMovie(data.searchParam);

  return (
    <>
      <Col className="text-center p-4 search">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup row>
            <Col className="m-auto" sm={10}>
              {errors.searchParam && (
                <small className="text-danger sm mb-1">
                  Enter a movie title.
                </small>
              )}
              <input
                name="searchParam"
                ref={register({ required: true })}
                className="form-control-lg form-control"
                type="search"
              />
            </Col>
          </FormGroup>
          <Row>
            <Col className="text-center">
              <Button className="search-btn">Search</Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </>
  );
};

Search.propType = {
  searchMovie: PropTypes.func.isRequired,
};

export default Search;
