import { UPDATE_COLLECTIONS } from './constants'

export const updateCollections = collection => {
  return {
    type: UPDATE_COLLECTIONS,
    payload: collection
  }
}
