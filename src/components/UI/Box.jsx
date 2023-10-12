import styled from "styled-components";

const Box = styled.div`
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
  
  @media (min-width: 576px) {
    ${({ smP }) => smP && `padding: ${smP}px;`}
    ${({ smM }) => smM && `margin: ${smM}px;`}
  }

  @media (min-width: 768px) {
    ${({ mdP }) => mdP && `padding: ${mdP}px;`}
    ${({ mdM }) => mdM && `margin: ${mdM}px;`}
  }

  @media (min-width: 992px) {
    ${({ lgP }) => lgP && `padding: ${lgP}px;`}
    ${({ lgM }) => lgM && `margin: ${lgM}px;`}
  }

  @media (min-width: 1200px) {
    ${({ xlP }) => xlP && `padding: ${xlP}px;`}
    ${({ xlM }) => xlM && `margin: ${xlM}px;`}
  }

  ${({ css }) => css && css}
`;

export default Box;

/*
Box Component
The Box component is a flexible styled-component that provides a simple way to apply styling properties like padding, margin, background color, and more to an HTML div element. This styled-component is designed for easily creating responsive and customizable box-like elements in your web application.

Usage
To use the Box component, follow the steps below:

Import the Box component:

import Box from "./Box";
Create a Box instance by providing the desired styling properties:

<Box p={10} m={5} bgcolor="lightgray">
  Content goes here
</Box>
Props
The Box component accepts the following props to customize its styles:

p (number, optional): Sets padding for all sides of the Box.

m (number, optional): Sets margin for all sides of the Box.

px (number, optional): Sets horizontal padding (left and right).

py (number, optional): Sets vertical padding (top and bottom).

mx (number, optional): Sets horizontal margin (left and right).

my (number, optional): Sets vertical margin (top and bottom).

bgcolor (string, optional): Sets the background color of the Box.

color (string, optional): Sets the text color inside the Box.

border (string, optional): Sets a border style for the Box.

borderRadius (string, optional): Sets the border radius for rounded corners.

smP (number, optional): Sets padding for all sides of the Box on small screens (576px and above).

smM (number, optional): Sets margin for all sides of the Box on small screens (576px and above).

mdP (number, optional): Sets padding for all sides of the Box on medium screens (768px and above).

mdM (number, optional): Sets margin for all sides of the Box on medium screens (768px and above).

lgP (number, optional): Sets padding for all sides of the Box on large screens (992px and above).

lgM (number, optional): Sets margin for all sides of the Box on large screens (992px and above).

xlP (number, optional): Sets padding for all sides of the Box on extra-large screens (1200px and above).

xlM (number, optional): Sets margin for all sides of the Box on extra-large screens (1200px and above).

css (string, optional): Provides a string with additional custom CSS styles for the Box.

Responsive Styling
The Box component supports responsive styling. You can define different padding and margin values for various screen sizes, ensuring your content looks great on all devices.

Custom CSS
The css prop allows you to add your own custom CSS styles in string format, extending the flexibility and customization of the Box component.

This documentation provides an overview of the Box styled-component, its props, and how to use it to create customizable and responsive box-like elements in your web application. You can extend this documentation to include more details and examples based on your specific use case.
*/
