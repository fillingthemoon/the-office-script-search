import React from 'react'

import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'

function App() {
  return (
    <div>
      <h1>The Office Script Search</h1>
      <h2>Search through every line from The Office!</h2>
      <SearchForm />
      <SearchResults />
    </div>
  );
}

export default App;
