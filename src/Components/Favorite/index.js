import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "../CartItem";
import { removeFavorite, clearFavorite } from "../../store/favorite";

import * as S from "./styles";

export function Favorite() {
  const [hasItems, setHasItems] = useState(false);

  const { data: itemsFavorite, favoriteIsOpen } = useSelector(
    (state) => state.favorite
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setHasItems(itemsFavorite.length > 0);
  }, [itemsFavorite]);

  return (
    <S.Container className={favoriteIsOpen && "open"}>
      <S.HeaderContent>
        <S.Title>Meus Favoritos</S.Title>
        {hasItems && (
          <S.ClearFavorite onClick={() => dispatch(clearFavorite())}>
            Esvaziar
          </S.ClearFavorite>
        )}
      </S.HeaderContent>

      <S.TableContainer>
        <S.ItemsContainer>
          <tbody>
            {itemsFavorite.map((film) => (
              <CartItem
                key={film.id}
                data={film}
                showCart={true}
                handleRemove={removeFavorite}
              />
            ))}
          </tbody>
        </S.ItemsContainer>
      </S.TableContainer>
    </S.Container>
  );
}
