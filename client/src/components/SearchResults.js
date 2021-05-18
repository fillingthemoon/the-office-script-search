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
            case ('No results.'):
              return <p>{searchResults}</p>
            case ('Too many results!'):
              return <p>{searchResults}</p>
            default:
              return <DisplayLines lines={searchResults} />
          }
        })()
      }
    </div>
  )
}

export default SearchResults