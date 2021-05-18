import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'
import Episodes from './components/Episodes'

function App() {
  const [searchResults, setSearchResults] = useState('No results.')

  return (
    <div>
      <NavBar />
      <h1>The Office Script Search</h1>
      <Switch>
        <Route path='/home'>
          <SearchForm
            setSearchResults={setSearchResults}
          />
          <SearchResults
            searchResults={searchResults}
          />
        </Route>
        <Route path='/episodes'>
          <Episodes />
        </Route>
        <Route path='/'>
          <SearchForm
            setSearchResults={setSearchResults}
          />
          <SearchResults
            searchResults={searchResults}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
