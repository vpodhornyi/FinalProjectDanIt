import {createActions} from '../utils';
import api, {URLS} from "@service/API";
import {catchError, getTokens, setAuthToken, setRefreshToken} from "../../utils";
import {DIALOG_ACTIONS} from "../dialog/action";

const actions = createActions(
  {
    actions: ["LOGOUT"],
    async: ["SIGNUP"],
  },
  {
    prefix: "auth",
  }
)

export const ACTIONS = {
  ...actions.actions,
  ...actions.async,
}

const {startLoading} = DIALOG_ACTIONS;

const signUp = (values) => async dispatch => {
  try {
    dispatch(startLoading());
    const data = await api.post(URLS.USER.SIGN_UP, values);
    // setAuthToken(data.jwt)
    // setRefreshToken(data.refreshToken)
    // dispatch(ACTIONS.signup.success(data.user))

  } catch (err) {
    // catchError(err)
    // dispatch(ACTIONS.signup.fail())
  }
}

export const AUTH_ACTIONS = {
  signUp,
}
