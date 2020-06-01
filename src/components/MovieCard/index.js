import React from "react";
import PropTypes from "prop-types";
import { Card, CardImg, CardBody, CardTitle, Col } from "reactstrap";
import "./styles.scss";

const MovieCard = ({ title, image }) => {
  return (
    <Col md={4}>
      <Card className="movie-card">
        <CardImg top width="100%" className="movie-img" src={image} alt={title} />
        <CardBody>
          <CardTitle> {title}</CardTitle>
        </CardBody>
      </Card>
    </Col>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default MovieCard;
