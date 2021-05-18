import React from 'react'

import DisplayLines from './DisplayLines'

const SearchResults = (props) => {

  const {
    searchResults
  } = props

  return (
    <div>
      <h2>Search Results</h2>
      {
        (() => {
          switch (searchResults) {
            case (0):
              return <p>No results.</p>
            case (1):
              return <p>Too many results to display!</p>
            default:
              return <DisplayLines lines={searchResults} />
          }
        })()
      }
    </div>
  )
}

export default SearchResults