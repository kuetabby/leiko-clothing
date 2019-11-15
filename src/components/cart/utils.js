export const addItemToCart = (cartData, cartDataToAdd) => {
  const existingItem = cartData.find(data => data.id === cartDataToAdd.id)

  if (existingItem) {
    return cartData.map(data =>
      data.id === cartDataToAdd.id
        ? { ...data, quantity: data.quantity + 1 }
        : data
    )
  }

  return [...cartData, { ...cartDataToAdd, quantity: 1 }]
}

export const removeItemToCart = (cartData, cartDataToRemove) => {
  return cartData.filter(item => item.id !== cartDataToRemove.id)
}

export const decreaseQuantity = (cartData, cartDataToRemove) => {
  let data = cartData.find(item => item.id === cartDataToRemove.id)

  if (data.quantity === 1) {
    return cartData.filter(item => item.id !== cartDataToRemove.id)
  }

  return cartData.map(item =>
    item.id === cartDataToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  )
}

export const increaseQuantity = (cartData, cartDataToAdd) => {
  return cartData.map(item =>
    item.id === cartDataToAdd.id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  )
}
