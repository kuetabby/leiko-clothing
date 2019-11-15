import { LOAD_CURRENT_USER, GET_CURRENT_USER } from './constants'

const initialState = {
  data: null,
  loading: false
}

const reducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_CURRENT_USER:
      return {
        ...state,
        loading: true
      }

    case GET_CURRENT_USER:
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default reducers
