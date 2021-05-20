import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import DisplayLines from './DisplayLines'

import { getSearchLines } from '../reducers/searchLinesReducer'
import { resetSeasonEpisodeScene } from '../reducers/seasonEpisodeSceneReducer'
import { resetEpisodeLines } from '../reducers/episodeLinesReducer'
import { resetSearchLines } from '../reducers/searchLinesReducer'

import { Form, Input, Button } from 'antd'

const SearchFormAndResults = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const dispatch = useDispatch()

  // reset all
  useEffect(() => {
    dispatch(resetSeasonEpisodeScene())
    dispatch(resetEpisodeLines())
    dispatch(resetSearchLines())
  }, [dispatch])

  const handleSubmit = () => {
    if (searchQuery.length < 3) {
      window.alert('The query is too short! Please enter at least 3 characters.')
      return
    }

    dispatch(resetSearchLines())
    dispatch(getSearchLines(searchQuery))
  }

  const formStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0 40px 0',
  }

  const searchInputStyle = {
    width: '400px',
    fontSize: '1rem',
  }

  return (
    <div>
      <Form layout='inline' onFinish={handleSubmit} style={formStyle}>
        <Form.Item>
          <Input
            type='text'
            placeholder='Search for any line from The Office here!'
            onChange={({ target }) => setSearchQuery(target.value)}
            style={searchInputStyle}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
            style={{ fontSize: '1rem' }}
          >
            Search
          </Button>
        </Form.Item>
      </Form>
      <DisplayLines />
    </div>
  )
}

export default SearchFormAndResults