import {ACTIONS} from "./action";

const INIT = {
  loading: false,
  open: false,
  Component: '',
  props: {},
}

export default (state = INIT, action) => {
  const {payload, type} = action;
  const {Component} = payload ? payload : {
    loading: false,
    Component: '',
    props: {},
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
        Component,
      }
    case String(ACTIONS.startLoading):
      return {
        ...state,
        loading: true,
      }
    case String(ACTIONS.endLoading):
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
