import styled from "styled-components";
import { Form } from "@unform/web";

export const Container = styled.div`
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
