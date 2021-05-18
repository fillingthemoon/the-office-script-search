import React, { useState } from 'react'

import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'

function App() {
  const [searchResults, setSearchResults] = useState('No results.')

  return (
    <div>
      <h1>The Office Script Search</h1>
      <h2>Search for any line from The Office!</h2>
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
