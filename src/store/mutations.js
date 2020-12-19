import { SET_MENU } from "./mutations_type.js";

export default {
  SET_MENU(state, text) {
    state.selectMenu = text;
  },
};
