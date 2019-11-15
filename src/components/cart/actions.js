import {
  TOGGLE_CART,
  ADD_ITEM_CART,
  REMOVE_ITEM_CART,
  ADD_QUANTITY,
  REMOVE_QUANTITY
} from './constants'

export const toggleCart = () => {
  return {
    type: TOGGLE_CART
  }
}

export const addItem = item => {
  return {
    type: ADD_ITEM_CART,
    payload: item
  }
}

export const removeItem = item => {
  return {
    type: REMOVE_ITEM_CART,
    payload: item
  }
}

export const addQuantity = item => {
  return {
    type: ADD_QUANTITY,
    payload: item
  }
}

export const removeQuantity = item => {
  return {
    type: REMOVE_QUANTITY,
    payload: item
  }
}
