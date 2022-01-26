import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <div></div>
      <div>
        <input></input>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div>
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </Container>
  );
}
