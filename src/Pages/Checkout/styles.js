import styled from "styled-components";
import { Form } from "@unform/web";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  width: 854px;
  max-width: 100%;
  margin: 0 auto;
  padding: 80px 0 60px;

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 110px 20px;
  }
`;

export const FirstSection = styled.div`
  width: 45%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const SecondSection = styled.div`
  width: 45%;

  @media (max-width: 767px) {
    margin-top: 40px;
    width: 100%;
  }
`;

export const FinalizePurchase = styled.button`
  width: 100%;
  height: 34px;
  background-color: #6558f5;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
`;

export const FormContainer = styled.div`
  h3 {
    margin-bottom: 30px;
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  input {
    margin-bottom: 25px;
    font-size: 16px;
    padding: 5px 7px;
    color: #c5ced6;
    border: 2px solid #c5ced6;
    border-radius: 4px;

    &::placeholder {
      color: #c5ced6;
    }
  }
  input:nth-child(1),
  input:nth-child(4) {
    width: 100%;
  }
  input:nth-child(2),
  input:nth-child(3) {
    width: 47.5%;
  }
  input:nth-child(6),
  input:nth-child(7) {
    width: 55%;
  }

  input:nth-child(5),
  input:nth-child(8) {
    width: 40%;
  }
`;

export const ContainerTable = styled.div`
  max-height: calc(100vh - 200px);
  overflow: auto;

  th {
    padding-bottom: 30px;
  } 
  
  tbody {
    td:nth-child(2) {
      padding-left: 8px;
    }
    td:nth-child(3) {
      text-align: center;
    }
    td:nth-child(4) {
      width: 84px;
      text-align: center;
    }
  }
`;
