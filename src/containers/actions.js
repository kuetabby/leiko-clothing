import { GET_CURRENT_USER } from './constants'

export const setCurrentUser = user => ({
  type: GET_CURRENT_USER,
  payload: user
})
