import styled from "styled-components";

export const Container = styled.div`
  width: 380px;
  background: #fff;
  padding: 20px 30px;
  position: absolute;
  top: -800px;
  left: 50%;
  transform: translate(-50%, 0%);
  box-shadow: 3px 3px 5px 3px rgb(0 0 0 / 15%);
  transition: 1s top;
  z-index: 11;

  &.open {
    top: 30%;
  }
`;

export const Title = styled.h4`
  text-align: center;
  margin-bottom: 20px;
`;
export const Content = styled.div``;
export const ButtonConfirm = styled.button`
  color: #6558f5;
  background: transparent;
  border: none;
  padding: 10px 30px;
  border: 1px solid #c7c3fb;
  margin: 30px auto 10px;
  display: flex;
`;
