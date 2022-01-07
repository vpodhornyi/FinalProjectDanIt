import {ACTIONS} from "./action";

const INIT = {
  loading: false,
  open: false,
  component: ''
}

export default (state = INIT, action) => {
  const {payload, type} = action;
  const {loading} = payload ? payload : {
    loading: false,
  };

  switch (type) {
    case String(ACTIONS.closeDialog):
      return {
        ...state,
        open: false,
      }
    case String(ACTIONS.openDialog):
      return {
        ...state,
        open: true,
      }
    default:
      return state
  }
}
