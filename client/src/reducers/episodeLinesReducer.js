import { setLoadingStatus } from '../reducers/loadingReducer'

import episodeService from '../services/episodeService'

const episodeLinesReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_EPISODE_LINES': {
      return action.data.episodeLines
    }
    case 'RESET_EPISODE_LINES': {
      return action.data.reset
    }
    default: {
      return state
    }
  }
}

export const getEpisodeLines = (season, episode) => {
  return async dispatch => {

    try {
      dispatch(setLoadingStatus(true))
      const episodeLines = await episodeService.getEpisodeLines(season, episode)
      dispatch(setLoadingStatus(false))

      dispatch({
        type: 'GET_EPISODE_LINES',
        data: {
          episodeLines
        }
      })
    } catch (error) {
      dispatch(setLoadingStatus(false))
      console.log(error)
    }
  }
}

export const resetEpisodeLines = () => {
  return async dispatch => {

    const reset = null

    dispatch({
      type: 'RESET_EPISODE_LINES',
      data: {
        reset
      }
    })
  }
}

export default episodeLinesReducer