import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import {getTokens, setAuthToken} from "@utils"
import {AUTH_ACTIONS} from "./auth/action"

import authReducer from "./auth/reducer";
import singUpReducer from "./auth/singUp/reducer";
import dialogReducer from "./dialog/reducer";

const {applyMiddleware, combineReducers, createStore} = require("redux")

const reducer = combineReducers({
  auth: authReducer,
  singUp: singUpReducer,
  dialog: dialogReducer,
})

export default () => {
  const {accessToken} = getTokens()
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
  )

  if (accessToken) {
    setAuthToken(accessToken)
    store.dispatch(AUTH_ACTIONS.fetchProfile())
  }

  return store
}
