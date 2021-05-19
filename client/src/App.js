import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'
import Episodes from './components/Episodes'
import Episode from './components/Episode'

function App() {
  const [searchResults, setSearchResults] = useState(0)
  const [loading, setLoading] = useState(false)
  const [seasonEpisodeScene, setSeasonEpisodeScene] = useState([null, null, null])

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path='/search'>
          <SearchForm
            setSeasonEpisodeScene={setSeasonEpisodeScene}
            setSearchResults={setSearchResults}
            setLoading={setLoading}
          />
          <SearchResults
            seasonEpisodeScene={seasonEpisodeScene}
            setSeasonEpisodeScene={setSeasonEpisodeScene}
            searchResults={searchResults}
            loading={loading}
          />
        </Route>
        <Route path='/episodes'>
          <Episodes setSeasonEpisodeScene={setSeasonEpisodeScene} />
        </Route>
        <Route path='/seasons/:seasonId/episodes/:episodeId/lines'>
          <Episode
            seasonEpisodeScene={seasonEpisodeScene}
            setSeasonEpisodeScene={setSeasonEpisodeScene}
            loading={loading} setLoading={setLoading}
          />
        </Route>
        <Route path='/seasons/:seasonId/episodes/:episodeId/scenes/:sceneId/lines'>
          <Episode
            seasonEpisodeScene={seasonEpisodeScene}
            setSeasonEpisodeScene={setSeasonEpisodeScene}
            loading={loading} setLoading={setLoading}
          />
        </Route>
        <Route path='/'>
          <SearchForm setSearchResults={setSearchResults} />
          <SearchResults searchResults={searchResults} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
