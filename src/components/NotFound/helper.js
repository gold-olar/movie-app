import {
  PAGE_NOT_FOUND,
  RESOURSES_NOT_FOUND,
  ERR0R_FETCHING,
} from "../../util/constants";

export default (type) => {
  switch (type) {
    case PAGE_NOT_FOUND:
      return "page";
    case RESOURSES_NOT_FOUND:
      return "movies";
    case ERR0R_FETCHING:
      return "error";
    default:
      return "page";
  }
};
