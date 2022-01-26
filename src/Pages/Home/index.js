import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Components/Card";

import * as S from "./styles";
import Cart from "../../Components/Cart";

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
      setDataConfig(images);
      setDataFilm(data.results);
    };

    fetchData();

    // axios
    //   .get(
    //     "https://api.themoviedb.org/3/configuration?api_key=ff7205d949c40dcb9fc509d150c9a07f"
    //   )
    //   .then(function ({ data }) {
    //     setDataFilm(data.results);
    //     console.log(data.results);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });

    // axios
    //   .get(
    //     "https://api.themoviedb.org/3/movie/popular?api_key=ff7205d949c40dcb9fc509d150c9a07f"
    //   )
    //   .then(function ({ data }) {
    //     setDataFilm(data.results);
    //     console.log(data.results);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });
  }, []);

  return (
    <S.Container>
      {dataFilm.length > 0 &&
        dataFilm.map((film) => {
          // console.log(film);
          return <Card key={film.id} data={film} config={dataConfig} />;
        })}
      <Cart />
    </S.Container>
  );
}
