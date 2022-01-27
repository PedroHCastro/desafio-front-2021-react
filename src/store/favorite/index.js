const INITIAL_STATE = {
  data: [],
  idsFavorites: [],
};

function reduce(state = INITIAL_STATE, action) {
  console.log("state", state);
  switch (action.type) {
    case "ADDFAVORITE":
      return {
        data: [...state.data, action.dataFavorite],
        idsFavorites: [...state.idsFavorites, action.dataFavorite.id],
      };
    case "REMOVEFAVORITE":
      const currentData = state;
      const filteredData = currentData.data.filter((favoriteState) => {
        console.log("favoriteState", favoriteState, action.id);
        if (favoriteState.id !== action.id) return favoriteState;
      });
      const filteredIds = currentData.idsFavorites.filter((favoriteIdState) => {
        console.log("favoriteIdState", favoriteIdState, action.id);
        if (favoriteIdState !== action.id) return favoriteIdState;
      });
      return { data: filteredData, idsFavorites: filteredIds };
    default:
      return state;
  }
}

export default reduce;

export function addFavorite(dataFavorite) {
  console.log(dataFavorite);
  return {
    type: "ADDFAVORITE",
    dataFavorite,
  };
}

export function removeFavorite(id) {
  return {
    type: "REMOVEFAVORITE",
    id,
  };
}
