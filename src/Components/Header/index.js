import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { toggleCart } from "../../store/cart/";
import logo from "../../assets/img/logoipsum-logo-8.svg"

import * as S from "./styles";


export function Header() {
  const dispatch = useDispatch();
  const countItems = useSelector((state) => state.cart.countItems);
  const [search, setSearch] = useState('')
  const navigate = useNavigate();

  function handleChange(e) {
    console.log(e.target.value)
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (search) {
      navigate({
        pathname: '/',
        search: `?q=${search}`,
      },)
    } else {
      navigate({
        pathname: '/',
      },)
    }
  }

  return (
    <S.Container>
      <S.ContentContainer>
      <div><Link to="/"><img src={logo}/></Link></div>
      <S.SearchForm onSubmit={handleSubmit}>
        <S.SearchInput value={search} onChange={handleChange}></S.SearchInput>
        <S.ButtonSearch><FontAwesomeIcon icon={faSearch} /></S.ButtonSearch>
      </S.SearchForm>
      <div>
        <S.LinkFavorite to="/favoritos">
          <FontAwesomeIcon icon={faHeart} />
        </S.LinkFavorite>
        <S.ButtonOpenCart onClick={() => dispatch(toggleCart())}>
          {countItems > 0 && <span>{countItems}</span>}
          <FontAwesomeIcon icon={faShoppingCart} />
        </S.ButtonOpenCart>
      </div>
      </S.ContentContainer>
    </S.Container>
  );
}
