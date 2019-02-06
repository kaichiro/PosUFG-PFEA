import { ACTIONS_CONST } from "../../utils/utils";

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS_CONST.LOAD:
      return action.payload;
    default:
      return state;
  }
};

export default productsReducer;
