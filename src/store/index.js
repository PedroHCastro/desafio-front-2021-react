import { createStore } from "redux";

const INITIAL_STATE = [];

function reducer(state = INITIAL_STATE, action) {
  const { film } = action;
  console.log(state);
  switch (action.type) {
    case "ADDCART":
      return [...state, film];
    case "REMOVECART":
      return { dataCart: state.pop() };
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;

// import Redux from "react-redux";

// const addCart = { type: "ADDCART" };
// const removeCart = { type: "REMOVECART" };

// const reducer = (state = { dataCart: [] }, action) => {
//   switch (action.type) {
//     case "ADDCART":
//       return { dataCart: state.push() };
//     case "REMOVECART":
//       return { dataCart: state.popð() };
//     default:
//       return state;
//   }
// };

// // Store
// const store = Redux.createStore(reducer);

// // Logger
// function log() {
//   console.log("Contador: ", store.getState().contador);
// }
