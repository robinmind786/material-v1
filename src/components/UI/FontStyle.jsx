import styled from "styled-components";
import PropTypes from "prop-types";

const StyledTypography = styled.div`
  font-family: "Inter", sans-serif;

  ${(props) => {
    if (props.$component === "h1") {
      return `
        font-size: 6rem;
        line-height: 7rem;
        font-weight: 500;
      `;
    } else if (props.$component === "h2") {
      return ` 
        font-size: 3.75rem;
        line-height: 4.5rem;
        font-weight: 500;
      `;
    } else if (props.$component === "h3") {
      return ` 
        font-size: 3rem;
        line-height: 3.5rem;
        font-weight: 500;
      `;
    } else if (props.$component === "h4") {
      return ` 
        font-size: 2rem;
        line-height: 2.5rem;
        font-weight: 500;
      `;
    } else if (props.$component === "h5") {
      return ` 
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: 500;
      `;
    } else if (props.$component === "h6") {
      return ` 
        font-size: 1.25rem;
        line-height: 2rem;
        font-weight: 500;
      `;
    } else if (props.$component === "subtitle1") {
      return ` 
        font-size: 1rem;
        line-height: 1.75rem;
        font-weight: 400;
      `;
    } else if (props.$component === "subtitle2") {
      return ` 
        font-size: 0.875rem;
        line-height: 1.3125rem;
        font-weight: 500;
      `;
    } else if (props.$component === "body1") {
      return ` 
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
      `;
    } else if (props.$component === "body2") {
      return ` 
        font-size: 0.875rem;
        line-height: 1.3125rem;
        font-weight: 400;
      `;
    } else if (props.$component === "button") {
      return ` 
        font-size: 0.875rem;
        line-height: 1.0625rem;
        font-weight: 500;
        text-transform: uppercase;
      `;
    } else if (props.$component === "caption") {
      return ` 
        font-size: 0.75rem;
        line-height: 0.9375rem;
        font-weight: 400;
      `;
    } else if (props.$component === "overline") {
      return ` 
        font-size: 0.75rem;
        line-height: 0.9375rem;
        font-weight: 400;
        text-transform: uppercase;
      `;
    } else {
      return "";
    }
  }}

  @media (max-width: 768px) {
    ${(props) => {
      if (props.$component === "h1") {
        return `
          font-size: 72px;
          line-height: 84px;
          font-weight: 500;
        `;
      } else if (props.$component === "h2") {
        return ` 
          font-size: 48px;
          line-height: 56px;
          font-weight: 500;
        `;
      }
    }}
  }

  ${(props) => {
    if (props.$color) {
      return `
        color: ${props.$color};
      `;
    }
    return "";
  }}

  ${(props) => {
    if (props.$m) {
      return `
        margin: ${props.$m};
      `;
    }
    return "";
  }}

  ${(props) => {
    if (props.$p) {
      return `
        padding: ${props.$p};
      `;
    }
    return "";
  }}

  ${(props) => {
    if (props.$ml) {
      return `
        margin-left: ${props.$ml};
      `;
    }
    return "";
  }}

  ${(props) => {
    if (props.$pl) {
      return `
        padding-left: ${props.$pl};
      `;
    }
    return "";
  }}

  ${(props) => {
    if (props.$mb) {
      return `
        margin-bottom: ${props.$mb};
      `;
    }
    return "";
  }}

  ${(props) => {
    if (props.$pb) {
      return `
        padding-bottom: ${props.$pb};
      `;
    }
    return "";
  }}

  ${(props) => {
    if (props.$mr) {
      return `
        margin-right: ${props.$mr};
      `;
    }
    return "";
  }}

  ${(props) => {
    if (props.$pr) {
      return `
        padding-right: ${props.$pr};
      `;
    }
    return "";
  }}

  ${(props) => {
    if (props.$mt) {
      return `
        margin-top: ${props.$mt};
      `;
    }
    return "";
  }}

  ${(props) => {
    if (props.$pt) {
      return `
        padding-top: ${props.$pt};
      `;
    }
    return "";
  }}
`;

function FontStyle({
  $variant,
  $color,
  $m,
  $p,
  $ml,
  $pl,
  $mb,
  $pb,
  $mr,
  $pr,
  $mt,
  $pt,
  children,
  component,
  className,
  style,
}) {
  return (
    <StyledTypography
      as={component}
      className={className}
      style={style}
      $variant={$variant}
      $component={component}
      $color={$color}
      $m={$m}
      $p={$p}
      $ml={$ml}
      $pl={$pl}
      $mb={$mb}
      $pb={$pb}
      $mr={$mr}
      $pr={$pr}
      $mt={$mt}
      $pt={$pt}
    >
      {children}
    </StyledTypography>
  );
}

FontStyle.propTypes = {
  children: PropTypes.string,
  component: PropTypes.string,
  $variant: PropTypes.string,
  $color: PropTypes.string,
  $m: PropTypes.string,
  $p: PropTypes.string,
  $ml: PropTypes.string,
  $pl: PropTypes.string,
  $mb: PropTypes.string,
  $pb: PropTypes.string,
  $mr: PropTypes.string,
  $pr: PropTypes.string,
  $mt: PropTypes.string,
  $pt: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.string,
};

export default FontStyle;
