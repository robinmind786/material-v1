import PropTypes from "prop-types"; // Import PropTypes
import styled from "styled-components";

// Styled FormControl component
const FormControlWrapper = styled.form`
  margin-bottom: 16px;
`;

const FormControl = ({ children }) => {
  return <FormControlWrapper>{children}</FormControlWrapper>;
};

// PropTypes validation
FormControl.propTypes = {
  children: PropTypes.any,
};

export default FormControl;
