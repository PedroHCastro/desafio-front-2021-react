const INITIAL_STATE = {
  data: {},
};

function reduce(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDCONFIG":
      return {
        data: action.dataConfig,
      };
    default:
      return state;
  }
}

export default reduce;

export function addConfig(dataConfig) {
  return {
    type: "ADDCONFIG",
    dataConfig,
  };
}
