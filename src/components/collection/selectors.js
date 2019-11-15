import { createSelector } from 'reselect'

export const collectionsData = createSelector(
  state => state.shop.collection,
  collection => collection
)

export const collectionsSelectPreview = createSelector(
  collectionsData,
  data => (data ? Object.keys(data).map(item => data[item]) : [])
)

export const collectionsSelect = collectionId =>
  createSelector(
    collectionsData,
    data => (data ? data[collectionId] : null)
  )
