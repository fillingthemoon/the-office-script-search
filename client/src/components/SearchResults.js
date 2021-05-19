import React from 'react'

import DisplayLines from './DisplayLines'

const SearchResults = (props) => {

  const {
    seasonEpisodeScene,
    setSeasonEpisodeScene,
    searchResults,
    loading
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
              return (
                <DisplayLines
                  seasonEpisodeScene={seasonEpisodeScene}
                  setSeasonEpisodeScene={setSeasonEpisodeScene}
                  lines={searchResults}
                  loading={loading}
                />
              )
          }
        })()
      }
    </div>
  )
}

export default SearchResults