import styled from "styled-components";

const Box = styled.div`
  /* Common styling props */
  ${({ p }) => p && `padding: ${p}px;`}
  ${({ m }) => m && `margin: ${m}px;`}
  ${({ px }) => px && `padding-left: ${px}px; padding-right: ${px}px;`}
  ${({ py }) => py && `padding-top: ${py}px; padding-bottom: ${py}px;`}
  ${({ mx }) => mx && `margin-left: ${mx}px; margin-right: ${mx}px;`}
  ${({ my }) => my && `margin-top: ${my}px; margin-bottom: ${my}px;`}
  ${({ bgcolor }) => bgcolor && `background-color: ${bgcolor};`}
  ${({ color }) => color && `color: ${color};`}
  ${({ border }) => border && `border: ${border};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`}
  
  /* Breakpoint system */
  @media (min-width: 576px) {
    ${({ smP }) => smP && `padding: ${smP}px;`}
    ${({ smM }) => smM && `margin: ${smM}px;`}
    /* Add more styles for small screens (576px and above) */
  }

  @media (min-width: 768px) {
    ${({ mdP }) => mdP && `padding: ${mdP}px;`}
    ${({ mdM }) => mdM && `margin: ${mdM}px;`}
    /* Add more styles for medium screens (768px and above) */
  }

  @media (min-width: 992px) {
    ${({ lgP }) => lgP && `padding: ${lgP}px;`}
    ${({ lgM }) => lgM && `margin: ${lgM}px;`}
    /* Add more styles for large screens (992px and above) */
  }

  @media (min-width: 1200px) {
    ${({ xlP }) => xlP && `padding: ${xlP}px;`}
    ${({ xlM }) => xlM && `margin: ${xlM}px;`}
    /* Add more styles for extra-large screens (1200px and above) */
  }

  /* Additional CSS properties */
  ${({ css }) => css && css}
`;

export default Box;

// Docs
{
  /* <Box
  p={2}
  smP={4} // Padding for small screens and above
  mdM={3} // Margin for medium screens and above
  bgcolor="#f0f0f0"
  color="#333"
  className="custom-class"
>
  This is a styled box with padding, background color, and text color.
</Box> */
}
