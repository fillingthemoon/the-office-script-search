import React, { useState } from 'react'

import lineService from '../services/lineService'

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const searchResult = await lineService.getLine(searchQuery)

    console.log(searchQuery, searchResult)
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