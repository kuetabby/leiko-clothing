import { UPDATE_COLLECTIONS } from './constants'

const initialState = {
  collection: null
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collection: action.payload
      }

    default:
      return state
  }
}

export default reducers
