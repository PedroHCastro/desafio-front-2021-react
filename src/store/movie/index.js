const INITIAL_STATE = {
  genresList: [],
};

function reduce(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDGENRES":
      const preparedGenresList = {};
      action.dataGenres.forEach((element) => {
        preparedGenresList[element.id] = element.name;
      });
      return {
        genresList: preparedGenresList,
      };
    default:
      return state;
  }
}

export default reduce;

export function addAddGeneres(dataGenres) {
  return {
    type: "ADDGENRES",
    dataGenres,
  };
}
