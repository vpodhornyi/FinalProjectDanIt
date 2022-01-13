import {ACTIONS} from "./action";

const INIT_STATE = {
  name: '',
  email: '',
  birthDate: '',
}

export default (state = INIT_STATE, action) => {
  const {payload, type} = action;

  switch (type) {
    case String(ACTIONS.setName):
      return {
        ...state,
        name: payload,
      }
    case String(ACTIONS.setEmail):
      return {
        ...state,
        email: payload,
      }
    default:
      return state;
  }
}
