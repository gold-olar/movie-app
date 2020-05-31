import React from "react";
import PropTypes from "prop-types";
import NotFound from "../../components/NotFound";

const NotFoundPage = ({ history }) => {
  return (
    <>
      <NotFound history={history} />
    </>
  );
};

NotFoundPage.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default NotFoundPage;
