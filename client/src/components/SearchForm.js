import React, { useState } from 'react'

import lineService from '../services/lineService'

const SearchForm = (props) => {
  const [searchQuery, setSearchQuery] = useState('')

  const {
    setSearchResults
  } = props

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (searchQuery.length < 3) {
      window.alert('Query is too short!')
      return
    }

    const results = await lineService.getLine(searchQuery)

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