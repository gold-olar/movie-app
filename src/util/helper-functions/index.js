/**
 * Function to sort data Alphanumerically.
 *
 * @param {*} a
 * @param {*} b
 */
function compare(a, b) {
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}

/**
 * Funtion to filter movies for either
 * SERIES or MOVIES type
 *
 * @param {SERIES or MOVIE}  type
 * @param {Array of movies} moviesData
 */

function getDataType(type, moviesData) {
  if (moviesData)
    return moviesData.filter((data) => data.programType === type.toLowerCase());
  return [];
}

/**
 *  Function to get the needed Movies for either Series
 *  or Movies page
 *
 * @param {SERIES or MOVIE}  type
 * @param {Array of movies} moviesData
 */

export async function getPageMoviesData(type, moviesData) {
  if (moviesData) {
    const dataType = await getDataType(type, moviesData);

    const recentData = await dataType.filter(
      (data) => data.releaseYear >= 2010
    );

    return [...recentData.sort(compare).slice(0, 21)];
  }

  return [];
}

/**
 * Function to search for movies
 *
 * @param {Title of movie} searchParam
 * @param {SERIES or MOVIE} type
 * @param {Array of movies} moviesData
 */

export async function searchMoviesData(searchParam, type, moviesData) {
  let searchResults = [];

  if (moviesData) {
    const dataType = await getDataType(type, moviesData);

    for (let i = 0; i < dataType.length; i++) {
      if (dataType[i].title.toLowerCase().includes(searchParam)) {
        searchResults.push(dataType[i]);
      }
    }
    return searchResults;
  }
  return searchResults;
}
