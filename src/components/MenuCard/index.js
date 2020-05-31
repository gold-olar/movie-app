import React from "react";
import PropTypes from "prop-types";
import { Card, CardTitle, CardText, Col } from "reactstrap";
import "./styles.scss";
import { Link } from "react-router-dom";

const MenuCard = ({ type, description, path }) => {
  return (
    <Col sm="6">
      <Card className="menu-card" body>
        <CardTitle className="menu-card-title">{type}</CardTitle>
        <CardText className="menu-card-body">{description}</CardText>
        <Link to={path} className="btn btn-primary">
          Browse {type}
        </Link>
      </Card>
    </Col>
  );
};

MenuCard.propTypes = {
  type: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default MenuCard;
