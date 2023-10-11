import React from "react";
import styled from "styled-components";

const CheckboxWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const CheckboxInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  cursor: pointer;

  &:checked + svg {
    display: block;
  }
`;

const CheckIcon = styled.svg`
  fill: white;
  width: 16px;
  height: 16px;
  display: none;
`;

const CheckboxLabel = styled.span`
  font-size: 16px;
`;

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <CheckboxWrapper>
      <CheckboxInput type="checkbox" checked={checked} onChange={onChange} />
      <CheckIcon viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M9.293 13.293L6.293 16.293 5.293 17.293 4.293 18.293 3.293 19.293 3.293 19.293 3.293 19.293 3.293 19.293 3.293 19.293 3.293 19.293 2.293 20.293 2.293 20.293 2.293 20.293 1.293 21.293 1.293 21.293 1.293 21.293 1.293 21.293 1.293 21.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293 0.293 22.293z"
        />
      </CheckIcon>
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default Checkbox;
