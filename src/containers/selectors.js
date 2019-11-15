import { createSelector } from 'reselect'

export const selectUser = createSelector(
  state => state.user.data,
  data => data
)
