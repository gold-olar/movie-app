// import React from "react";
// import { render } from "@testing-library/react";
// import ReactDOM from "react-dom";
import { SERIES } from "../constants";

import { getPageMoviesData } from "./index";

test("should return empty data", async () => {
  const result = await getPageMoviesData(SERIES);
  expect(result).toStrictEqual([]);
});

test("should return sorted data", async () => {
  const sampleSortData = [
    {
      title: "Wolf Creek",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url:
            "https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2016,
    },
    {
      title: "No Activity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url:
            "https://streamcoimg-a.akamaihd.net/000/106/36/10636-PosterArt-9add943c5e62c2d89f6d31458d33508a.jpg",
          width: 1000,
          height: 1500,
        },
      },
      releaseYear: 2015,
    },
    {
      title: "Billions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url:
            "https://streamcoimg-a.akamaihd.net/000/117/25/11725-PosterArt-deecf8dbd786dfa2d964413b0bf83726.jpg",
          width: 720,
          height: 1080,
        },
      },
      releaseYear: 2016,
    },
  ];
  const result = await getPageMoviesData(SERIES, sampleSortData);
  expect(result).toEqual(expect.arrayContaining(sampleSortData));
});
