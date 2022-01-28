import styled from "styled-components";

export const ButtonOpen = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  position: relative;
  color: #fff;

  &:nth-child(1) {
    margin-right: 20px;
  }

  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #fbe192;
    font-size: 12px;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -7px;
    right: -10px;
    color: #000;
  }
`;
