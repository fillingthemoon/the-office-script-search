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

    if (results.length >= 1 && results.length <= 40) {
      setSearchResults(results)
    } else {
      setSearchResults('Too many results!')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search here!'
          onChange={({ target }) => setSearchQuery(target.value)}
        />
        <input
          type='submit'
        />
      </form>
    </div>
  )
}

export default SearchForm