import React from "react";
import PropTypes from "prop-types";
import img_404 from "../../assets/img/not_found.svg";
import empty from "../../assets/img/empty.svg";
import error from "../../assets/img/error.svg";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import getItemToRender from "./helper";
import "./styles.scss";

const NotFound = ({ history, type, message }) => {
  const item = getItemToRender(type);

  return (
    <>
      <Container fluid className="mt-5">
        <Row className="mb-5 justify-content-center">
          <Col md={6} className="text-center">
            <h3 className="appology-msg mb-3">
              {item !== "error" && (
                <>
                  {`We are sorry, the ${item} you are looking for does not exist`}
                </>
              )}
              {item === "error" && message}
            </h3>
            <img
              src={item === "page" ? img_404 : item === "error" ? error : empty}
              alt="page not found"
              className="img-fluid mt-3 mb-3"
            />
            {item === "page" && (
              <h3 className="not-found-text mt-3 mb-5"> Not Found </h3>
            )}

            {item === "page" && (
              <>
                <button
                  onClick={() => history.goBack()}
                  className="btn-primary btn mr-3"
                >
                  Go Back
                </button>
                <Link to="/" className="secondary-option">
                  Go Home
                </Link>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
NotFound.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }),
};

export default NotFound;
