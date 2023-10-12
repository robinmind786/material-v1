import styled from "styled-components";

const StyledDivider = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.white[700] || "#e0e0e0"};
  width: 100%;
  margin: 10px 0;
`;

const Divider = () => {
  return <StyledDivider />;
};

export default Divider;
