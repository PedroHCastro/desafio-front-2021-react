import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background: #72caa0;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    height: auto;
    padding: 10px 0;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  max-width: 1170px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    form {
      order: 3;
      width: 80%;
      margin: 6px auto 0;
    }
  }
`;

export const HamburgerMenuButton = styled.button`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const HamburgerMenuContent = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
