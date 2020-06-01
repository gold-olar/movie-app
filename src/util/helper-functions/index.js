function compare(a, b) {
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}

export async function getPageMoviesData(type, moviesData) {
  if (moviesData) {
    const dataType = await moviesData.filter(
      (data) => data.programType === type.toLowerCase()
    );
    // console.log(dataType, type);

    const recentData = await dataType.filter(
      (data) => data.releaseYear >= 2010
    );

    return [...recentData.sort(compare).slice(0, 21)];
  }

  return [];
}
