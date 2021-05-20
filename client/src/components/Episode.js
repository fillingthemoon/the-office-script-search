import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import DisplayLines from './DisplayLines'

import { getEpisodeLines } from '../reducers/episodeLinesReducer'
import { resetSearchLines } from '../reducers/searchLinesReducer'

const Episode = () => {

  const dispatch = useDispatch()
  const seasonEpisodeScene = useSelector(state => state.seasonEpisodeScene)

  const [season, episode, scene] = seasonEpisodeScene

  useEffect(() => {
    dispatch(resetSearchLines())
    dispatch(getEpisodeLines(season, episode))
  }, [dispatch, season, episode])

  if (!season || !episode) {
    return <Redirect to='/episodes' />
  }

  return (
    <DisplayLines />
  )
}

export default Episode