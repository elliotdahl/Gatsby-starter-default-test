import * as React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const secondaryStyles = css`
  border: 1px red solid;
  color: blue;
`;

const Button = styled("button", {
  shouldForwardProp: prop => prop === "children"
})`
  color: red;
  ${props => props.type === "secondary" && secondaryStyles}
`;

export default props => {
  return (
    <Button className={props.className} type={props.type}>
      <span>{props.children}</span>
    </Button>
  );
};
