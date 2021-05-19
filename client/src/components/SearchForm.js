import React, { useState, useEffect } from 'react'

import lineService from '../services/lineService'

const SearchForm = (props) => {
  const [searchQuery, setSearchQuery] = useState('')

  const {
    setSeasonEpisodeScene,
    setSearchResults,
    setLoading,
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
      setSearchResults(0)
    } else if (results.length >= 1 && results.length <= 500) {
      setSearchResults(results)
    } else {
      setSearchResults(1)
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
    </div>
  )
}

export default SearchForm