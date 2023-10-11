import React from "react";
import styled from "styled-components";

const TextFieldWrapper = ({ id, label, helpText, variant = "outlined" }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} variant={variant} />
      {helpText && <HelpText>{helpText}</HelpText>}
    </Wrapper>
  );
};

// Define styles for the wrapper
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

// Define styles for the label
const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

// Define styles for the input
const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

// Define styles for the help text
const HelpText = styled.p`
  font-size: 14px;
  color: #888;
`;

export default TextFieldWrapper;
