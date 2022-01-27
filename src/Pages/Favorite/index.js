import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Components/Card";

import * as S from "./styles";
import { useSelector } from "react-redux";

export function Favorite() {
  // const [dataFavorite, setDataFavorite] = useState([]);
  const [dataConfig, setDataConfig] = useState(false);

  const { data: dataFavorite } = useSelector((state) => state.favorite);
  // setDataFavorite(data);
  console.log(dataFavorite);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { images },
      } = await axios.get(
        "https://api.themoviedb.org/3/configuration?api_key=ff7205d949c40dcb9fc509d150c9a07f"
      );

      setDataConfig(images);
    };

    fetchData();
  }, []);

  console.log(dataFavorite.length, dataConfig);

  return (
    <S.Container>
      {dataFavorite.length > 0 &&
        dataConfig &&
        dataFavorite.map((film) => {
          return <Card key={film.id} data={film} config={dataConfig} />;
        })}
    </S.Container>
  );
}
