import { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const Label = styled.label`
  position: absolute;
  top: ${(props) => (props.$hasValue ? "-10px" : "10px")};
  left: 10px;
  font-size: ${(props) => (props.$hasValue ? "12px" : "16px")};
  transition: all 0.3s ease;
  pointer-events: none;
  color: ${(props) =>
    props.$hasValue
      ? `${props.theme.colors.primary.main}`
      : `${props.theme.colors.white[600]}`};
  background-color: ${(props) =>
    !props.$hasValue
      ? `${props.theme.colors.secondary[500]}`
      : `${props.theme.colors.secondary[500]}}`};

  ${(props) =>
    props.$required &&
    css`
      &::after {
        content: "*";
        color: red;
        margin-left: 4px;
      }
    `}
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
  background-color: transparent;
  color: white;
  border: ${(props) =>
    props.$hasValue
      ? `1px solid ${props.theme.colors.primary.main}`
      : `1px solid ${props.theme.colors.white[600]}`};

  &:focus {
    border-color: ${(props) => props.theme.colors.primary.main};
  }

  &:focus + label {
    top: -10px;
    left: 10px;
    font-size: 12px;
    background-color: ${(props) =>
      !props.$hasValue ? `${props.theme.colors.secondary[500]}` : null};
    color: ${(props) => props.theme.colors.primary.main};
  }

  ${(props) =>
    props.$success &&
    css`
      border-color: green;
    `}

  ${(props) =>
    props.$error &&
    css`
      border-color: red;
    `}

  ${(props) =>
    props.$warning &&
    css`
      border-color: yellow;
    `}
`;

const PasswordToggle = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  color: ${(props) => props.theme.colors.white[600]};
`;

function InputField({
  label,
  type,
  required,
  disabled,
  success,
  error,
  warning,
}) {
  const [hasValue, setHasValue] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const id = `custom-input-${Math.random().toString(36).substr(2, 9)}`;

  const handleInputChange = (e) => {
    setHasValue(e.target.value !== "");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Wrapper>
      <Input
        id={id}
        type={showPassword ? "text" : type}
        onChange={handleInputChange}
        $required={required}
        $success={success}
        $error={error}
        $warning={warning}
        disabled={disabled}
        $hasValue={hasValue}
      />
      <Label htmlFor={id} $hasValue={hasValue} $required={required}>
        {label}
      </Label>
      {type === "password" && (
        <PasswordToggle onClick={togglePasswordVisibility}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </PasswordToggle>
      )}
    </Wrapper>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  warning: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputField;
// Docs
/*
<InputField label="Required Field" type="text" required />
<InputField label="Disabled Field" type="text" disabled />
<InputField label="Success Field" type="text" success />
<InputField label="Error Field" type="text" error />
<InputField label="Warning Field" type="text" warning />
<InputField label="Password" type="password" />
*/
