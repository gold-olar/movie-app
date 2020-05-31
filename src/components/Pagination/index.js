import React from "react";
import "./styles.scss";

const Paginator = ({
  moviesPerPage,
  totalMovies,
  paginate,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav aria-label="Page navigation text-center">
      <ul className="pagination justify-content-center">
        {currentPage !== pageNumbers[0] && (
          <li
            onClick={() => setCurrentPage(currentPage - 1)}
            className="page-item"
          >
            <span className="page-link" to="!#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </span>
          </li>
        )}
        {pageNumbers.map((pageNumber) => (
          <li
            onClick={() => paginate(pageNumber)}
            key={pageNumber}
            className="page-item"
          >
            <span
              className={
                pageNumber === currentPage
                  ? "page-link-active page-link"
                  : "page-link"
              }
              to="!#"
            >
              {pageNumber}
            </span>
          </li>
        ))}

        {currentPage !== pageNumbers[pageNumbers.length - 1] && (
          <li
            onClick={() => setCurrentPage(currentPage + 1)}
            className="page-item"
          >
            <span className="page-link" to="!#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Paginator;
