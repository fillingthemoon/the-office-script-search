import { setLoadingStatus } from '../reducers/loadingReducer'

import lineService from '../services/lineService'

const searchLinesReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_SEARCH_LINES': {
      return action.data.lines
    }
    case 'RESET_SEARCH_LINES': {
      return action.data.reset
    }
    default: {
      return state
    }
  }
}

export const getSearchLines = (searchQuery) => {
  return async dispatch => {
    try {
      dispatch(setLoadingStatus(true))
      const lines = await lineService.getLines(searchQuery)
      dispatch(setLoadingStatus(false))

      dispatch({
        type: 'GET_SEARCH_LINES',
        data: {
          lines,
        }
      })
    } catch (error) {
      dispatch(setLoadingStatus(false))
      console.log(error)
    }
  }
}

export const resetSearchLines = () => {
  return async dispatch => {

    const reset = null

    dispatch({
      type: 'RESET_SEARCH_LINES',
      data: {
        reset
      }
    })
  }
}

export default searchLinesReducer