import {createActions} from '../../utils';

const actions = createActions(
  {
    actions: ['SET_NAME', 'SET_EMAIL'],
  },
  {
    prefix: 'singUp',
  }
)

export const ACTIONS = {
  ...actions.actions,
}

const setName = (value) => dispatch => {
  console.log(value);
  dispatch(ACTIONS.setName(value));
}

const setEmail = (value) => dispatch => {
  dispatch(ACTIONS.setEmail(value));
}

export const SING_UP_ACTIONS = {
  setName,
  setEmail,
}
