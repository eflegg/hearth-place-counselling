import { css } from "styled-components";

export const type = {
  header: "Libre Caslon Text",
  body: "jaf-bernina-sans-condensed",
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
  black: "darkslategrey",
  white: "#ffffff",
  blue: "#026891",
  yellow: "#EFB234",
  red: "#c93928",
};

const theme = {
  mediaQuery,
  breakpoints,
  colours,
  type,
};

export default theme;
