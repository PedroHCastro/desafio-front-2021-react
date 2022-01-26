import { createStore } from "redux";

const INITIAL_STATE = [];

function reducer(state = INITIAL_STATE, action) {
  const { film } = action;
  console.log(state);
  switch (action.type) {
    case "ADDCART":
      let currentState = JSON.parse(JSON.stringify(state))
      let filmExists = false;
      currentState.map(filmState => {
        if (filmState.id === film.id) {
          filmState.count += 1
          filmState.value += film.value
          filmExists = true;
        }
      })
      if (!filmExists) {
        currentState = [...currentState, film]
      }
      return currentState;
    case "REMOVECART":
      const currentData = state
      const filteredData = currentData.filter(filmState => {
          if (filmState.id !== film.id)
            return filmState
        })
      return filteredData;
    case "CLEARCART":
      return [];
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
