import React from "react";

import { Link } from "react-router-dom";

import logo from "../../assets/img/logoipsum-logo-8.svg";

import { ActionButtons } from "./components/ActionButtons";
import { SearchBar } from "./components/SearchBar";

import * as S from "./styles";

export function Header() {
  return (
    <S.Container>
      <S.ContentContainer>
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <SearchBar />
        <ActionButtons />
      </S.ContentContainer>
    </S.Container>
  );
}
