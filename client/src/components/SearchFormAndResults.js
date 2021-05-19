import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import DisplayLines from './DisplayLines'

import { getSearchLines } from '../reducers/searchLinesReducer'
import { resetSeasonEpisodeScene } from '../reducers/seasonEpisodeSceneReducer'
import { resetEpisodeLines } from '../reducers/episodeLinesReducer'
import { resetSearchLines } from '../reducers/searchLinesReducer'


const SearchFormAndResults = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const dispatch = useDispatch()
  const lines = useSelector(state => state.searchLines)
  const loadingStatus = useSelector(state => state.loadingStatus)

  // reset all
  useEffect(() => {
    dispatch(resetSeasonEpisodeScene())
    dispatch(resetEpisodeLines())
    dispatch(resetSearchLines())
  }, [dispatch])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (searchQuery.length < 3) {
      window.alert('The query is too short! Please enter at least 3 characters.')
      return
    }

    dispatch(getSearchLines(searchQuery))
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
          if (lines === null) {
            return (!loadingStatus && <p>No search query detected!</p>)
          } else if (lines.length === 0) {
            return (!loadingStatus && <p>Sorry, we could not find any matches!</p>)
          } else if (lines.length > 500) {
            return (!loadingStatus && <p>Sorry, too many results to display!</p>)
          } else {
            return <DisplayLines />
          }
        })()
      }
    </div>
  )
}

export default SearchFormAndResults