import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userCurrent from 'containers/reducers'
import userCart from 'components/cart/reducers'
import shopData from 'components/shop_page/reducers'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userCurrent,
  shop: shopData,
  cart: userCart
})

export default persistReducer(persistConfig, rootReducer)
