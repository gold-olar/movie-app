import React from "react";
import { Col, Form, FormGroup, Button, Input, Row } from "reactstrap";
import './styles.scss';

const Search = () => {
  return (
    <>
      <Col className="text-center p-4 search ">
        <Form>
          <FormGroup row>
            <Col className="m-auto" sm={10}>
              <Input className="" type="search" name="searchTerm" bsSize="lg" />
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

export default Search;
