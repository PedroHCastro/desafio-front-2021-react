import styled from "styled-components";
import ReactInputMask from "react-input-mask";

export const ReactInputMaskStyled = styled(ReactInputMask)`
  &.error {
    border: 1px solid #f00;
  }
`;

export const Tooltip = styled.span`
  position: absolute;
  bottom: 0;

  left: 50%;
  transform: translate(50%, 0);
  display: block;
`;
