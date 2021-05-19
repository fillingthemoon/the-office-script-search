import React, { useState, useEffect } from 'react'

import DisplayLines from './DisplayLines'
import lineService from '../services/lineService'

const SearchFormAndResults = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState(0)

  const {
    seasonEpisodeScene, setSeasonEpisodeScene,
    loading, setLoading,
  } = props

  useEffect(() => {
    setSeasonEpisodeScene([null, null, null])
  }, [setSeasonEpisodeScene])

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (searchQuery.length < 3) {
      window.alert('Query is too short!')
      return
    }

    setLoading(true)
    const results = await lineService.getLine(searchQuery)
    setLoading(false)

    if (results.length <= 0) {
      setSearchResults(1)
    } else if (results.length >= 1 && results.length <= 500) {
      setSearchResults(results)
    } else {
      setSearchResults(2)
    }
  }

  const searchInputStyle = {
    width: '300px',
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search for any line from The Office here!'
          onChange={({ target }) => setSearchQuery(target.value)}
          style={searchInputStyle}
        />
        <input
          type='submit'
          value='Search'
        />
      </form>

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

export default SearchFormAndResults