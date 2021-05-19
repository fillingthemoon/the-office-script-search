import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'
import Episodes from './components/Episodes'
import Episode from './components/Episode'
import Loading from './components/Loading'

function App() {
  const [searchResults, setSearchResults] = useState(0)
  const [loading, setLoading] = useState(false)
  const [seasonEpisodeScene, setSeasonEpisodeScene] = useState([null, null, null])

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path={['/search', '/']}>
          <SearchForm
            setSeasonEpisodeScene={setSeasonEpisodeScene}
            setSearchResults={setSearchResults}
            setLoading={setLoading}
          />
          <SearchResults
            seasonEpisodeScene={seasonEpisodeScene}
            setSeasonEpisodeScene={setSeasonEpisodeScene}
            searchResults={searchResults}
          />
        </Route>
        <Route exact path='/episodes'>
          <Episodes setSeasonEpisodeScene={setSeasonEpisodeScene} />
        </Route>
        <Route exact
          path={[
            '/seasons/:seasonId/episodes/:episodeId/lines'
            , '/seasons/:seasonId/episodes/:episodeId/scenes/:sceneId/lines'
          ]}
        >
          <Episode
            seasonEpisodeScene={seasonEpisodeScene}
            setSeasonEpisodeScene={setSeasonEpisodeScene}
            setLoading={setLoading}
          />
        </Route>
      </Switch>
      <Loading loading={loading} />
    </div>
  );
}

export default App;
