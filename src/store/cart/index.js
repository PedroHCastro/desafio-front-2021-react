const INITIAL_STATE = {
  data: [],
  total: 0,
  countItems: 0,
  cartIsOpen: false,
};

function reducer(state = INITIAL_STATE, action) {
  const { film } = action;
  switch (action.type) {
    case "ADDCART":
      let currentState = JSON.parse(JSON.stringify(state.data));
      let filmExists = false;
      let currentTotalAdd = state.total + film.value;
      currentState.map((filmState) => {
        if (filmState.id === film.id) {
          filmState.count += 1;
          filmState.value += film.value;
          filmExists = true;
        }
      });
      if (!filmExists) {
        currentState = [...currentState, film];
      }
      const countItems = state.countItems + 1;
      return {
        ...state,
        data: currentState,
        total: currentTotalAdd,
        countItems,
      };
    case "REMOVECART":
      const currentData = state;
      let valueToRemove = 0;
      let removeCountItems = 0;

      const filteredData = currentData.data.filter((filmState) => {
        if (filmState.id !== film.id) {
          return filmState;
        }
        removeCountItems += film.count;
        valueToRemove += film.value;
      });
      const currentTotalRemove = state.total - valueToRemove;
      const courrentCountItems = state.countItems - removeCountItems;
      return {
        ...state,
        data: filteredData,
        total: currentTotalRemove,
        countItems: courrentCountItems,
      };
    case "CLEARCART":
      return INITIAL_STATE;

    case "TOGGLECART":
      return { ...state, cartIsOpen: !state.cartIsOpen };
    default:
      return state;
  }
}

export default reducer;

export function addToCart(film) {
  return {
    type: "ADDCART",
    film,
  };
}

export function removeItemToCart(film) {
  console.log(film);
  return {
    type: "REMOVECART",
    film,
  };
}

export function clearCart() {
  return {
    type: "CLEARCART",
  };
}

export function toggleCart() {
  return {
    type: "TOGGLECART",
  };
}
