import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import Card from "../../Components/Card";
import { formatDate } from "../../utils"

import * as S from "./styles";

export function Home() {
  const [dataFilm, setDataFilm] = useState([]);
  const [dataConfig, setDataConfig] = useState([]);

  const location = useLocation();
  const locationState = location.search;
  const params = new URLSearchParams(locationState);
  const search = params.get('q');

  useEffect(() => {

    const fetchData = async () => {
      const {
        data: { images },
      } = await axios.get(
        "https://api.themoviedb.org/3/configuration?api_key=ff7205d949c40dcb9fc509d150c9a07f"
      );
      // console.log(images);
      let data = []
      if(search) {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie?api_key=ff7205d949c40dcb9fc509d150c9a07f&language=en-US&page=1&include_adult=false&query='+search);
        data = response.data
      }else {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=ff7205d949c40dcb9fc509d150c9a07f"
        );
        data = response.data
      }

      const value = () => parseFloat((Math.random() * (99 - 15) + 15).toFixed(2));
      const preparedData = data.results.map(result => {
        result.value = value();
        result.count = 1;
        result.release_date = formatDate(result.release_date);
        return result;
      })

      setDataConfig(images);
      setDataFilm(preparedData);
    };

    fetchData();

  }, [search]);

  return (
    <S.Container>
      {dataFilm.length > 0 &&
        dataFilm.map((film) => {
          return <Card key={film.id} data={film} config={dataConfig} />;
        })}
    </S.Container>
  );
}
