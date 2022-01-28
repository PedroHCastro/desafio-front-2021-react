import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  width: 854px;
  max-width: 95%;
  margin: 0 auto;
  padding: 60px 0;

  @media (max-width: 767px) {
    padding: 110px 20px;
  }
`;
