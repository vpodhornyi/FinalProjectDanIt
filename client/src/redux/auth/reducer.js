import { getTokens } from "@utils"
import { ACTIONS } from "./action"

const { accessToken } = getTokens()

const INIT_STATE = {
  authorized: Boolean(accessToken),
  user: {},
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    default:
      return state
  }
}
