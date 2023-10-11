// Define your color palette
import { createGlobalStyle } from "styled-components";

const breakpoints = {
  xs: "0px",
  sm: "768px",
  md: "992px",
  lg: "1200px",
  xl: "1920px",
};

const fonts = {
  body: '"Inter", sans-serif',
  heading: "'Montserrat', sans-serif",
};

const colorLight = {
  main: {
    100: "#d6d5db",
    200: "#adabb7",
    300: "#838193",
    400: "#5a576f",
    500: "#28243d",
    600: "#27243c",
    700: "#1d1b2d",
    800: "#14121e",
    900: "#0a090f",
  },
  primary: {
    100: "#d6d5db",
    200: "#adabb7",
    300: "#838193",
    400: "#5a576f",
    500: "#312d4b",
    600: "#27243c",
    700: "#1d1b2d",
    800: "#14121e",
    900: "#0a090f",
  },
  white: {
    100: "#e9ddff",
    200: "#d3bbfe",
    300: "#bd99fe",
    400: "#a777fd",
    500: "#9155fd",
    600: "#7444ca",
    700: "#573398",
    800: "#3a2265",
    900: "#1d1133",
  },
  dark: {
    100: "#e6dbf9",
    200: "#ccb7f2",
    300: "#b393ec",
    400: "#996fe5",
    500: "#804bdf",
    600: "#663cb2",
    700: "#4d2d86",
    800: "#331e59",
    900: "#1a0f2d",
  },
};

const colorDark = {
  primary: {
    light: "#9E69FD",
    main: "#9155FD",
    dark: "#804BDF",
    contrastText: "#FFF",
  },
  secondary: {
    100: "#d6d5db",
    200: "#adabb7",
    300: "#838193",
    400: "#5a576f",
    500: "#312d4b",
    600: "#27243c",
    700: "#1d1b2d",
    800: "#14121e",
    900: "#0a090f",
  },
  dark: {
    100: "#d4d3d8",
    200: "#a9a7b1",
    300: "#7e7c8b",
    400: "#535064",
    500: "#28243d",
    600: "#201d31",
    700: "#181625",
    800: "#100e18",
    900: "#08070c",
  },
  main: {
    100: "#e9ddff",
    200: "#d3bbfe",
    300: "#bd99fe",
    400: "#a777fd",
    500: "#9155fd",
    600: "#7444ca",
    700: "#573398",
    800: "#3a2265",
    900: "#1d1133",
  },
  white: {
    100: "#faf9fe",
    200: "#f5f4fe",
    300: "#f1eefd",
    400: "#ece9fd",
    500: "#e7e3fc",
    600: "#b9b6ca",
    700: "#8b8897",
    800: "#5c5b65",
    900: "#2e2d32",
  },
};

export const lightTheme = {
  colors: {
    ...colorLight,
    contrastText: "#000",
  },
  fonts: fonts,
  breakpoints: breakpoints,
};

export const darkTheme = {
  colors: {
    ...colorDark,
    contrastText: "#fff",
  },
  fonts: fonts,
  breakpoints: breakpoints,
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    margin: 0;
    color: rgba(231, 227, 252, 0.87);
    letter-spacing: 0.15px;
    font-family: ${(props) => props.theme.fonts.body};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    background-color: ${(props) => props.theme.colors.dark[500]};
  }
`;
