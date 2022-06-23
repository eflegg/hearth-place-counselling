import { css } from "styled-components";

export const type = {
  header: "Shadows Into Light Two",
  body: "Raleway",
  accent: "",
};

export const breakpoints = {
  xs: "400px",
  sm: "768px",
  md: "1000px",
  lg: "1250px",
  xl: "1800px",
};

export const mediaQuery = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);

export const colours = {
  campfire: "#57618b",
  lichen: "#cfd29f",
  gold: "#d79741",
  stone: "#b7aeb9",
  clay: "#e9e9e9",
  plum: "#5d3350",
  river: "#a8afbf",
};

const theme = {
  mediaQuery,
  breakpoints,
  colours,
  type,
};

export default theme;
