import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  border: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  outline: none;
  width: 320px;
  height: 30px;
  padding-left: 16px;
`;

export const ButtonSearch = styled.button`
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: #fff;
  font-size: 20px;
  width: 40px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
