import React from "react";
import PropTypes from "prop-types";
import img_404 from "../../assets/img/not_found.svg";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./styles.scss";

const NotFound = ({ history }) => {
  return (
    <>
      <Container fluid className="mt-5">
        <Row className="mb-5 justify-content-center">
          <Col md={6} className="text-center">
            <h3 className="appology-msg mb-3">
              {" "}
              We are sorry, the page you are looking for does not exist{" "}
            </h3>
            <img
              src={img_404}
              alt="page not found"
              className="img-fluid mt-3 mb-3"
            />
            <h3 className="not-found-text mt-3 mb-5"> Not Found </h3>

            <button
              onClick={() => history.goBack()}
              className="btn-primary btn mr-3"
            >
              Go Back
            </button>
            <Link to="/" className="secondary-option">
              Go Home
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};
NotFound.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default NotFound;
