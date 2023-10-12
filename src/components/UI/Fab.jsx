import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const getSizeStyles = (size) => {
  switch (size) {
    case "small":
      return css`
        width: 36px;
        height: 36px;
      `;
    case "large":
      return css`
        width: 64px;
        height: 64px;
      `;
    default:
      return css`
        width: 48px;
        height: 48px;
      `;
  }
};

const FabContainer = styled.button`
  border-radius: 50%;
  background-color: ${(props) =>
    props.color === "primary"
      ? props.theme.colors.primary.main
      : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  outline: none;

  ${(props) => getSizeStyles(props.size)};

  &:hover {
    background-color: ${(props) =>
      props.color === "primary"
        ? props.theme.colors.primary.dark
        : "transparent"};
  }

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}

  ${(props) => getSizeStyles(props.size)};

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `};

  ${(props) =>
    props.className &&
    css`
      ${props.className}
    `};
  ${(props) =>
    props.style &&
    css`
      ${props.style}
    `};
  ${(props) =>
    props.m &&
    css`
      margin: ${props.m};
    `};
  ${(props) =>
    props.p &&
    css`
      padding: ${props.p};
    `};
`;

const Icon = styled.i`
  font-size: 24px;
  color: ${(props) => props.iconColor || "white"};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Fab({
  color,
  ariaLabel,
  icon,
  onClick,
  disabled,
  size,
  iconColor,
  backgroundColor,
}) {
  return (
    <FabContainer
      color={color}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      size={size}
    >
      <Icon iconColor={iconColor} backgroundColor={backgroundColor}>
        {icon}
      </Icon>
    </FabContainer>
  );
}

Fab.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"]),
  ariaLabel: PropTypes.string,
  icon: PropTypes.any,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  iconColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Fab;

/*
Fab
The Fab component represents a rounded icon button that can be customized with different colors, sizes, icons, and additional styles.

Props
color: (string) Specifies the color of the button. Accepts values: "primary", "secondary".
ariaLabel: (string) ARIA label for accessibility.
icon: (element) The icon element to be displayed inside the button.
onClick: (function) Callback function triggered when the button is clicked.
disabled: (boolean) If true, the button will be disabled and cannot be clicked.
size: (string) Specifies the size of the button. Accepts values: "small", "medium", "large".
iconColor: (string, optional) Custom color for the icon. If not provided, the default icon color will be used.
backgroundColor: (string, optional) Custom background color for the button. If not provided, the default background color will be used.
Usage

import { FaFacebook, FaTwitter, FaGithub, FaGoogle } from "react-icons/fa";

// Usage example with custom colors
<Fab
  color="primary"
  ariaLabel="edit"
  size="small"
  icon={<FaFacebook />}
  iconColor="#1877F2" // Facebook blue
  backgroundColor="#FFFFFF" // White background
/>

<Fab
  color="primary"
  ariaLabel="edit"
  size="small"
  icon={<FaTwitter />}
  iconColor="#1DA1F2" // Twitter blue
  backgroundColor="#FFFFFF" // White background
/>

<Fab
  color="primary"
  ariaLabel="edit"
  size="small"
  icon={<FaGithub />}
  iconColor="#333" // Default GitHub color
  backgroundColor="#FFFFFF" // White background
/>

<Fab
  color="primary"
  ariaLabel="edit"
  size="small"
  icon={<FaGoogle />}
  iconColor="#4285F4" // Google blue
  backgroundColor="#FFFFFF" // White background
/>
Additional Notes
The iconColor prop allows you to specify a custom color for the icon inside the button.
The backgroundColor prop allows you to set a custom background color for the button itself.
Ensure that the contrast between iconColor and backgroundColor provides good readability and accessibility.
The Fab component can be styled further using the className and style props to add custom CSS classes and inline styles.
*/
