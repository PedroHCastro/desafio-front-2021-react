import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Card from "../../Components/Card";
import { getMovies, getMoviesBySearch } from "../../Services/MovieServices";

import * as S from "./styles";

export function Home() {
  const [dataFilm, setDataFilm] = useState([]);

  const location = useLocation();
  const locationState = location.search;
  const params = new URLSearchParams(locationState);
  const search = params.get("q");

  useEffect(() => {
    const fetchData = async () => {
      let movieData = [];
      if (search) {
        movieData = await getMoviesBySearch(search);
      } else {
        movieData = await getMovies();
      }

      setDataFilm(movieData);
    };

    fetchData();
  }, [search]);

  return (
    <S.Container>
      {dataFilm.length > 0 &&
        dataFilm.map((film) => {
          return <Card key={film.id} data={film} />;
        })}
    </S.Container>
  );
}
