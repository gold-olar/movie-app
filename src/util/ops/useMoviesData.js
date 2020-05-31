import { useEffect, useState } from "react";
import axios from "axios";

export const useMoviesData = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchMovies = async function () {
    try {
      setLoading(true);
      const { CancelToken } = axios;
      const source = CancelToken.source();
      const movies = await axios({
        method: "get",
        url:
          "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json",
        cancelToken: source.token,
      });
    //   console.log(movies);

      if (movies.status === 200) {
        const {
          data: { entries },
        } = movies;
        setLoading(false);
        return {
          status: true,
          movies: entries,
          message: "Fetched Successfully",
        };
      }
    } catch (err) {
      setLoading(false);

      if (axios.isCancel(err)) {
        return {
          status: false,
          message: "Request was cancelled",
        };
      }

      return {
        status: false,
        message: err.message,
      };
    }
  };

  useEffect(() => {
    if (!data) {
      fetchMovies().then((response) => {
        // console.log(response);
        setData(response);
      });
    }
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading,
  };
};
