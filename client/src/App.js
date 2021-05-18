import React, { useState } from 'react'

import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'
import Episodes from './components/Episodes'

function App() {
  const [searchResults, setSearchResults] = useState('No results.')

  return (
    <div>
      <h1>The Office Script Search</h1>
      <Episodes />
      <SearchForm
        setSearchResults={setSearchResults}
      />
      <SearchResults
        searchResults={searchResults}
      />
    </div>
  );
}

export default App;
