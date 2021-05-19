import React from 'react'

import DisplayLines from './DisplayLines'

const SearchResults = (props) => {

  const {
    seasonEpisodeScene,
    setSeasonEpisodeScene,
    searchResults,
    loading,
  } = props

  return (
    <div>
      <h2>Search Results</h2>
      {
        (() => {
          switch (searchResults) {
            case (0):
              return (!loading && <p>No search query detected!</p>)
            case (1):
              return (!loading && <p>Sorry, we could not find any matches!</p>)
            case (2):
              return (!loading && <p>Sorry, too many results to display!</p>)
            default:
              return (
                <DisplayLines
                  seasonEpisodeScene={seasonEpisodeScene}
                  setSeasonEpisodeScene={setSeasonEpisodeScene}
                  lines={searchResults}
                />
              )
          }
        })()
      }
    </div>
  )
}

export default SearchResults