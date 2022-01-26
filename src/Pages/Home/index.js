import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Components/Card";

import * as S from "./styles";

export function Home() {
  const [dataFilm, setDataFilm] = useState([]);
  const [dataConfig, setDataConfig] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { images },
      } = await axios.get(
        "https://api.themoviedb.org/3/configuration?api_key=ff7205d949c40dcb9fc509d150c9a07f"
      );
      // console.log(images);
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=ff7205d949c40dcb9fc509d150c9a07f"
      );

      const value = () => parseFloat((Math.random() * (99 - 15) + 15).toFixed(2));
      const preparedData = data.results.map(result => {
        result.value = value();
        result.count = 1;
        return result;
      })

      setDataConfig(images);
      setDataFilm(preparedData);
    };

    fetchData();

  }, []);

  return (
    <S.Container>
      {dataFilm.length > 0 &&
        dataFilm.map((film) => {
          return <Card key={film.id} data={film} config={dataConfig} />;
        })}
    </S.Container>
  );
}
