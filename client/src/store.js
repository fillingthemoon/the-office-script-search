import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import seasonEpisodeSceneReducer from './reducers/seasonEpisodeSceneReducer'

const reducer = combineReducers({
  seasonEpisodeScene: seasonEpisodeSceneReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store