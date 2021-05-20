import { setLoadingStatus } from './loadingReducer'

import episodeService from '../services/episodeService'

const episodesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_EPISODES': {
      return action.data.episodes
    }
    default: {
      return state
    }
  }
}

export const getEpisodes = () => {
  return async dispatch => {

    try {
      dispatch(setLoadingStatus(true))
      const episodes = await episodeService.getEpisodes()
      dispatch(setLoadingStatus(false))

      dispatch({
        type: 'GET_EPISODES',
        data: {
          episodes,
        }
      })
    } catch (error) {
      dispatch(setLoadingStatus(false))
      console.log(error)
    }
  }
}

export default episodesReducer