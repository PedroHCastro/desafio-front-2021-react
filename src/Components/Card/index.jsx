import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import { addToCart } from "../../store/cart";
import { addFavorite, removeFavorite } from "../../store/favorite";
import { formatMoney } from "../../utils";

import defaultImage from "../../assets/img/default-image.jpeg";

import * as S from "./styles";

function Card({ data }) {
  const { id, poster_path, release_date, title, vote_count, genre_ids, value } =
    data;

  const dispatch = useDispatch();
  const { data: configImages } = useSelector((state) => state.config);
  const { base_url, poster_sizes } = configImages;

  const { genresList } = useSelector((state) => state.movie);

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
          {base_url && (
            <S.ImgStyled
              src={
                poster_path
                  ? `${base_url}${poster_sizes[3]}${poster_path}`
                  : defaultImage
              }
            />
          )}

          <S.HiddenDetail>
            <S.DateLabel>{release_date}</S.DateLabel>
            <div className="hidden">
              <S.TitleFilm>{title}</S.TitleFilm>
              <S.Price>{`R$ ${formatMoney(value.toFixed(2))}`}</S.Price>
            </div>
            <S.ButtonAddToCartDetail
              className="hidden"
              onClick={() => dispatch(addToCart(data))}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </S.ButtonAddToCartDetail>
          </S.HiddenDetail>
        </S.ExpansiveContainer>
      </S.ImgContainer>
      <S.DetailContainer>
        <S.TitleFilm>{title}</S.TitleFilm>
        <S.SubDetailContainer>
          <S.Rating>
            <S.StarIcon icon={faStar} />
            {vote_count}
          </S.Rating>
          <S.Gender>{genresList[genre_ids[0]]}</S.Gender>
        </S.SubDetailContainer>
        <S.Price>{`R$ ${formatMoney(value.toFixed(2))}`}</S.Price>
      </S.DetailContainer>
      <S.ButtonAddToCart onClick={() => dispatch(addToCart(data))}>
        Adicionar
      </S.ButtonAddToCart>
    </S.Container>
  );
}

export default connect((state) => ({ ItemsCart: state }))(Card);
