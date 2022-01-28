import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Item = styled.tr``;

export const ImageContainer = styled.td`
  width: 50px;
  height: 50px;
`;
export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ItemInfo = styled.td`
  button {
    background: transparent;
    border: none;
    padding: 10px;
    font-size: 16px;
  }
`;

export const CartIcon = styled(FontAwesomeIcon)`
  color: #1aae9f;
`;
