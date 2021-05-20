import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import seasonEpisodeSceneReducer from './reducers/seasonEpisodeSceneReducer'
import searchLinesReducer from './reducers/searchLinesReducer'
import episodeLinesReducer from './reducers/episodeLinesReducer'
import loadingReducer from './reducers/loadingReducer'
import episodesReducer from './reducers/episodesReducer'

const reducer = combineReducers({
  seasonEpisodeScene: seasonEpisodeSceneReducer,
  searchLines: searchLinesReducer,
  episodeLines: episodeLinesReducer,
  loadingStatus: loadingReducer,
  episodes: episodesReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store