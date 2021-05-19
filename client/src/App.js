import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'
import Episodes from './components/Episodes'
import Episode from './components/Episode'

function App() {
  const [searchResults, setSearchResults] = useState(0)
  const [seasonId, setSeasonId] = useState(null)
  const [episodeId, setEpisodeId] = useState(null)

  return (
    <div>
      <NavBar />
      <h1>The Office Script Search</h1>
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
          <Episode seasonId={seasonId} episodeId={episodeId}/>
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
