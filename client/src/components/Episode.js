import React, { useEffect } from 'react'
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
    return <div>No season or episode selected.</div>
  }

  return (
    <DisplayLines />
  )
}

export default Episode