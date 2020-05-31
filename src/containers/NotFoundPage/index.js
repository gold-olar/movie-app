import React from "react";
import PropTypes from "prop-types";
import NotFound from "../../components/NotFound";

const NotFoundPage = ({ history, type }) => {
  return (
    <>
      <NotFound type={type} history={history} />
    </>
  );
};

NotFoundPage.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }),
};

export default NotFoundPage;
