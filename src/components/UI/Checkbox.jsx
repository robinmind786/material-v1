import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { FaCheck } from "react-icons/fa6";

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Checkmark = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${(props) => props.theme.colors.white[600]};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s, border-color 0.3s;

  span {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${(props) =>
    props.checked &&
    css`
      background-color: ${props.theme.colors.primary.main};
      border-color: ${props.theme.colors.primary.main};
    `}

  ${(props) =>
    props.variant === "secondary" &&
    css`
      border-color: ${props.theme.colors.secondary.main};
      background-color: ${props.checked
        ? props.theme.colors.secondary.main
        : "transparent"};
    `}

  ${(props) =>
    props.variant === "success" &&
    css`
      border-color: green;
      background-color: ${props.checked ? "green" : "transparent"};
    `}

  ${(props) =>
    props.variant === "error" &&
    css`
      border-color: red;
      background-color: ${props.checked ? "red" : "transparent"};
    `}

  ${(props) =>
    props.variant === "warning" &&
    css`
      border-color: yellow;
      background-color: ${props.checked ? "yellow" : "transparent"};
    `}

  ${(props) =>
    props.variant === "info" &&
    css`
      border-color: blue;
      background-color: ${props.checked ? "blue" : "transparent"};
    `}
`;

const Label = styled.label`
  font-size: 16px;
  color: ${(props) => props.theme.colors.white[600] || "white"};
`;

const HiddenInput = styled.input`
  display: none;
`;

const Checkbox = ({ checked, onChange, label, variant }) => {
  return (
    <CheckboxWrapper>
      <Checkmark checked={checked} variant={variant} onClick={onChange}>
        {checked && (
          <span>
            <FaCheck />
          </span>
        )}
      </Checkmark>
      <Label>{label}</Label>
      <HiddenInput type="checkbox" checked={checked} onChange={onChange} />
    </CheckboxWrapper>
  );
};

export default Checkbox;
Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "error",
    "warning",
    "info",
  ]),
};

/*
1. Import the Checkbox component:

import Checkbox from "../../components/UI/Checkbox";

2. Create a Checkbox instance by providing the required props:

  <Checkbox
    checked={checkedState}
    onChange={handleCheckboxChange}
    label="Checkbox Label"
    variant="primary"
  />

3. Props

  The Custom Checkbox component accepts the following props:

  checked (boolean, required): Indicates whether the checkbox is checked or unchecked.

  onChange (function, required): A callback function that is called when the checkbox's state changes.

  label (string, required): The label associated with the checkbox.

  variant (string, optional): Specifies the variant or color of the checkbox. Available variants are:

  "primary"
  "secondary"
  "success"
  "error"
  "warning"
  "info"
  Styling
  The appearance of the checkbox is controlled through styled-components. You can customize the appearance by modifying the styles in the Checkmark component.
*/
