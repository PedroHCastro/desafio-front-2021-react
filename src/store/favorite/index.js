const INITIAL_STATE = {
  data: [],
  idsFavorites: [],
  countItems: 0,
  favoriteIsOpen: false,
};

function reduce(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDFAVORITE":
      const countItems = state.countItems + 1;
      return {
        ...state,
        data: [...state.data, action.dataFavorite],
        idsFavorites: [...state.idsFavorites, action.dataFavorite.id],
        countItems,
      };
    case "REMOVEFAVORITE":
      const currentData = state;
      let removeCountItems = 0;
      const filteredData = currentData.data.filter((favoriteState) => {
        if (favoriteState.id !== action.data.id) {
          return favoriteState;
        }
        removeCountItems += 1;
      });
      const courrentCountItems = state.countItems - removeCountItems;
      const filteredIds = currentData.idsFavorites.filter((favoriteIdState) => {
        if (favoriteIdState !== action.data.id) return favoriteIdState;
      });
      return {
        ...state,
        data: filteredData,
        idsFavorites: filteredIds,
        countItems: courrentCountItems,
      };
    case "CLEARFAVORITE":
      return INITIAL_STATE;

    case "TOGGLEFAVORITE":
      return { ...state, favoriteIsOpen: !state.favoriteIsOpen };
    default:
      return state;
  }
}

export default reduce;

export function addFavorite(dataFavorite) {
  return {
    type: "ADDFAVORITE",
    dataFavorite,
  };
}

export function removeFavorite(data) {
  return {
    type: "REMOVEFAVORITE",
    data,
  };
}

export function clearFavorite() {
  return {
    type: "CLEARFAVORITE",
  };
}

export function toggleFavorite() {
  return {
    type: "TOGGLEFAVORITE",
  };
}
