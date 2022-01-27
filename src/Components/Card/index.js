import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { addToCart } from "../../store/cart";
import { addFavorite, removeFavorite } from "../../store/favorite";

import * as S from "./styles";

function Card({ data, config: { base_url, poster_sizes } }) {
  const { id, poster_path, release_date, title, vote_count, genre_ids, value } =
    data;

  const dispatch = useDispatch();

  // const item = { poster_path, release_date, title, vote_count, genre_ids}

  // console.log(typeof data.value);

  // if(typeof data.value === 'undefined') {

  //   item.value = value();
  // } else {
  //   item.value = data.value;
  // }
  //   console.log("data", data);
  //   adult: false
  //   backdrop_path: "/1Wlwnhn5sXUIwlxpJgWszT622PS.jpg"
  //   genre_ids: (3) [16, 35, 10751]
  //   id: 585245
  //   original_language: "en"
  //   original_title: "Clifford the Big Red Dog"
  //   overview: "As Emily struggles to fit in at home and at school, she discovers a small red puppy who is destined to become her best friend. When Clifford magically undergoes one heck of a growth spurt, becomes a gigantic dog and attracts the attention of a genetics company, Emily and her Uncle Casey have to fight the forces of greed as they go on the run across New York City. Along the way, Clifford affects the lives of everyone around him and teaches Emily and her uncle the true meaning of acceptance and unconditional love."
  //   popularity: 1134.269
  //   poster_path: "/oifhfVhUcuDjE61V5bS5dfShQrm.jpg"
  //   release_date: "2021-11-10"
  //   title: "Clifford the Big Red Dog"
  //   video: false
  //   vote_average: 7.4
  //   vote_count: 926

  const { idsFavorites } = useSelector((state) => state.favorite);
  const isFavorite = idsFavorites.includes(id);

  return (
    <S.Container>
      <S.ImgContainer>
        <S.ExpansiveContainer>
          <S.HeartButton
            onClick={() => {
              isFavorite
                ? dispatch(removeFavorite(id))
                : dispatch(addFavorite(data));
            }}
          >
            <S.HeartIcon
              className={isFavorite ? "favorite" : ""}
              icon={faHeart}
            />
          </S.HeartButton>
          <S.ImgStyled src={`${base_url}${poster_sizes[3]}${poster_path}`} />

          <S.HiddenDetail>
            <S.DateLabel>{release_date}</S.DateLabel>
            <div className="hidden">
              <S.TitleFilm>{title}</S.TitleFilm>
              <S.Price>{`R$ ${value}`}</S.Price>
            </div>
            <S.ButtonAddToCartDetail className="hidden" onClick={() => dispatch(addToCart(data))}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </S.ButtonAddToCartDetail>
          </S.HiddenDetail>
        </S.ExpansiveContainer>
      </S.ImgContainer>
      <S.DetailContainer>
        <S.TitleFilm>{title}</S.TitleFilm>
        <S.SubDetailContainer>
          <S.Rating>
            <FontAwesomeIcon icon={faStar} />
            {vote_count}
          </S.Rating>
          <S.Gender>{genre_ids[0]}</S.Gender>
        </S.SubDetailContainer>
        <S.Price>{`R$ ${value}`}</S.Price>
      </S.DetailContainer>
      <S.ButtonAddToCart onClick={() => dispatch(addToCart(data))}>
        Adicionar
      </S.ButtonAddToCart>
    </S.Container>
  );
}

export default connect((state) => ({ ItemsCart: state }))(Card);
