import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'
import Episodes from './components/Episodes'
import Episode from './components/Episode'
import Scene from './components/Scene'

function App() {
  const [searchResults, setSearchResults] = useState(0)
  const [seasonId, setSeasonId] = useState(null)
  const [episodeId, setEpisodeId] = useState(null)
  const [sceneId, setSceneId] = useState(null)
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path='/search'>
          <SearchForm
            setSearchResults={setSearchResults}
          />
          <SearchResults
            searchResults={searchResults}
          />
        </Route>
        <Route path='/episodes'>
          <Episodes
            setSeasonId={setSeasonId}
            setEpisodeId={setEpisodeId}
          />
        </Route>
        <Route path='/seasons/:seasonId/episodes/:episodeId/lines'>
          <Episode
            seasonId={seasonId} episodeId={episodeId} setSceneId={setSceneId}
            loading={loading} setLoading={setLoading}
          />
        </Route>
        <Route path='/seasons/:seasonId/episodes/:episodeId/:sceneId/lines'>
          <Scene
            seasonId={seasonId} episodeId={episodeId} sceneId={sceneId}
            loading={loading} setLoading={setLoading}
          />
        </Route>
        <Route path='/'>
          <SearchForm
            setSearchResults={setSearchResults}
          />
          <SearchResults
            searchResults={searchResults}
          />
        </Route>
        <Route path='*'>
          <h2>Error 404: Not Found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
