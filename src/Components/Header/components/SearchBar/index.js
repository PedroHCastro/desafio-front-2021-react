import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as S from "./styles";

export function SearchBar(rest) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (search) {
      navigate({
        pathname: "/",
        search: `?q=${search}`,
      });
    } else {
      navigate({
        pathname: "/",
      });
    }
  }
  return (
    <S.SearchForm onSubmit={handleSubmit} {...rest}>
      <S.SearchInput value={search} onChange={handleChange}></S.SearchInput>
      <S.ButtonSearch>
        <FontAwesomeIcon icon={faSearch} />
      </S.ButtonSearch>
    </S.SearchForm>
  );
}
