import {createActions} from '../utils';

const actions = createActions(
  {
    actions: ['OPEN_DIALOG', 'CLOSE_DIALOG', 'START_LOADING', 'END_LOADING'],
  },
  {
    prefix: 'dialog',
  }
)

export const ACTIONS = {
  ...actions.actions,
}

const openDialog = (Component, props) => dispatch => {
  dispatch(ACTIONS.openDialog({Component, props}));
}

const closeDialog = () => dispatch => {
  dispatch(ACTIONS.closeDialog());
}

const startLoading = () => dispatch => {
  dispatch(ACTIONS.startLoading());
}

const endLoading = () => dispatch => {
  dispatch(ACTIONS.endLoading());
}

export const DIALOG_ACTIONS = {
  openDialog,
  closeDialog,
  startLoading,
  endLoading,
}
