import {
  TOGGLE_CART,
  ADD_ITEM_CART,
  REMOVE_ITEM_CART,
  ADD_QUANTITY,
  REMOVE_QUANTITY
} from './constants'

import {
  addItemToCart,
  removeItemToCart,
  increaseQuantity,
  decreaseQuantity
} from './utils'

const initialState = {
  hidden: true,
  data: []
}

const reducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        hidden: !state.hidden
      }
    case ADD_ITEM_CART:
      return {
        ...state,
        data: addItemToCart(state.data, action.payload)
      }
    case REMOVE_ITEM_CART:
      return {
        ...state,
        data: removeItemToCart(state.data, action.payload)
      }

    case ADD_QUANTITY:
      return {
        ...state,
        data: increaseQuantity(state.data, action.payload)
      }

    case REMOVE_QUANTITY:
      return {
        ...state,
        data: decreaseQuantity(state.data, action.payload)
      }
    default:
      return state
  }
}

export default reducers
