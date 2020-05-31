import React from "react";
import { Card, CardImg, CardBody, CardTitle, Button, Col } from "reactstrap";
import "./styles.scss";

const MovieCard = () => {
  return (
    <Col md={4}>
      <Card className="movie-card">
        <CardImg
          top
          width="100%"
          src="https://occ-0-768-769.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSMHMUe9HirN-UXFKfTb--WcxRInwcgbrKN9T0gnPXXnWQD9blPDC1NcR4esmGPSdhmL6iAYJgfIdhTHM4SSWUVPwqk8wE49cS_7nyp4l-YQJuXTXwfvnkq9jgW4.jpg?r=568"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Movie title</CardTitle>

          <Button className="btn btn-primary">Watch</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MovieCard;
