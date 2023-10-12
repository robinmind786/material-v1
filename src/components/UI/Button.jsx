import styled, { css } from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return "14px";
      case "medium":
        return "16px";
      case "large":
        return "18px";
      default:
        return "16px";
    }
  }};
  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "8px 16px";
      case "medium":
        return "12px 24px";
      case "large":
        return "16px 32px";
      default:
        return "12px 24px";
    }
  }};
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, color 0.3s;
  width: ${(props) => props.width || "auto"};
  background-color: ${(props) =>
    props.color === "secondary"
      ? props.theme.colors.secondary.main
      : props.theme.colors.primary.main};
  color: white;

  ${(props) =>
    props.style &&
    css`
      ${props.style}
    `}

  ${(props) =>
    props.variant === "contained" &&
    css`
      &:hover {
        background-color: ${(props) =>
          props.color === "secondary"
            ? props.theme.colors.secondary.dark
            : props.theme.colors.primary.dark};
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      background-color: #ccc;
      cursor: not-allowed;
    `}

  ${(props) =>
    props.className &&
    css`
      &.${props.className} {
        background-color: red;
      }
    `}
`;

export const IconWrapper = styled.span`
  margin-right: 8px;
  font-size: ${(props) => {
    switch (props.iconSize) {
      case "small":
        return "16px";
      case "medium":
        return "24px";
      case "large":
        return "32px";
      default:
        return "24px";
    }
  }};
`;

/*
1. Import the Button component:

  import { Button } from "./ButtonStyles";

2. Create a Button instance by providing the required and optional props:

  <Button
    size="medium"
    width="120px"
    color="secondary"
    variant="contained"
    disabled={false}
  >
    Click Me
  </Button>

3. Props
  The Button component accepts the following props:

  size (string, optional): Determines the size of the button. Available sizes are:

  "small"
  "medium"
  "large"
  width (string, optional): Sets the width of the button. You can provide a custom width value or use the default "auto."

  color (string, optional): Specifies the color of the button. Available colors are:

  "primary"
  "secondary"
  variant (string, optional): Sets the button variant. Currently, only "contained" is supported.

  disabled (boolean, optional): Disables the button when set to true.

  style (string, optional): Allows you to add custom CSS styles to the button.

  className (string, optional): Adds a custom class name to the button.

  Styling
  The appearance of the button can be customized using the provided props. You can control the size, width, color, and style of the button.

  The default color of the button is based on the color prop, which you can set to "primary" or "secondary." The color changes on hover for the "contained" variant.

  IconWrapper Component
  The IconWrapper component is used to add an icon next to the text in a Button. It allows you to control the size of the icon.

  Usage
  To use the IconWrapper component, you can include it within a Button component:

  <Button>
    <IconWrapper iconSize="medium">
      <YourIconComponent />
    </IconWrapper>
    Click Me  
  </Button>

  Props
  The IconWrapper component accepts the following prop:

  iconSize (string, optional): Determines the size of the icon. Available sizes are:
  "small"
  "medium"
  "large"
  Styling
  The IconWrapper component is used to control the size of the icon, and it allows you to customize the size of the icon based on the selected size.

  This documentation provides an overview of the Button and IconWrapper styled-components, their props, and how to use them in your React application. You can further expand on this documentation as needed to include more details and examples.
  */
