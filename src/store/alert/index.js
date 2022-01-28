const INITIAL_STATE = {
  alertIsOpen: false,
  title: "",
  content: "",
  button: "",
};

function reducer(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case "SETDATAALERT":
      return { ...state, ...action.data };
    case "TOGGLEALERT":
      if (state.alertIsOpen) {
        return INITIAL_STATE;
      }
      return { ...state, alertIsOpen: !state.alertIsOpen };
    default:
      return state;
  }
}

export default reducer;

export function setDataAlert(data) {
  return {
    type: "SETDATAALERT",
    data,
  };
}

export function toggleAlert() {
  return {
    type: "TOGGLEALERT",
  };
}
