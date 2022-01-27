import { Link } from "react-router-dom";
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
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  max-width: 1170px;
  margin: 0 auto;
`;


export const SearchForm = styled.form`
  display: flex;
  align: center;
  justify-content: center;
`

export const SearchInput = styled.input`
  border: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  outline: none;
  width: 320px;
  height: 30px;
  padding-left: 16px;
`

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
`

export const ButtonOpenCart = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  position: relative;
  color: #fff;

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
    top: -10px;
    right: -10px;
    color: #000;
  }
`

export const LinkFavorite = styled(Link)`
  color: #fff!important;
  font-size: 24px;
  margin-right: 20px;
`