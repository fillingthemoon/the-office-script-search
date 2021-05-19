import lineService from '../services/lineService'
import episodeService from '../services/episodeService'

const seasonEpisodeSceneReducer = (state = [null, null, null], action) => {
  switch (action.type) {
    case 'INIT_BLOGS': {
      return action.data.blogs
    }
  }
  return state
}

export const initialiseBlogs = () => {
  return async dispatch => {

    // const blogs = await blogService.getAll()

    dispatch({
      type: 'INIT_BLOGS',
      data: {
        // blogs,
      }
    })
  }
}

export default seasonEpisodeSceneReducer