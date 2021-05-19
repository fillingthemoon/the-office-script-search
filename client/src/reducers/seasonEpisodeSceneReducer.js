const seasonEpisodeSceneReducer = (state = [null, null, null], action) => {
  switch (action.type) {
    case 'RESET_SEASON_EPISODE_SCENE': {
      return action.data.reset
    }
    case 'SET_SEASON_EPISODE_SCENE': {
      return action.data.seasonEpisodeScene
    }
    default: {
      return state
    }
  }
}

export const resetSeasonEpisodeScene = () => {
  return async dispatch => {

    const reset = [null, null, null]

    dispatch({
      type: 'RESET_SEASON_EPISODE_SCENE',
      data: {
        reset
      }
    })
  }
}

export const setSeasonEpisodeScene = (seasonEpisodeScene) => {
  return async dispatch => {

    dispatch({
      type: 'SET_SEASON_EPISODE_SCENE',
      data: {
        seasonEpisodeScene
      }
    })
  }
}

export default seasonEpisodeSceneReducer